//alert("email is not found")


//let a=number(prompt("enter the value"))
//console.log(a+a);


//let a=10,b=2;
 
//console.log(a+b);
//console.log(a%b);
//console.log(a**b);
//console.log(a*b);

//let a=true,b=false;

//console.log(a && b);
//console.log(a || b);
//console.log(!b);
//console.log(!a);

//let c=10,d=20;

//console.log(c==10 && d==20);
//console.log(c==10 && d==10);
//console.log(c==10 || d==10);
//console.log(c==10 || d==20);
// console.log(!c==10);
// console.log(!d==10);

//looping statements
// let i=2;
// while (i<5) {
//     console.log("i=",i);
//     i++;
    
// }

// let i=5;
// do {
//     console.log("i=",i);
//     i--;
// } while (i>=0);



// for (let i = 0; i < 5; i++) {
//     console.log(i)
    
// }

//  let i=3;
//  let msg;
//  switch (i) {
//     case 1:
//         order="laptop;"
//         break;
//     case 2:
//         order="mobile";
//         break;
//     case 3:
//         order="tv";
//         break;

//     default:
//         break;
//  }

// console.log(order)

//  function outerFun() {

//     function nestedFun(){
//         let local="i am alocal variable";
//          return local;
//     }
// let result= nestedFun();
// console.log(result);
//  }
// outerFun();

     
const multiply = (a, b) => a * b;

console.log(multiply(5, 3));

let a=10;
function outerFun(){ {
    console.log("This function runs immediately!");
  }
  
  
  function nestedFun(){
      let local=20;
       return local;
    }
  let result = nestedFun()
  console.log(result);  }

outerFun()
