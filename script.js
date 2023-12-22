//your JS code here. If required.

window.addEventListener("load" , ()=>{
    let ele = document.body;
    let newEle = document.createElement("h1");
    newEle.innerText = "DOM load success";
    ele.appendChild(newEle);
});