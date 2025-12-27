const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container"); // .yes kısmını silmiştik, doğrusu bu.
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// YENİ EKLENEN: Müziği seçiyoruz
const music = document.getElementById("arka-plan-muzik");

// Hayır butonunun kaçması
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Evet butonu işlevselliği
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  // AYAR: Şarkı kaçıncı saniyeden başlasın?
  // Örneğin 30. saniyeden başlaması için buraya 30 yaz.
  music.currentTime = 52; 
  // Müziğin sesini ayarlamak istersen (0.0 ile 1.0 arası):
  music.volume = 0.5; 

  const timeoutId = setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "inherit";
    
    // Video ve Müziği aynı anda başlatıyoruz
    gifResult.play();
    music.play();
    
  }, 3000); // 3 saniye (3000ms) yükleme ekranı bekler
});