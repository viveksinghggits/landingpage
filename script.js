document.addEventListener("DOMContentLoaded", function (){
    for(let i=0; i<1026; i++){
        let _ = document.createElement("div");
        _.classList.add("box");
        _.setAttribute("id", i);
        wrapper.appendChild(_);
    }

    
    setInterval(animate, 1000);
});
var lastvalue=0;
function animate(){
    document.getElementById(lastvalue).style.backgroundColor="#f5f7f9";
    let rn = Math.floor(Math.random()*1026);
    lastvalue = rn;
    document.getElementById(rn).style.backgroundColor="#f48fb1";
}
