const phrases = [
    
  "Você é meu raio de sol em dias nublados ☀️",
  "Te amar é a melhor parte do meu dia 💖",
  "Seu sorriso é meu lugar preferido no mundo 🌍",
  "Prometo cuidar de você sempre, mesmo quando a gente brigar , vou te consolar e te dar todo o amor do mundo❤️",
  "Eu amo você mais do que palavras podem dizer e sinto que nem todos os gestos do mundo demonstrarão o tanto que amo voce💌",
  "Nosso amor é minha fortaleza, meu motivo de continuar e de sorrir 💪💕",
  "Quando estou com você, o mundo inteiro parece certo, minha mente fica calma... 🌎❤️",
  "Seu carinho é meu porto seguro<3 🤗✨",
  "Você é o meu final feliz em todas as histórias 📖💘",
  "Eu me apaixono por você mais a cada dia que passa 💞",
  "O som da sua risada é minha melodia favorita 🎶😊",
  "Nos meus planos, sempre tem um 'nós' 👫💍",
  "Com você, até o silêncio tem amor 💫💑",
  "Você é meu motivo para sorrir nos dias difíceis 😊🌈",
  "Se amar você é um sonho, nunca quero acordar 💭💕",
  "Meu coração encontrou lar no seu 💓🏡",
  "Não importa onde, se for com você, eu vou 🌍🚶‍♂️🚶‍♀️",
  "Seu amor me transforma no melhor de mim 💗🔐",
  "Você é a minha certeza no meio do caos 🌪️❤️",
  "Tudo é melhor quando estou ao seu lado 🌟👩‍❤️‍👨",
  "Você não é só o amor da minha vida. É a minha vida. 💞🌹"

];

let index = 0;

function startLove() {
  document.querySelector(".intro").classList.add("hidden");
  document.querySelector("button").classList.add("hidden");
  document.querySelector(".love-content").classList.remove("hidden");
}

function nextPhrase() {
  index = (index + 1) % phrases.length;
  document.getElementById("phraseBox").textContent = phrases[index];
}

function showDeclaration() {
  document.getElementById("declaration").classList.remove("hidden");
}

// Estrelas animadas de fundo
const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.onresize = resizeCanvas;

function createStars() {
  stars = [];
  for (let i = 0; i < 100; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5,
      speed: Math.random() * 0.5 + 0.2,
    });
  }
}

function animateStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";
  stars.forEach(star => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fill();
    star.y += star.speed;
    if (star.y > canvas.height) star.y = 0;
  });
  requestAnimationFrame(animateStars);
}

createStars();
animateStars();

// 🕰️ Contador de dias juntos
function updateDaysTogether() {
  const startDate = new Date("2025-03-04    "); // <-- coloque aqui a data de vocês (AAAA-MM-DD)
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  document.getElementById("daysTogether").textContent =
    `Estamos juntos há ${diffDays} dias (pelo menos foi quando nosso amor ficou mais intenso... ja tinha safadezas antes rs) 💞`;
}
updateDaysTogether();

// 💍 Mostrar pedido
function showDeclaration() {
  document.getElementById("declaration").classList.remove("hidden");
  document.getElementById("proposal").classList.remove("hidden");
}

function acceptLove() {
  document.getElementById("proposal").classList.add("hidden");
  document.getElementById("accepted").classList.remove("hidden");
}
