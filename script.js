function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5521979531944'

    const texto = 'Olá! Me chamo ${nome}, ${mensagem}'
    const msgFormatada = encodeURIComponent(texto)

    const url = 'https://wa.me/${telefone}?text=${msgFormada}'
    
    console.log(url)

    window.open(url, '_blank')


}
