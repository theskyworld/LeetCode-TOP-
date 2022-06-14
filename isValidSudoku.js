//有效的数独（https://leetcode.cn/problems/valid-sudoku/）

function isValidSudoku(board){
//    保证同一行、同一列中不存在重复的值
    let res = true, i = 0, j = 0;
    //判断同一行中是否存在重复的值
    while (i < 9){
        for(let x = 0; x < board[i].length - 1; x++){
            for(let y = x + 1; y < board[i].length;y++){
                if(board[i][y] === board[i][x] && (board[i][y] !== '.' && board[i][x] !== '.')){
                    res = false;
                    break;
                }
            }
        }
        i++;
    }
    //    判断同一列中是否存在重复的值
    while (j < 9){
        let helpArr = [];
        for(let x = 0; x < 9; x++){
            helpArr.push(board[x][j]);
        }
        for(let m = 0; m < helpArr.length - 1; m++){
            for (let n = m + 1; n < helpArr.length; n++){
                if(helpArr[n] === helpArr[m] && (helpArr[n] !== '.' && helpArr[m] !== '.')){
                    res = false;
                    break;
                }
            }
        }
        j++;
    }
    //判断同一个3x3宫格内是否存在重复的值
    let sI1 = 0, eI1 = 3, sI2 = 0, eI2 = 3, z = 0;
    for(; sI1 <= 6, eI1 <= 9, sI2 <= 6, eI2 <= 9, z < 9;){
        let helpArr2 = [];
        for(let x = sI1; x < eI1; x++){
            for(let y = sI2; y < eI2; y++){
                // console.log(x,y);
                let cur = board[x][y];
                if(cur !== '.' && helpArr2.includes(cur)){
                    res = false;
                    break;
                }else{
                    helpArr2.push(cur);
                }
            }
        }
        sI2 += 3;
        eI2 += 3;
        if(eI2 === 12){
            sI1 += 3;
            eI1 += 3;
            sI2 = 0;
            eI2 = 3;
        }
        z++;
    }
    return res;
}

console.log(isValidSudoku([[".",".",".",".","5",".",".","1","."],[".","4",".","3",".",".",".",".","."],[".",".",".",".",".","3",".",".","1"],["8",".",".",".",".",".",".","2","."],[".",".","2",".","7",".",".",".","."],[".","1","5",".",".",".",".",".","."],[".",".",".",".",".","2",".",".","."],[".","2",".","9",".",".",".",".","."],[".",".","4",".",".",".",".",".","."]]));