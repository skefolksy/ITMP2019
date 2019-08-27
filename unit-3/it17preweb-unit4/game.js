fortuneBank = [
    "การเงินติดขัดนะช่วงนี้",
    "ใส่ใจคนข้างๆให้มากขึ้น",
    "ต้องพิจารณาว่าจะหยุดหรือจะไปต่อ",
    "จะได้แรงบันดาลใจใหม่ๆจากการออกไปเปิดหูเปิดตา",
    "หลายสิ่งดูเหมือนว่าจะเหนื่อยกว่าที่คาดไว้",
    "สถานการณ์กดดันให้ต้องรีบคิดรีบตัดสินใจ",
    "ชีพจรลงเท้า",
    "อย่าทำเรื่องง่ายให้กลายเป็นยาก",

];

function play(){
    cookie1.classList.add("cookie-hide");
    cookie2.classList.add("cookie-show");
    setTimeout(function(){
        getFortune();
    },3000);
}

function getFortune(){
    rand = Math.floor(Math.random()*fortuneBank.length);
    fortune.innerText = fortuneBank[rand];
    fortune.style.opacity = 1;
    fortune.style.top = "96px";
}

function replay() {
    cookie2.classList.remove("cookie-show");
    cookie2.classList.add("cookie-hide");
    fortune.style.opacity = 0;
    fortune.style.top = "100px";
    setTimeout(function(){
        cookie2.classList.remove("cookie-hide");
        cookie2.classList.add("cookie-show");
    },1000);
    setTimeout(function(){
        getFortune();
    },3000);
}
