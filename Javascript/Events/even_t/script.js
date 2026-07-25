let btn1 = document.querySelector("#btn_1");

btn1.onclick = () => {
    console.log("btn1 was clicked");
    console.log("hello button 1, excuse me"); 
    console.log(alert("you pressed btn1"));  
}

let btn2 = document.querySelector("#btn_2");
btn2.onclick = () => {
    console.log("btn2 was clicked");
    console.log("hello button 2, excuse me"); 
    console.log(alert("you pressed btn2"));
}

let box = document.querySelector(".box");
box.onmouseover = (evnt) => {
    console.log("inside the box");
    console.log(alert("box box box"));
    console.log(evnt);
    console.log(evnt.type);
    console.log(evnt.target);
    console.log(evnt.clientX, evnt.clientY);

    
}