# Knights-Travails

Knight's Travails is a problem that shows all the possible moves that a knight can make on a chess board. A knight can move two steps forward and one step to the side. With this patttern knight in chesss can move to any square on the standard 8x8 chess board from another other square, given enough turns. This is to say that a knight could move to all squares on the board, given enough turns.

## Goal

The goal of this project is to show the shortest possible path that a knight can make to get from one square to another.

1. The `createBoard` function creates the gameboard where the knight moves.

- This creates a game tree, that represents the chesss board as a tree data structure with places on the board being equivalent to different nodes in a tree.

2. The `validMove` function defines what a legitmate move for a knight is and the `possibleMove` function shows how a knight can move on the board.

3. The `knightMove` function is the main function that finds the shortes path between a starting square (or node) and the ending square.

- In this function, I implemented a Breath-First Search (BFS).
- BFS is an algorithm that searches tree data structures by starting at the root of the tree (the starting node) and searches the tree one level at a time.
- The reason is that this search need to run infinetly. Additionally, BFS traverses the tree by going through all the nodes on the same level before moving to the next level. This makes this algorithm more suitble for searching for the shortest path between two points (in constrast with Depth-First Search (DFS)).
