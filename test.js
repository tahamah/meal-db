// 01. let & const
/* 
let myName = 'Tami';
const myPare = 'Tom'
console.log(myName, myPare); 
*/

// 02. template string
/* 
const message = `Hey, I am ${myName}. I am in class seven.`
console.log(message);
let phone={
    color :{
        my: 'red',
        your: 'black'
    },
    price : 12000,
    brand : 'samsung',
    battery : '5000mAh'
}
const myPhoneColor = `My phone color is ${phone.color.my}.`
const yourPhoneColor = `Your phone color is ${phone.color.your}.`
console.log(yourPhoneColor);
console.log( myPhoneColor); 
*/

//03.array function
//a.
/* 
const sum = num => num / 5;
console.log(sum(25));
const sum =() => 25 / 5;
console.log(sum()); 

//b.
const result = (num1, num2) => (num1+2) * (num2+2);
console.log(result(33,23));

//c.
const result = (num1, num2, num3) => num1 * num2 * num3;
console.log(result(2,2,2,)); 

//d
const result = (num1, num2) => {
   return (num1+2) * (num2+2);
};
console.log(result(33,23));
*/

//04.Home Wark


//05.Map
/* 
const numbers = [12,13,25,62,14,52,13,16,63]
const result = numbers.map(number => number * 5) 
console.log(result);

const numbers = [2,4,6,8,3,7,6,8,4]
const result = numbers.map(number => number * 2)
console.log(result) 
*/


//06.filter
/* 
const numbers = [2,4,6,8,3,7,6,8,4]
const result = numbers.filter(number => number % 2 != 0)
console.log(result)  
*/

//07.find
/* 
const products =[
    {name:'phone',color:'red',price: 2000,made: 'bd'},
    {name:'tab',color:'silver',price: 5000,made: 'china'},
    {name:'headPhone',color:'black',price: 6000, made: 'japan'}
]
const price5000 = products.find(product => product.price== 5000);
console.log(price5000); 
*/

//08.destructing on object
/* 
const {name,color} = {name:'phone',color:'red',price: 2000,made: 'bd'}
console.log(name,color); 
*/

//09.destructing on array
/* 
const [one,two,three] = [20, 50, 60, 100, 33];
console.log(three); 
*/

// 10.default parameter
/* 
const sum = (n1,n2,n3=7) =>n1+n2+n3;
const result = sum(5,3)
console.log(result); 
*/
