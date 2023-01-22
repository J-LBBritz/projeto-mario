console.log(document.querySelector(".botao-trailer")); /* querySelector vai buscar o elemento que tenha a classe dentro dos () na aba console do navegador */

const botaoTrailer = document.querySelector(".botao-trailer"); /*representação da variável */
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", ()=>{
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

 botaoFecharModal.addEventListener("click",() =>{
    alternarModal();
    video.setAttribute("src",""); /* "" significa valor vazio */
 }); 

 
