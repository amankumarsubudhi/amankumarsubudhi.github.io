window.addEventListener("load",function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup-overlay").style.display = "block";
            document.querySelector(".popup").style.display = "flex";
        },
        1050
    )
})




document.querySelector(".pcbtn").addEventListener("click",function(){
    document.querySelector(".popup").style.display = "none";
    document.querySelector(".popup-overlay").style.display = "none";
    document.querySelector("body").style.overflowY="scroll";
    
});