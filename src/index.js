
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
    if (matrix === []) return []
    let arr1 = []
    for (let i = 0; i < matrix.length; i++) { 
        if (i % 2 !== 0)  matrix[i] = matrix[i].reverse();
        for (let j = 0; j < matrix[i].length; j++) { 
         arr1.push(matrix[i][j]); 
            } 
    } 
    return arr1
}
