
function ativaAba(aba) {
    
    var quantAbas = document.querySelectorAll(".menu_aba li");
    var quantConteudos = document.querySelectorAll(".conteudo_aba div");

    quantAbas.forEach((quantAba) => {
        quantAba.classList.remove("ativa");     
    });
    quantConteudos.forEach((quantConteudo) => {
        quantConteudo.classList.remove("ativa");     
    });

    document.querySelector(".menu_aba li#aba_"+aba).classList.add("ativa");
    document.querySelector(".conteudo_aba div.aba_"+aba).classList.add("ativa");

}