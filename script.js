let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  
  // Sabhi slides ko hide karo
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  // Agar aakhri slide khatam ho jaye toh pehli par wapas jao
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  
  // Agli slide dikhao
  slides[slideIndex-1].style.display = "block";  
  
  // Har 3 second baad change hoga
  setTimeout(showSlides, 3000); 
}