const popupOverlay = document.getElementById("popupOverlay");
const closePopup = document.getElementById("closePopup");

// 🔥 PUT YOUR MAIN LINK HERE
// const GLOBAL_LINK = "jai_siya_ram";


// Show popup after 10 seconds
setTimeout(() => {
  popupOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}, 10000);

// Close popup on button click
closePopup.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

// Close popup when clicking outside content
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});



// Select all buttons with same class
const buttons = document.querySelectorAll(".global-btn");

buttons.forEach(btn => {
  btn.addEventListener("click", function(e) {
    e.preventDefault(); // stop default action
    window.location.href = GLOBAL_LINK;
  });
});