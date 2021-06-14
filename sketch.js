
var n1,n2;
var b1,b2;
var num1,num2;

function setup() {
  createCanvas(400, 400);
  num1 = createInput();
  num1.position(5,60);
  num2 = createInput();
  num2.position(150,60);
  b1 = createButton("add");
  b1.position(10,200);
  b1.mousePressed(add);
  b2 = createButton("Multiply");
  b2.position(80,200);
  b2.mousePressed(mul);
}

function draw() {
  background(220);
  n1 = parseInt(num1.value());
  n2 = parseInt(num2.value());
}
function add(){
  console.log(n1+n2);
}
function mul(){
  console.log(n1*n2);
}