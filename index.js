console.log(typeof document);
document.getElementById('example').innerHTML = "Javascript rules why"
var z = 10+4-2;
var a = "Good "+"day"
var b = 9 % 3;
var $navis = "Navis Michael Bearly";
console.log(z);
console.log(a);
console.log(b);
console.log($navis);

function printa(a){
  console.log("This is a function "+a);
}
printa("print");
var printb = function(a,b,c) {
  console.log(a+b+c)
}
printb("One ","Two ","Three ");

var multiply = function(a,b){
  return a*b;
}
var product = multiply(5,10);
console.log(product);

var dog = {
  name: 'Buddy',
  breed: 'Golden Retriver',
  weight: 60,
  bark: function(){
    console.log("Wuff");
  }
};

//console.log(dog);
console.log(dog.breed);
dog.bark();

var points =[25,16,7,9,31];
last = points.pop();
console.log(points,last);
console.log(points[1]);
console.log(points.length);

var a = true;
console.log(a);
console.log(typeof a);
var a = 5 == 5;
console.log(a);
var a = 5 > 7;
console.log(a);
var a = 5 < 7;
console.log(a);

if(8 > 14) {
  console.log("8 is greater")
}
else {
  console.log("No 14 is greater")
}

var check = function(number) {
  if(number % 2 == 0) {
    console.log(number + " is even!")
  }
  else {
    console.log(number + " is odd.")
  }
}

check(4);
check(7);

var x = 1;

switch(x) {
  case 1:
    console.log("The number is one");
    break;
  case 2:
    console.log("The number is two");
    break;
  case 3:
    console.log("The number is three");
    break;
  default:
    console.log("The number is "+x)
    break;
}


for (var i=0;i<5;i+=1 ){
  console.log(i);
}

names = ["Navis","Freesie","Blissie","Clisse"];

for (var i=0;i<names.length;i++) {
  console.log(names[i]);
}

var i=0;
while( i< names.length) {
  console.log(names[i]);
  i++;
}

var i = 0;
do {
  console.log(names[i]);
  i++;
} while(i < names.length)

var i=names.length-1;
do {
  console.log(names[i]);
  i--;
} while(i>=0)
