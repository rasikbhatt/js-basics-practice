//variables
//decleration var variabelName
var rak; //decleration 
rak=0; //intialization

//datatypes
var rak;//number
var str="hello" //string
var boo=true //boolean
var sense=null //object

//undeclared datatype

//function

function add(a,b){//function defnition 
    var c=a+b; //c is a local variable
    document.write( "in function <br>")
    return c; // returns value of c to root element
}
d=add(2,1);// d is global variable
document.write(d); 


// while loop
 
while (d>0) {// enters loop if the specified condition is evalueated to true
    if(d==2){ //conditional statement
        document.write("<br>in loop and d=" + d);
    }
    
    document.write("<br>stuck while loop" + d);
    d--;
}

//for loop
for(j=0;j<8;j++){
    console.log(j)
}
// do-while loop
k=0 // initialization
do{
    console.log("in do-while loop")
    k++;
    console.log(k);
}while(k>8);

//isNaN build in fuction to check wether a var is number or not 
console.log(isNaN(str)+ "in isNaN");


//string manipulations

str="<br>one who won't grieve is not a humman'\s like there is \"oneself\""
console.log(str);

document.write(str);

//to change a string to uppercase letters

document.write(str.toUpperCase(str));

//to change a string to lowercase letters

document.write(str.toLowerCase(str));

//to know the index of a substring in a string

document.write("<br> index of humman:" + str.indexOf("human"));


//splitting and slicing of strings

document.write("<br> slicing of string by  giving a range :" + str.slice(5,8));
document.write("<br> slicing of string  :" + str.slice(5));









