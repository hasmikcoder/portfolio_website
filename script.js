//e-mail_social
function myEmail() {
    document.getElementById("email").innerHTML = "E-mail address: hasvart@gmail.com";
  }


//hamburger
  /*function myFunction() {
    var x = document.getElementById("side-nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }*/

  
//hamburger menu
  const btn = document.getElementById("btn");
  const nav = document.getElementById("nav");
  
  btn.addEventListener("click", () => {
      nav.classList.toggle("active");
      btn.classList.toggle("active");
  });

  


  
 //slideshow_carousel
 var slideIndex = 0;
 showSlides();
 
 function showSlides() {
   var i;
   var slides = document.getElementsByClassName("mySlides");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
   slides[slideIndex-1].style.display = "block";
   setTimeout(showSlides, 2000); // Change image every 2 seconds
 }