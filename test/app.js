
let name = 'Max';

if(name==='Max'){
    let hobbies = ['sports','cooking'];
    console.log(hobbies);
}

function greet(){
    let age=30;
    let name = 'Manual';
    console.log(name,age);
}



greet();

const h1 = document.querySelector("h1");
const addBtn = document.querySelector("#add");
const removeBtn = document.querySelector("#remove");
const toggleBtn = document.querySelector("toggle");

console.log(h1.classList)

addBtn.addEventListener('click',function(){
    h1.classList.add('text');
})

removeBtn.addEventListener('click',function(){
    h1.classList.remove('text');
})

toggleBtn.addEventListener('click',function(){
    h1.classList.toggle('text'); 
})

setTimeout(function(){
    console.log(1234);
},2000);

let interId;
 interId=setInterval(function(){
    console.log("hello");
},1000);
console.log(interId);

