const change=document.getElementById("btn")
change.addEventListener("click",()=>{
        if (btn.innerText==='On') {
                btn.innerText='Off'
            }
            else{
                    btn.innerText='On'
                }
            });
// var change=document.getElementsByClassName("bulb")
//             change.addEventListener("click",()=>{
//     if (change.src.match('BulbOff.jpeg')) {
//             change.src('BulbOn.jpeg')
//         }
//         else{
//                 change.src('BulbOff.jpeg')
//             }
//         });
function changeImg() {
    var imgId=document.getElementById("lightBulb")
            if (imgId.src.match("BulbOff.jpeg")) {
        imgId.src="BulbOn.jpeg"
    }
    else{
        imgId.src="BulbOff.jpeg"
    }
}