console.log("i'm working");


// task 1 

function testMe() {
 let s1 = 2
 let s2 = 3
 let s3 = 4
    return s1 * s2 * s3 
}


// task 2 

function AI (n1, n2){
    let msg = "hi"
let t1="hello"
let t2="I cannot understand"
  
 if (n1==t1 && n2==t2)

   {
        return msg;
    }
}


// task 3 

function tripleSum (n1,n2,n3){
    return n1+n2+n3
}

// task 4
function factorial (m1){
    if (m1==0 || m1==1){
      return 1;
    }
    return factorial(m1-1)*m1;
  } 


//task 5 
function calculator (param1, sign, param2) {
    if (sign == "+"){
        return param1+ param2
    }

    else if (sign == "-") {
        return param1 - param2
    }

    else if (sign == "*") {
        return param1*param2
    }


    else if (sign == "/") {
        return param1 / param2
    }
}


// task 6
function absolute (x) {
    return Math.abs(x)
}


// task 7 
function fizzBuzz(o){
    if (o % 3 == 0 ){
        return "fizz"
    }

    else if (o % 7 == 0){
        return "buzz"
    }

    else if (o % 3 ==0  && o % 7 ==0 ){
        return "fizzbuzz"
    }
}

// task 8 
function positive (m) {
    if (m>0){
        return true
    }
}

// task 9 
function transform (a){
let numbers = ["zero","one","two","three","four","five","six","seven","eight","nine"]
if (a<=9){
    return numbers[a]

}
else if (a < 0 || a > 9 ){
    return "please enter a number between 0 and 9"
}
}


// task 10 
function sum(array){

   
    const countNumbers = (array = []) => {
       let dum = 0;
       for(let i = 0; i < array.length; i++){
          const el = array[i]; if(+el){
             dum += +el;
          };
       };
       return dum;
    }

   
    

  
}





           /*
        Tasks
        
        1) Create function testMe that creates 3 variables and returns their product
        2) Create function AI that respond "hi" if the parameter is "hello", "I cannot understand" otherwise
        3) Create function tripleSum that receives 3 numbers and returns the product of them
        4) Create function factorial that calculates the factorial of the given param
        5) Create function calculator with 3 params, two numbers (param1 and param2) and a sign between "+","-","*","/". Return the operation between param1 and param2
        6) Create function absolute that returns the absolute value of the parameter (es.: p = 1 returns 1, p = -27 returns 27)
        7) Create function fizzBuzz that returns fizz if param is multiple of 3, buzz if multiple of 7, fizzbuzz if multiple of 3 and 7. Otherwise returns the same number
        8) Create function positive that returns true if the params is greater than 0
        9) Create function transform that receives a number between 0 and 9 and returns a string containing the number (ex.: 0 returns "zero", 1 returns "one")
        10) Create function sum that receives an array as parameter and return the sum of the elements (only numerical ones)
        11) Create function min that receives an array and returns the minumum value in the array
        12) Create function arrayFi that receives an object and trasforms it in an array. Example: arrayFi({ name: "John", surname: "Doe"}) returns [ "name", "john", "surname", "Doe"]
        13) Create function objectyFi that revert the array generated by arrayFi into and object
        14) Create function revertArray that revert the elements into an array
        15) Create function swappy that receives 2 positions and swap them into the array. Example: array = [ 1, 2, 3, 4]. Swappy(0, 3) ==> [3, 2, 1, 4]
*/