let input = document.querySelector("input");
let botaoi = document.querySelector("#iniciar");
let botaot = document.querySelector("#testar");
let img = document.querySelector("img");
let pontuacao = document.querySelector("h2");
let contador = 0;


pesquisarPersonagem= () => {
    let aleatorio = Math.floor(Math.random()*493);
    fetch(`https://rickandmortyapi.com/api/character/${aleatorio}`)
    .then(function(result){
        return result.json()
    })
    .then(function(data){
        console.log(data.name);
        let nomeDoPersonagem = data.name.toUpperCase().toString();
        img.src = data.image;

        botaot.onclick = function(){
            let inputMaiusculo = input.value.toUpperCase().toString();
            
            if(nomeDoPersonagem == inputMaiusculo){
                contador++;
                pontuacao.innerHTML = `Pontuacao ${ contador}`;
            } else {
                contador --;
                pontuacao.innerHTML = `Pontuacao ${ contador}`;
            }
            pesquisarPersonagem();
        }
    })
}

botaoi.onclick = pesquisarPersonagem;