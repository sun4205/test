const a= {
name:"hanna123",
address:"mt",
address2:"mt2",
address3:"mt3"

}
console.log(a.name);
// i added 1 million code lines
console.log(a.address);

let age = 10
function checkAge(){
    if(age>20){
        console.log("age is greater than 20");
    }else if(age==20){
        console.log("age is 20");
    }else{
        console.log("age is less than 20");
    }
}

let checking = checkAge();
console.log(checking);

for(var i=2; i<=9; i++){
    for(var j=2; j<=9; j++){
        console.log(i+"*"+j+"="+i*j);
    }
}