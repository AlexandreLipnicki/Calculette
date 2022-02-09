
const display = document.getElementById('display');

const div1 = document.getElementById('div1');
div1.addEventListener("click",function(){display.value += 1});

const div2 = document.getElementById('div2');
div2.addEventListener("click",function(){display.value += 2});

const div3 = document.getElementById('div3');
div3.addEventListener("click",function(){display.value += 3});

const div4 = document.getElementById('div4');
div4.addEventListener("click",function(){display.value += "+"});

const div5 = document.getElementById('div5');
div5.addEventListener("click",function(){display.value = ""});

const div6 = document.getElementById('div6');
div6.addEventListener("click",function(){display.value += 4});

const div7 = document.getElementById('div7');
div7.addEventListener("click",function(){display.value += 5});

const div8 = document.getElementById('div8');
div8.addEventListener("click",function(){display.value += 6});

const div9 = document.getElementById('div9');
div9.addEventListener("click",function(){display.value += "-"});

const div10 = document.getElementById('div10');
div10.addEventListener("click",function(){display.value += 7});

const div11 = document.getElementById('div11');
div11.addEventListener("click",function(){display.value += 8});

const div12 = document.getElementById('div12');
div12.addEventListener("click",function(){display.value += 9});

const div13 = document.getElementById('div13');
div13.addEventListener("click",function(){display.value += "*"});

const div14 = document.getElementById('div14');
div14.addEventListener("click",function(){display.value += "."});

const div15 = document.getElementById('div15');
div15.addEventListener("click",function(){display.value += "0"});

const div16 = document.getElementById('div16');
div16.addEventListener("click",function(){display.value += "%"});

const div17 = document.getElementById('div17');
div17.addEventListener("click",function(){display.value += "/"});

const div18 = document.getElementById('div18');
div18.addEventListener("click",function(){
    display.value = (eval(display.value));
});

function enter(){
    display.value = (eval(display.value));
}









