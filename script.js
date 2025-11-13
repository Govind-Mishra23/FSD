const container = document.getElementById("container");
const btn = document.getElementsByClassName("show-image")[0]
console.log(btn)   
btn.innerHTML = "Click Me";
let showImg = true; 

btn.addEventListener("click", function() {
    const img = document.createElement("img");
    img.src = "https://images.unsplash.com/photo-1758294449756-3b1c31a68362?q=80&w=1897&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    if(showImg){
        container.appendChild(img);
        dispalyData();
        showImg = false ;
    }
    
    
});
function dispalyData() {
    const para = document.createElement("p");
    setTimeout(() =>{
        para.innerText = "This is a paragraph added by JavaScript.";
    container.appendChild(para);
    }, 1000) ;   
}
btn.innerText = "Click Me";
const text = container.innerHTML;
console.log(text);
console.log(container);