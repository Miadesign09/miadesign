/*  START INTRO PAGE -------------------------------------------*/

document.addEventListener("DOMContentLoaded", () => {
    const buttonContainer = document.getElementById('buttonContainer');
    const introVideo = document.getElementById('introVideo');
    
    // Mostrar o botão após 3 segundos
    setTimeout(() => {
        buttonContainer.style.display = 'block';  // Exibe o botão
    }, 3000);  // 3 segundos após o carregamento do vídeo
});

/* END INTRO PAGE -------------------------------------------*/



/*  START PROJECT PAGE -------------------------------------------*/

const carrosseis = document.querySelectorAll('.carrossel');

carrosseis.forEach((carrossel) => {
    const carrosselImagens = carrossel.querySelector('.carrossel-imagens');
    const setaEsquerda = carrossel.querySelector('.seta-esquerda');
    const setaDireita = carrossel.querySelector('.seta-direita');
    const imagens = carrosselImagens.querySelectorAll('img');
    const totalImagens = imagens.length;
    let indiceAtual = 0;

    // Duplicar a primeira imagem no final para criar efeito contínuo
    carrosselImagens.innerHTML += carrosselImagens.innerHTML; // Duplicando o conteúdo para efeito de loop contínuo

    function atualizarCarrossel() {
        carrosselImagens.style.transition = 'transform 0.6s ease-in-out'; // Transição suave
        carrosselImagens.style.transform = `translateX(-${indiceAtual * 100}%)`;
    }

    // Navegação com as setas
    setaEsquerda.addEventListener('click', () => {
        // Quando estiver na primeira imagem, ir para a última
        if (indiceAtual === 0) {
            indiceAtual = totalImagens; // Vai para a última imagem
            carrosselImagens.style.transition = 'none'; // Retira a transição para evitar salto
            carrosselImagens.style.transform = `translateX(-${indiceAtual * 100}%)`;
            setTimeout(() => {
                carrosselImagens.style.transition = 'transform 0.6s ease-in-out'; // Adiciona a transição de volta
                indiceAtual--; // Agora pode ir para a imagem anterior
                atualizarCarrossel();
            }, 0);
        } else {
            indiceAtual--;
            atualizarCarrossel();
        }
    });

    setaDireita.addEventListener('click', () => {
        // Quando chega na última imagem, volta para a primeira
        if (indiceAtual === totalImagens * 2 - 1) {
            indiceAtual = totalImagens - 1; // Vai para a última imagem antes da duplicada
            carrosselImagens.style.transition = 'none'; // Retira a transição para evitar salto
            carrosselImagens.style.transform = `translateX(-${indiceAtual * 100}%)`;
            setTimeout(() => {
                carrosselImagens.style.transition = 'transform 0.6s ease-in-out'; // Adiciona a transição de volta
                indiceAtual++; // Agora pode ir para a próxima imagem
                atualizarCarrossel();
            }, 0);
        } else {
            indiceAtual++;
            atualizarCarrossel();
        }
    });

    // Navegação automática com loop contínuo
    setInterval(() => {
        if (indiceAtual === totalImagens * 2 - 1) {
            indiceAtual = totalImagens - 1; // Vai para a última imagem antes da duplicada
            carrosselImagens.style.transition = 'none'; // Retira a transição para evitar salto
            carrosselImagens.style.transform = `translateX(-${indiceAtual * 100}%)`;
            setTimeout(() => {
                carrosselImagens.style.transition = 'transform 0.6s ease-in-out'; // Adiciona a transição de volta
                indiceAtual++; // Agora pode ir para a próxima imagem
                atualizarCarrossel();
            }, 0);
        } else {
            indiceAtual++;
            atualizarCarrossel();
        }
    }, 3000); // Passa a cada 3 segundos
});

/* END PROJECT PAGE -------------------------------------------*/

// START EMAILJS  -------------------------------------------

(function () {
    emailjs.init("sujMpBJrf3CKjCuuC");
  })();
 
  document
.getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();
 
      emailjs
        .send("service_1p2rv8n", "template_7y15qyu", {
          name: document.getElementById("name").value,
          phone: document.getElementById("phone").value,
          email: document.getElementById("email").value,
          message: document.getElementById("message").value,
        })
        .then(
          function (response) {
            alert("Email sent successfully!");
          },
          function (error) {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS error:", error);
          }
        );
    });
// END EMAILJS  -------------------------------------------