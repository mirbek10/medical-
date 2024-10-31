const body = document.querySelector("body")
const header = document.querySelector(".container") 
const w1 = document.querySelector(".sun")
const w2 = document.querySelector(".moon")
const block22 = document.querySelector(".block22")
const block222 = document.querySelector(".block222")
const block223 = document.querySelector(".block223")
const btn4 = document.querySelector(".btn4")
const btn2 = document.querySelector(".btn3")
const see = document.querySelector(".see")
const block1 = document.querySelector(".block1")

w1.onclick =()=>{
 body.style.backgroundColor = "black"
 body.style.color = "white"
 header.style.backgroundColor = "rgba(10, 18, 141, 0.923)"
    block22.style.backgroundColor = " rgba(10, 18, 141, 0.923)"
    block222.style.backgroundColor = " rgba(10, 18, 141, 0.923)"
    block223.style.backgroundColor = " rgba(10, 18, 141, 0.923)"
    btn4.style.backgroundColor = "rgba(10, 18, 141, 0.923)"
    see.style.backgroundColor = "rgba(10, 18, 141, 0.923)"
    block1.style.backgroundColor= "rgba(10, 18, 141, 0.923)"
    btn2.style.backgroundColor = "rgba(10, 18, 141, 0.923)"

}
w2.onclick =()=>{
    body.style.backgroundColor = "white"
    body.style.color = "black"
    body.style.color = "black"
    block22.style.backgroundColor = "blanchedalmond "
    block222.style.backgroundColor = "blanchedalmond";
    block223.style.backgroundColor = "blanchedalmond";
    btn4.style.backgroundColor ="#4D77FF"
    see.style.backgroundColor ="#4D77FF"
    header.style.backgroundColor = "white"
    block1.style.backgroundColor = "rgba(162, 210, 226, 0.889)"
    btn2.style.backgroundColor = "rgb(77, 72, 231)";
   }