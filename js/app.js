const yesBtnTag = document.querySelector(".yes-btn");
const noBtnTag = document.querySelector(".no-btn");

yesBtnTag.addEventListener("click",() => {
    $(".boxContainer > p").html(`"I knew it"`)
    $("#no").css({
        
        "position":"static",
       
    });
    noBtnTag.setAttribute('disabled', '');
});
noBtnTag.addEventListener("mouseover" , () => {
    let x = Math.floor(Math.random()*500)
    let y = Math.floor(Math.random()*500)

    $("#no").css({
        
        "position":"absolute",
        "top":` ${x}px`,
        "left":` ${y}px`
    });
});

