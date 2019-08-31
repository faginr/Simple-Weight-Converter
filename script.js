document.querySelector("#output").style.display = "none"; 
// function keyDown(e){
//     if (e.keyCode < 48 && e.keyCode > 57){
//         document.querySelector("#lbsInput").innerHTML = " ";
//     }
// }
document.querySelector("#lbsInput").addEventListener('input', function(e){
    document.querySelector("#output").style.display = "block"; 
    let lbs = e.target.value;
    document.querySelector(".gramsOutput").innerHTML = (lbs/0.0022046).toFixed(3);
    document.querySelector(".kgOutput").innerHTML = (lbs/2.2046).toFixed(3);
    document.querySelector(".ozOutput").innerHTML = lbs*16;
});