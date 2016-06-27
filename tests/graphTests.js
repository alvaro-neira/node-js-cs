/**
 * Created by aneira on 6/25/16.
 */

"use strict";

var Graph=require('../data_structures/graph').Graph;

var gr=new Graph();
gr.addVertex('S');
gr.addVertex('A');
gr.addVertex('B');
gr.addVertex('C');
gr.addVertex('D');

gr.addEdge(0, 1);    // S - A
gr.addEdge(0, 2);    // S - B
gr.addEdge(0, 3);    // S - C
gr.addEdge(1, 4);    // A - D
gr.addEdge(2, 4);    // B - D
gr.addEdge(3, 4);    // C - D

gr.printVertices();
gr.printAdjacencyMatrix();

