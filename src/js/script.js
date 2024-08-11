
const btnCarrossel=document.querySelectorAll(".botao");
const imagens=document.querySelectorAll(".imagem");
const informacoes=document.querySelectorAll(".informacoes");

btnCarrossel.forEach((botao, indice) =>{
    botao.addEventListener("click", (evt)=>{
        const btnSelecionado =document.querySelector(".selecionado");
        btnSelecionado.classList.remove("selecionado");

        evt.target.classList.add("selecionado");

        const imagemAtiva= document.querySelector(".ativa");
        imagemAtiva.classList.remove("ativa");

        imagens[indice].classList.add("ativa");

        const infoAtiva=document.querySelector(".informacoes.ativa");
        infoAtiva.classList.remove("ativa");
        
        informacoes[indice].classList.add("ativa");
    });
});