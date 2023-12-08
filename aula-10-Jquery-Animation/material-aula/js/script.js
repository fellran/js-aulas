var caixa = $("#caixa");

$("#animacao1").on("click", function(){
    caixa.animate({width: "500px", height: "500px", borderRadius: "50%"})
});

$("#animacao2").on("click", function(){
    caixa.animate({width: "300px", height: "300px", borderRadius: "0%"}).animate({marginLeft : "200px"})
});

$("#animacao3").on("click", function(){
    caixa.animate({marginTop : "300px", marginRight : "100px", rotate : "360deg"},{duration : 1000, complete : () => {alert("se o cão tiver deprecao, animacao")}})
});

$("#animacao4").on("click", function(){
    caixa.animate({margin : "0px", rotate : "-360deg"});
});

$("#animacao5").on("click", function(){
    caixa.slideUp(1000);
    // caixa.fadeOut(1000);
    // caixa.hide(2000);
});

$("#animacao6").on("click", function(){
    // caixa.slideUp(1000);
     caixa.slideDown(1000);
    // caixa.fadeOut(1000);
    // caixa.hide(2000);
    // caixa.show(1000);
});

$("#animacao7").on("click", function(){
    // caixa.slideToggle(1000);
    caixa.fadeToggle(1000);
});

$("#animacao8").on("click", function(){
    caixa.css("transition", "1s");
    caixa.css("backgroundColor", "red");
    $("#teste").attr("placeholder", "isso é um input bacana")
    $("#teste").attr("class","bacana")
    $("img").attr("src", "https://uploads.metropoles.com/wp-content/uploads/2023/11/05163003/Cachorro-tem-expressao-facial-unica-e-vira-meme-Esta-me-julgando-7.jpg")
    $("img").attr("width", "500px")
});

