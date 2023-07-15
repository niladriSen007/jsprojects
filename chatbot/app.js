const btn = document.querySelector("#send_btn")
const ul = document.querySelector("#chat_list")
const textArea = document.querySelector("#text_input")

console.log(btn)


textArea.addEventListener("input",()=>{
    if(textArea.value.trim()!=="")
        btn.classList.remove("hidden")
    else
    btn.classList.add("hidden")
})

const addUserMessage =(msg,className)=>{
    const newLi = document.createElement("li");
    const newP = document.createElement("p")
    newP.innerText = msg;
    newP.classList.add("userMessegeBox")
    newLi.appendChild(newP)
    newLi.classList.add(className)
    ul.appendChild(newLi)
}
    




btn.addEventListener("click",()=>{
    const message = textArea.value
    addUserMessage(message,"outgoing")
    textArea.value=""
})


