// Função para criar e exibir o popout
function openPopout(imageSrc) {
  // Cria o elemento do popout
  let popout = document.createElement('div');
  popout.className = 'popout';

  // Cria a imagem dentro do popout
  let image = document.createElement('img');
  image.src = imageSrc;

  // Adiciona a imagem ao popout
  popout.appendChild(image);

  // Adiciona o popout ao corpo do documento
  document.body.appendChild(popout);

  // Fecha o popout quando o usuário clica nele
  popout.addEventListener('click', function () {
    document.body.removeChild(popout);
  });
}

// Adiciona um evento de clique a todas as imagens com a classe "photo"
let photos = document.querySelectorAll('.photo');
photos.forEach(function (photo) {
  photo.addEventListener('click', function () {
    // Obtém a URL da imagem clicada
    let imageSrc = this.querySelector('img').src;
    
    // Abre o popout com a imagem
    openPopout(imageSrc);
  });
});