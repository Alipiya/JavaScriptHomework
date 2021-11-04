'use strict';
/*
1.10 плюс 10 = 20
2.20 плюс строка 10 = строка 2010
*/
let result1 = 10 + 10 + "10";
console.log(result1);

/*
1.10 плюс строка 10 = строка 1010
2.строка 1010 плюс 10 = строка 101010
*/
let result2 = 10 + "10" + 10;
console.log(result2);

/*
1. 10 плюс 10 = 20
2. 20 плюс строка, преобразованная в число 10 = 30
*/
let result3 = 10 + 10 + +"10";
console.log(result3);

/*
1.10 разделить на -0 = -бесконечность
*/
let result4 = 10 / -"";
console.log(result4);

/*
1.10 разделить на NaN = NaN
*/
let result5 = 10 / +"2,5";
console.log(result5);
