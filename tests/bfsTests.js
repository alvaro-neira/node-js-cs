/**
 * Created by aneira on 6/26/16.
 */

/**
 * This is
 * http://www.tutorialspoint.com/data_structures_algorithms/breadth_first_traversal_in_c.htm
 */
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

bfs(gr,0);

gr=new Graph();

/**
 * This is
 * https://www.youtube.com/watch?v=QRq6p9s8NVg
 */
gr.addVertex('A');
gr.addVertex('B');
gr.addVertex('C');
gr.addVertex('D');
gr.addVertex('E');
gr.addVertex('F');
gr.addVertex('G');
gr.addVertex('H');
gr.addVertex('S');

gr.addEdge(0, 1);
gr.addEdge(0, 8);
gr.addEdge(6, 8);
gr.addEdge(2, 8);
gr.addEdge(6, 5);
gr.addEdge(2, 5);
gr.addEdge(2, 3);
gr.addEdge(2, 4);
gr.addEdge(6, 7);
gr.addEdge(4, 7);

gr.printVertices();
gr.printAdjacencyMatrix();

bfs(gr,0);