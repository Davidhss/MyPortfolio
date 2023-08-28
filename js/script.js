document.getElementById("CopiarEmail").addEventListener("click", function() {
    // Seleciona o campo de texto
    var campoDeTexto = document.getElementById("textoParaCopiar");

    // Seleciona o texto no campo de texto
    campoDeTexto.select();

    // Copia o texto para a área de transferência
    document.execCommand("copy");

    // Deseleciona o campo de texto
    campoDeTexto.blur();

    // Altera o texto do botão para indicar que foi copiado
    this.className = "copiado";
    this.innerHTML = "Copiado com Sucesso";

    // Reverte o texto do botão após alguns segundos
    setTimeout(function() {
        document.getElementById("CopiarEmail").className = "botao_email";
        document.getElementById("CopiarEmail").innerHTML = "<i class='fa-solid fa-envelope'></i> <span>Copiar Email</span> <i class='fa-regular fa-copy'></i>";
    }, 2000);
});