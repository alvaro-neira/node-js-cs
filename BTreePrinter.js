/**
 * I think it's broken
 */

"use strict";

function BTreePrinter() {

}

BTreePrinter.prototype.printNode=function (root) {
    var maxLevel = this.maxLevel(root);
    this.printNodeInternal([root], 1, maxLevel);
}

BTreePrinter.prototype.printNodeInternal=function(nodes, level, maxLevel) {
    if (nodes.length===0 || _isAllElementsNull(nodes)) {
        return;
    }

    var floor = maxLevel - level;
    var endgeLines =  Math.pow(2, (Math.max(floor - 1, 0)));
    var firstSpaces =  Math.pow(2, (floor)) - 1;
    var betweenSpaces =  Math.pow(2, (floor + 1)) - 1;

    _printWhitespaces(firstSpaces);

    var newNodes = []
    nodes.forEach( function(node ) {
        if (node != null) {
            console.log(""+node.data);
            newNodes.push(node.left);
            newNodes.push(node.right);
        } else {
            newNodes.push(null);
            newNodes.push(null);
            console.log(" ");
        }

        _printWhitespaces(betweenSpaces);
    });
    console.log("");

    for (var i = 1; i <= endgeLines; i++) {
        for (var j = 0; j < nodes.length; j++) {
            _printWhitespaces(firstSpaces - i);
            if (nodes[j] == null) {
                _printWhitespaces(endgeLines + endgeLines + i + 1);
                continue;
            }

            if (nodes[j].left != null) {
                console.log("/");
            } else {
                _printWhitespaces(1);
            }

            _printWhitespaces(i + i - 1);

            if (nodes[j].right != null) {
                console.log("\\");
            }else {
                _printWhitespaces(1);
            }

            _printWhitespaces(endgeLines + endgeLines - i);
        }

        //console.log("");
    }
    this.printNodeInternal(newNodes, level + 1, maxLevel);
}

function _printWhitespaces(count) {
    for (var i = 0; i < count; i++){
        console.log(' ');
    }
}

BTreePrinter.prototype.maxLevel=function(node) {
    if (node == null){
        return 0;
    }

    return Math.max(this.maxLevel(node.left), this.maxLevel(node.right)) + 1;
}

function _isAllElementsNull(list) {
    for(var i =0;i<list.length;i++){
        if(list[i]){
            return false;
        }
    }
    return true;
}

exports.BTreePrinter =BTreePrinter;