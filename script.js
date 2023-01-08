const imgIlustracao = document.querySelector('#img');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

const aside = document.querySelector('aside');
const msgUsuario = document.querySelector('#mensagemUsuario');

const btnCriptografar =  document.querySelector("#btnCriptografar");
const btnDescriptografar = document.querySelector("#btnDescriptografar");

function criptografar(){
    
    imgIlustracao.classList.add('ilustracao');
    h2.innerHTML = '';
    p.innerHTML = '';

    let texto = msgUsuario.value; 
    let textoUsuarioCriptografado = texto

    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    aside.classList.add('campo-texto');
    aside.innerHTML = `<textarea id="textoAside"> ${textoUsuarioCriptografado} </textarea> <button class="btnCopiar" onclick="copiar()">Copiar</button>`;
}

function descriptografar() {

    let textoCriptografado = msgUsuario.value
    let textoUsuarioDescriptografado = textoCriptografado 
    
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    aside.classList.add('campo-texto');
    aside.innerHTML = `<textarea id="textoAside"> ${textoUsuarioDescriptografado} </textarea> <button class="btnCopiar" onclick="copiar()">Copiar</button>`;
}

function copiar() {

    let textoCopiado = document.querySelector('#textoAside');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand('copy');
    alert('Copiado')
}

/*função para deixar o campo de texto com as letras minusculas*/
function minuscula(string) {

    let resultado = string.value.toLowerCase();
    string.value = resultado;
}

btnCriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar
