let listaKdrama = ["/Imagem/something.png", "./Imagem/beMelodramatic.jpg", "./Imagem/Chicago_Typewriter_Poster.jpg", "./Imagem/into.jpg", "./Imagem/liberation.jpg", "./Imagem/love.jpg", "./Imagem/misaeng.jpg", "./Imagem/navillera.jpg", "./Imagem/Search-WWW-Poster1.jpg", "./Imagem/theGuest.jpg", "./Imagem/Unfamiliar.jpg","./Imagem/goblin.jpg", "./Imagem/My_Mister.jpg"];

let imagemKdrama = document.getElementById("imagens");

function catalogo() {
    listaKdrama.forEach((drama) => adicionaImagem(drama));
}

catalogo();

function adicionaImagem(drama) {
    let li = document.createElement("li");
    li.innerHTML = ("<img src =" + drama + ">");
    imagemKdrama.appendChild(li);
}

function adicionaKdrama() {
    let entrada = document.getElementById("insereDrama").value;
    let insereKdrama = document.getElementById("textoVerificacao");

    let existe = false;

    for (let novoKdrama = 0; novoKdrama < listaKdrama.length; novoKdrama++) {
        if (entrada == listaKdrama[novoKdrama]) {
            insereKdrama.innerHTML = "Ops esse Kdraminha já está listado!!";
            existe == true
        }   
    }
    if (existe == false)  {
        listaKdrama.push(entrada);
        adicionaImagem(entrada);
        insereKdrama.innerHTML = "";
    }
}




