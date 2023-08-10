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

// All possible moves a knight could make
const validMove = (row, col) => {
    return row >= 0 && row < size && col >= 0 && col < size;
}

const getPossiblePath = (row, col) => {
    const possibleMoves = [
        [-2,-1], [-2,1],
        [-1, 2], [-1, -2],
        [2, -1], [2, 1],
        [1, 2], [1, -2] 
    ];
    
    return possibleMoves.map(coord => [row + coord[0], col + coord[1]])
    .filter(coord => validMove(coord[0], coord[1]));
}


// Creates knight move
const knightMove = (start, end) => {
    const board = createBoard();

    if ((!board.validMove(start[0], start[1])) || (!board.validMove(end[0], end[1]))) {
        throw new error("Not a valid coordinate");
    }

    // Find Path
    let queue = [start];
    while(queue.length !== 0) {
        const currentCoord = queue.shift();
        if (currentCoord[0] === end[0] && currentCoord[1] === end[1]) {
            break;
        }

        const nextCoord = getPossiblePath(possibleMoves(currentCoord[0], currentCoord[1]));
        nextCoord.forEach((coord) => {
            if (board.visited[coord[0][coord[1]]]) {
                return;
            }
            queue.push(coord);
            board.visited[coord[0]][coord[1]] = true;
            board.lastCoord[coord[0]][coord[1]] = [currentCoord[0], currentCoord[1]];
        });
    }

    // Backtrace Path
    const path = [];
    let currentCoord = end; 
    while (currentCoord[0] !== start[0] && currentCoord[1] !== start[1]) {
        path.unshift(currentCoord);
        currentCoord = board.lastCoord[currentCoord[0]][currentCoord[1]];
    }
    path.unshift(start);

    // Output
    console.log(`You made it in ${path.length} moves! Here is your path: `);
    path.forEach(coord => console(coord));
    return path;
}