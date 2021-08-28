/*
Twitch.TV via Codility

Battleship is a game played on a rectangular board. You are given a representation of such a board of size N (height) x M (width) with the information about the locations of the ships.

The board is given as an array B, whose every element is a string that corresponds to one row of the game board. Each character of each string represents a cell of the board and is either.
  - a '#' character, making a part of a ship; or
  - a '.' character, representing an empty cell.

  Two cells that share a side and have a value of '#' are parts of the same ship. Cell (X, Y) share a side with cells (X, Y-1), (X, Y+1), (X-1, Y) and (X+1, Y)

  In the Battleships game there are three types of ships:

  Patrol Boats of size 1:
    #
  Submarines of size 2, which come in two shapes:
    ##   #
         #

  Destroyers of size 3, which come in size shapes:
    ###   #   ##   ##   #    #
          #   #     #   ##  ##
          #
*/

/*
Your task is to find the number of ships of each type occuring on the board .
For examplem in the board represented by B = [".##.#", "#.#..", "#...#", "#.##."], there are two patrol boats (marked on the image below as 'P'), one submarine ('S') and two destroyers ('D')
    .##.#
    #.#..
    #...#
    #.##.

Write a function:
  solution(B);

that, given an array B consisting of N strings of length M each returns an array R of three integers, such that:
   - R[0] represents the number of Patrol Boats.
   - R[1] represents the number of Submarines.
   - R[2] represents the number of Destroyers.
*/

/*
Examples:
B = [".##.#", "#.#..", "#...#", "#.##."]; // [2,1,2]
B = [".#..#", "##..#", "...#."]; // [1,1,1]
B = [".....", ".....", ".....", "....."]; // [0,0,0]
*/

function solution(B) {
  // write your code in JavaScript (Node.js 8.9.4)
  let des = 0;
  let sub = 0;
  let pab = 0;

  let board = [];
  let subArr = [];
  for(let i = 0; i < B.length; i++){
      for(let j = 0; j < B[i].length; j++){
          if(B[i][j] === '.'){
              subArr[j] = 0;
          } else {
              subArr[j] = 1;
          }
      }
      board.push(subArr);
      subArr = [];
  }
  //console.log(board);


 for(let k = 0; k< board.length; k++){
     for(let z = 0; z < board[k].length; z++){
         if(board[k][z] === 1){
             //check destroyer(des)
             if(z+1 <= board[k].length - 1 && z+2 <= board[k].length - 1){
                 if(board[k][z] === 1 && board[k][z+1] === 1 && board[k][z+2] === 1){
                     des++;
                     board[k][z] = 0;
                     board[k][z+1] = 0;
                     board[k][z+2] = 0;
                 }
             }
             if ( k+1 <= board.length - 1 && k+2 <= board.length - 1) {
                 if (board[k][z] === 1 && board[k+1][z] === 1 && board[k+2][z] === 1) {
                     des++;
                     board[k][z] = 0;
                     board[k+1][z] = 0;
                     board[k+2][z] = 0;
                 }
             }
             if (z+1 <= board[k].length - 1 && k+1 <= board.length - 1){
             if (board[k][z] === 1 && board[k][z+1] === 1 && board[k+1][z] === 1) {
                 des++;
                 board[k][z] = 0;
                 board[k][z+1] = 0;
                 board[k+1][z] = 0;
             }
             }
             if (z+1 <= board[k].length - 1 && k+1 <= board.length - 1) {
             if (board[k][z] === 1 && board[k][z+1] === 1 && board[k+1][z+1] === 1) {
                 des++;
                 board[k][z] = 0;
                 board[k][z+1] = 0;
                 board[k+1][z+1] = 0;
             }
             }
             if (z+1 <= board[k].length - 1 && k+1 <= board.length - 1) {
              if (board[k][z] === 1 && board[k+1][z] === 1 && board[k+1][z+1] === 1) {
                 des++;
                 board[k][z] = 0;
                 board[k+1][z] = 0;
                 board[k+1][z+1] = 0;
             }
             }
             if (z-1 >= 0 && k+1 <= board.length - 1) {
             if (board[k][z] === 1 && board[k+1][z-1] === 1 && board[k+1][z] === 1) {
                 des++;
                 board[k][z] = 0;
                 board[k+1][z-1] = 0;
                 board[k+1][z] = 0;
             }
             }

             //Check board for submariens
             if (z+1 <= board[k].length - 1) {
              if (board[k][z] === 1 && board[k][z+1] === 1) {
                 sub++;
                 board[k][z] = 0;
                 board[k][z+1] = 0;
             }
             }
             if (k+1 <= board.length - 1) {
              if (board[k][z] === 1 && board[k+1][z] === 1) {
                 sub++;
                 board[k][z] = 0;
                 board[k+1][z] = 0;
             }
             }

             //Check board for patrol boats
              if (board[k][z] === 1) {
                 pab++;
                 board[k][z] = 0;
             }
         }
     }
 }

 let count = [pab, sub, des];
 //console.log(count);
 return count;
}
