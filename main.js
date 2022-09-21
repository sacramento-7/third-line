// const observer = new IntersectionObserver(entries => {
//     // Loop over the entries
//     entries.forEach(entry => {
//       // If the element is visible
//       if (entry.isIntersecting) {
//         // Add the animation class
//         entry.target.classList.add('card-anim');
//       }
//     });
//   });
// observer.observe(document.querySelector('.cardanim'));


//animation cards after hero section
function reveal() {
  var cards = document.querySelectorAll(".card");

  for (let i = 0; i < cards.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = cards[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      setTimeout(() => {
        cards[i].classList.add("card-anim");
      }, i*100);
    }
  }
}
window.addEventListener("scroll", reveal);

$(document).ready(function(){

  function check_from_top(){ // Create our function
    var scroll = $(window).scrollTop(); // Check scroll distance
    if (scroll >= 1000) { // If it is equal or more than 1000 - you can change this to what you want
      $("#btnUp1").addClass("card-anim"); // Add custom class to body
    } else {
      $("#btnUp1").removeClass("card-anim"); // When scrolled to the top, remove the class
    }
  }

  $(window).scroll(function() { // When scroll - run function
    check_from_top();
  });
})