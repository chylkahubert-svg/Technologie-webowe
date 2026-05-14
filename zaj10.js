function btn_anim(){
    // let anim = document.getElementById
    // let anim = document.querySelector
    let anim = document.getElementById("anim")
    anim.style.animation = "none"
}
var anim3 = document.getElementById("anim3")
anim3.onmouseover = function () {
    anim3.style.animationPlayState = "paused"
}
anim3.onmouseout = function () {
    anim3.style.animationPlayState = "running"
}


// function btn_anim2(){
//     var anim2 = document.getElementById("anim2")
//     anim2.style
// }

// function btn_anim(){
//     // let anim = document.getElementById
//     // let anim = document.querySelector
//     let anim = document.getElementById("anim")
//     anim.style.animation =
// }