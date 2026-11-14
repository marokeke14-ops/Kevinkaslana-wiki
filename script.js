const kevinImages = [
  { src: "kevin1.jpg", caption: "Base Form - Pemimpin Tertinggi World Serpent" },
  { src: "kevin2.jpg", caption: "Combat Form - Judgment of Shamash Active" }
];

let currentImgIndex = 0;
const mainImage = document.getElementById("mainImage");
const imgCaption = document.getElementById("imgCaption");
const dots = document.querySelectorAll(".dot");

function updateImageSlider(index) {
  currentImgIndex = index;
  mainImage.style.opacity = 0.3;
  setTimeout(() => {
    mainImage.src = kevinImages[currentImgIndex].src;
    imgCaption.textContent = kevinImages[currentImgIndex].caption;
    mainImage.style.opacity = 1;
  }, 120);
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === currentImgIndex);
  });
}

document.getElementById("prevImg").addEventListener("click", () => {
  updateImageSlider((currentImgIndex - 1 + kevinImages.length) % kevinImages.length);
});

document.getElementById("nextImg").addEventListener("click", () => {
  updateImageSlider((currentImgIndex + 1) % kevinImages.length);
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    updateImageSlider(parseInt(dot.getAttribute("data-index"), 10));
  });
});

const toggleMoreBtn = document.getElementById("toggleMoreBtn");
const extraInfo = document.getElementById("extraInfo");
toggleMoreBtn.addEventListener("click", () => {
  extraInfo.classList.toggle("show");
  toggleMoreBtn.textContent = extraInfo.classList.contains("show") ? "Less ⌃" : "More ⌄";
});

const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");
tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    tabButtons.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(targetId).classList.add("active");
  });
});

function toggleAccordion(headerElement) {
  headerElement.parentElement.classList.toggle("closed");
}

const saveStatusBtn = document.getElementById("saveStatusBtn");
const bookmarkBtn = document.getElementById("bookmarkBtn");
let isSaved = false;

function toggleBookmark() {
  isSaved = !isSaved;
  if (isSaved) {
    saveStatusBtn.textContent = "✓ SAVED TO FAVORITES";
    saveStatusBtn.classList.add("saved");
    bookmarkBtn.textContent = "⭐";
  } else {
    saveStatusBtn.textContent = "🔖 SIGN IN TO SAVE";
    saveStatusBtn.classList.remove("saved");
    bookmarkBtn.textContent = "🔖";
  }
}

saveStatusBtn.addEventListener("click", toggleBookmark);
bookmarkBtn.addEventListener("click", toggleBookmark);
                                                    
