/*   Write a program that computes average marks of the following students. 
       Then use this average to determine the corresponding grade.  
       (pozajmljen pocetni deo od VladanStar)    */

var students = [['David', 80], ['Marko', 77], ['Dany', 88], ['John', 95], ['Thomas', 68]];
var total = 0;
var result = '';

for (i = 0; i < students.length; i++) {
    total += students[i][1];
    }

    var averageMarks = 10*Math.ceil(total / students.length / 10);

switch (averageMarks) {
    case 60:
        result = 'F'
        break;
    case 70:
        result = 'D'
        break;
    case 80:
        result = 'C'
        break;
    case 90:
        result = 'B'
        break;
    case 100:
        result = 'A'
        break;
    default:
        result = 'Better luck next time!'
        break;
}

console.log (result);

