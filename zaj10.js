function btn_anim(){
    // let anim = document.getElementById
    // let anim = document.querySelector
    let anim = document.getElementById("anim")
    anim.style.animation = "none"
}
var anim2 = document.getElementById("anim2")
anim2.onmouseover = function () {
    anim2.style.animationPlayState = "paused"
}
anim2.onmouseout = function () {
    anim.style.animationPlayState = "running"
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