const readline=require('readline-sync');
let n1=readline.question("Enter the first number: ");
let n2=readline.question("Enter the second number: ");
n1=parseFloat(n1);
n2=parseFloat(n2);
let op=readline.question("Enter the operator: ");
let result;
switch(op){
    case '+':
        result=n1+n2;
        break;
    case '-':
        result=n1-n2;
        break;
    case '*':
        result=n1*n2;
        break;
    case '/':
        result=n2!=0?n1/n2:"Undefined";
        break;
    case '%':
        result=n1%n2;
        break;
    case '**':
        result=n1**n2;
        break;
    default:
        console.log("Invalid operator");
        break;
}
console.log(`${n1} ${op} ${n2} = ${result}`);