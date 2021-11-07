

const questionIcon = document.getElementsByClassName("question-icon")

const answer = document.getElementsByClassName("answer")

const iconImg = document.getElementsByClassName("question-icon")

const question = document.getElementsByClassName("question")
const box = document.getElementById("box1")
let isOpened = false



for (let i=0 ; i < questionIcon.length;i++){
    

questionIcon[i].addEventListener("click",function(){
   
    if(isOpened===false){
   
    answer[0].classList.remove("visible")
    answer[1].classList.remove("visible")
    answer[2].classList.remove("visible")
    answer[3].classList.remove("visible")
    answer[4].classList.remove("visible")

    iconImg[0].classList.remove("rotate")
    iconImg[1].classList.remove("rotate")
    iconImg[2].classList.remove("rotate")
    iconImg[3].classList.remove("rotate")
    iconImg[4].classList.remove("rotate")

    question[0].style.fontWeight = "normal"
    question[1].style.fontWeight = "normal"
    question[2].style.fontWeight = "normal"
    question[3].style.fontWeight = "normal"
    question[4].style.fontWeight = "normal"

    

 answer[i].classList.add("visible")
 iconImg[i].classList.add("rotate")
 question[i].style.fontWeight = "700"
 box.classList.add("move")
 isOpened=true

}else{
    answer[i].classList.remove("visible")
    iconImg[i].classList.remove("rotate")
    box.classList.remove("move")
    question[i].style.fontWeight = "normal"

   isOpened=false

}


})






}







