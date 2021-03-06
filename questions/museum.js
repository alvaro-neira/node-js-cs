/**
 * Created by aneira on 6/26/16.
 * https://www.careercup.com/question?id=5722862468988928
 *
 * A museum was represented by a square matrix that was filled with O, G, and W where O represented
 * open space G represented guards, and W represented walls. Write a function that accepts the square
 * matrix and returns another square matrix where all of the O's in the matrix are replaced with the
 * number of how many spaces they are away from a guard, without being able to go through any walls.
 * I could do it only for N<=2
 */

"use strict"

const StringUtils = require('../node-utils/lib/stringUtils');
const Graph = require('../data_structures/graph').Graph;
const Queue = require('../data_structures/queue').Queue;

const bfs = require('../bfs').bfs;
const getAdjUnvisitedVertex = require('../bfs').getAdjUnvisitedVertex;

function findClosestGuardBFS(graph, N, row, column) {
    let i = row * N + column;
    console.log('\nBFS starting: i=' + i);
    let queue = new Queue();
    graph.vertices[i].distance = 0;
    let current = graph.vertices[i];
    visit(graph, i);

    queue.insert(current);
    while (!queue.isEmpty()) {
        current = queue.remove().data;
        i = getAdjUnvisitedVertex(graph, current.index);
        while (i !== -1) {
            var newVertex = graph.vertices[i];
            newVertex.distance = current.distance + 1;
            var letter = visit(graph, i);
            if (letter === 'g') {
                graph.reset();
                return current.distance + 1;
            }
            queue.insert(newVertex);
            i = getAdjUnvisitedVertex(graph, current.index);
        }
    }
    graph.reset();
    return -1;
}

function visit(graph, i) {
    graph.markVisited(i);
    console.log("bfs, vertex data=" + graph.vertices[i].data);
    return graph.vertices[i].data;
}

function findGuardDistances(museum) {
    let graph = new Graph();
    let N = museum.length;
    let i;
    let j;
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            graph.addVertex(museum[i][j]);
            let currentIndex = graph.vertexCount - 1;
            let c = i * N + j;
            console.log(currentIndex, c);
            let up = i > 0 ? (i - 1) * N + j : -1;
            let down = i < (N - 1) ? (i + 1) * N + j : -1;
            let left = j > 0 ? i * N + j - 1 : -1;
            let right = j < (N - 1) ? i * N + j + 1 : -1;
            console.log(up, down, left, right);
            if (up >= 0) graph.addEdge(currentIndex, up);
            if (down >= 0) graph.addEdge(currentIndex, down);
            if (left >= 0) graph.addEdge(currentIndex, left);
            if (right >= 0) graph.addEdge(currentIndex, right);
        }
    }
    graph.printVertices();
    graph.printAdjacencyMatrix();
    // bfs(graph,0);

    /**
     * Run Through Matrix
     */
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            if (museum[i][j] === 'o') {
                museum[i][j] = findClosestGuardBFS(graph, N, i, j);
            }
        }
    }
    return museum;
}


// var museum = [['o']];
//  var museum =
//     [['o', 'g'],
//         ['o', 'o']];
// var museum =
//     [['o', 'o', 'g'],
//         ['o', 'o', 'o'],
//         ['o', 'o', 'o']];
const museum =
    [['o', 'o', 'o', 'g', 'o'],
        ['o', 'o', 'w', 'o', 'o'], ['o', 'g', 'o', 'o', 'w'],
        ['o', 'w', 'g', 'o', 'o'], ['w', 'o', 'o', 'o', 'g']
    ];
StringUtils.printMatrix(museum, museum.length);
let res = findGuardDistances(museum);
StringUtils.printMatrix(res, res.length);
