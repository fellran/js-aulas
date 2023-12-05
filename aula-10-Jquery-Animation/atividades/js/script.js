var btnTema = $("#btnTrocar");
var body = $(".pageLaranja");

btnTema.on("click", function(){
    if(btnTema.hasClass("pageLaranja")){
        btnTema.removeClass("pageLaranja");
        btnTema.addClass("pageEscuro");

        body.removeClass("pageLaranja");
        body.addClass("pageEscuro");
    }
    else{
        btnTema.removeClass("pageEscuro");
        btnTema.addClass("pageLaranja");

        body.removeClass("pageEscuro");
        body.addClass("pageLaranja");
    }
});