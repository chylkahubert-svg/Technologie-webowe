form = document.getElementById("age")
form.onfocus = function (){
    form.style.backgroundColor = "#0a0"
}
form.onblur = function(){
    form.style.backgroundColor = "#fff"
}

btn = document.querySelector(".btn")
btn.onclick = function () {
    let cookies = document.querySelector(".cookies")
    cookies.style.display = "none"
}