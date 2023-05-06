const textArea = document.querySelector(".textocodedecod");

// const mensagem = document.querySelector(".textocodedecod");



function btnEncriptar() {
    const textoEncripitado = encriptar(textArea.value);
    textArea.value = textoEncripitado;
    
    
    
   
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    textArea.value = textoDesencriptado;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


function copyText() {
   
    if (textArea) {
        const textareacop = document.getElementById('textodecod').select("");
        
        document.execCommand('copy');
        alert("Seu texto foi copiado para Area de transferencia.");
        textArea.value=""
        
    }
    
}