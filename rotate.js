//旋转图像（https://leetcode.cn/problems/rotate-image/）

function rotate(matrix){
    if(matrix.length === 1){
        return matrix;
    }
    let n = matrix.length, cN = n, sI1 = 0, sJ1 = 0, sI2 = 0, sJ2 = n - 1, sI3 = n - 1, sJ3 = n - 1, sI4 = n - 1, sJ4 = 0;
    for(let x = 0; x < Math.floor(n / 2); x++){
        console.log(x)
        //从外到内第一层
        let t = 0, i1 = sI1, j1 = sJ1, i2 = sI2, j2 = sJ2, i3 = sI3, j3 = sJ3, i4 = sI4, j4 = sJ4;
        while (t < cN - 1){
            let point1A = matrix[i1][j1], point1B = matrix[i2][j2], point1C = matrix[i3][j3], point1D = matrix[i4][j4];
            let cur1 = point1A;
            matrix[i2][j2] = cur1;
            matrix[i3][j3] = point1B;
            matrix[i4][j4] = point1C;
            matrix[i1][j1] = point1D;
            j1 += 1; i2 += 1; j3 -= 1; i4 -= 1;
            t++;
        }
        sI1++; sJ1++; sI2++; sJ2--; sI3--; sJ3--; sI4--; sJ4++; cN -= 2;
        console.log(cN)
        //第二层
    }
    // console.log(matrix);
    return matrix;
}

console.log(rotate([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]));