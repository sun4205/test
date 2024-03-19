
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

const dayOfWeek = '월';

switch (dayOfWeek) {
	case '월':
	case '화':
	case '수':
	case '목':
		console.log('6시 퇴근');
		break;
	case '금':
		console.log('12시 퇴근');
		break;
	case '토':
	case '일':
		console.log('휴무');
		break;
	default:
		console.log('잘못된 요일입니다.');
}

const yootThrow = '도';

switch (yootThrow) {
	case '모':
		console.log('1칸 전진');
	case '윷':
		console.log('1칸 전진')
	case '걸':
		console.log('1칸 전진')
	case '개':
		console.log('1칸 전진');
	case '도':
		console.log('1칸 전진');
		break;
	default:
		console.log('무효');
}

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(i + ' X ' + j + ' = ' + i * j);
    }
  }

  for (let i = 0; i < 100; i++) {
	if (i % 3 === 0) continue; // 한 루프를 건너뜀
	if (i > 10) break; // 루프 종료
	console.log(i);
}

function countTo(to){
    for(let i =0; i<=to; i++){
        console.log(i);
    }
}
countTo(10);

function add(a,b){
    return a + b;
}
console.log(add(3,5));

const subtract = function subt(a,b){
    return a-b;
}
console.log(subtract(1,5));

const multi = (a,b) => a*b;
console.log(multi(4,7));

const multiplay = (a,b) =>{

    console.log('this is multiply')
    return a*b;
}
console.log(multiplay(50,2));

const myButton = document.querySelector('#myButton');
myButton.addEventListener('click',function(){
    console.log('click')
});

const clickPositon = document.querySelector('#clickPosition');
clickPositon.addEventListener('click', function(e){
    let text ='x: ';
    text += e.clientX;
    text = ' , Y: ';
    text +=e.clientY;
    clickPostion.textContent = text;

});