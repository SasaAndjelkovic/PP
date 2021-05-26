/* Write a program that shows text representation of a day in a week for a number input from 1 to 7. 
All other cases output a message explaining that input must be a number between 1 and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”
For input 6 or 7, shows that day is weekend. */

    var day = 4;
    var result = '';

    switch (day) {
        case 1: 
            result = 'Monday';
            break; 
        case 2: 
            result = 'Tuasday';
            break;
        case 3:
            result = 'Wednesday';
            break;
        case 4:     
            result = 'Thursday';
            break;
        case 5: 
            result = 'Friday';
            break;
        case 6:    
        case 7: 
            result = 'Weekend';
            break;
        default: 
            result = 'Input must be a number between 1 and 7';
            break;
    
    }

    console.log(result);