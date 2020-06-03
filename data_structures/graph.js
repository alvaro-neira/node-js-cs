'use strict';

const StringUtils = require('../node-utils/lib/stringUtils');
const MAX_VERTICES = 100;

function Vertex(data, idx) {
    this.data = data;
    this.index = idx;
    this.visited = false;

}

function Graph() {
    this.vertices = [];
    this.adjacencyMatrix = [];
    this.vertexCount = 0;
    let i = 0;
    for (; i < MAX_VERTICES; i++) {
        this.adjacencyMatrix[i] = [];
    }

}

Graph.prototype.addVertex = function (data) {
    if (this.vertexCount === MAX_VERTICES) {
        console.log('ERROR: max vertex capacity reached');
        return;
    }
    this.vertices[this.vertexCount] = new Vertex(data, this.vertexCount);
    this.vertexCount++;

}

Graph.prototype.printVertices = function () {
    console.log(StringUtils.singleLineArray(this.vertices));
}

Graph.prototype.printAdjacencyMatrix = function () {
    let i = 0;
    let j = 0;

    for (; i < this.vertexCount; i++) {
        let str = '';
        for (j = 0; j < this.vertexCount; j++) {
            str += (this.adjacencyMatrix[i][j] ? this.adjacencyMatrix[i][j] : 0) + ',';
        }
        console.log(str);
    }
}

Graph.prototype.reset = function () {
    let i = 0;

    for (; i < this.vertexCount; i++) {
        this.vertices[i].visited = false;
    }
}

Graph.prototype.addEdge = function (v1, v2) {
    if (!this.adjacencyMatrix[v1] || !this.adjacencyMatrix[v2]) {
        console.log('ERROR: max vertex capacity reached adding edge');
        return;
    }
    this.adjacencyMatrix[v1][v2] = 1;
    this.adjacencyMatrix[v2][v1] = 1;
}

Graph.prototype.markVisited = function (i) {
    this.vertices[i].visited = true;

}

exports.Graph = Graph;
