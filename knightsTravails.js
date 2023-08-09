// Creates chess game board
const createBoard = (size = 8) => {
    let visited = [];
    
    // Creating 2D Array
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(false);
        }
        visited.push(row);
    }

    let lastCoord = [];
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(false);
        }
        lastCoord.push(row);
    }
}

// Creates knight

// All possible moves a knight could make
const possibleMoves = [
    [-2,-1], [-2,1],
    [-1, 2], [-1, -2],
    [2, -1], [2, 1],
    [1, 2], [1, -2] 
]

// Creates knight move
const knightMove = (start, end) => {
    
    /* BFS -> You need something like this
    const levelOrder = (callback) => {
        if (root === null) return [];
        const queue = [root];
        const result = []
        while (queue.length > 0) {
            const node = queue.shift();
            if (node.leftChild != null) queue.push(node.leftChild);
            if (node.rightChild != null) queue.push(node.rightChild);
            if (callback) callback(node);
            else result.push(node.data);
        }

        return result;
    }
    */

}