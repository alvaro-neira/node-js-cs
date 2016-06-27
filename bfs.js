/**
 * Created by aneira on 6/25/16.
 */
"use strict";

var Graph=require('./data_structures/graph').Graph;
var Queue=require('./data_structures/queue').Queue;

function bfs(gr,ini){
    var i=ini;  
    var queue=new Queue();
    var current=gr.vertices[i];
    gr.markVisited(i);
    console.log(current);

    queue.insert(current);
    while(!queue.isEmpty()){
        current=queue.remove().data;
        i=getAdjUnvisitedVertex(gr,current.index);
        while(i!==-1){
            var newVertex=gr.vertices[i];
            gr.markVisited(i);
            console.log(newVertex);
            queue.insert(newVertex);
            i=getAdjUnvisitedVertex(gr,current.index);
        }

    }
    //TODO:
    //reset node visited
}

/**
 * get the adjacent unvisited vertex
 * @param gr
 * @param vertexIndex
 */
function getAdjUnvisitedVertex(gr, vertexIndex) {
    var i;
    if(!vertexIndex && vertexIndex !== 0){
        console.log('ERROR: undefined vertexIndex');
        return -1;
    }
    for(i = 0; i<gr.vertexCount; i++) {
        if(gr.adjacencyMatrix[vertexIndex][i] === 1 && !gr.vertices[i].visited){
            return i;
        }
    }
    return -1;
}



exports.getAdjUnvisitedVertex=getAdjUnvisitedVertex;
exports.bfs=bfs;