var sidebar = document.querySelector("#sidebar");
var ham = document.querySelector(".toggle-btn");
var dropdown = document.getElementsByClassName("dropdown-btn");
var overlay = document.querySelector(".overlay");
var toggler = document.querySelectorAll(".toggler");

// for(var i = 0; i < toggler.length; i++){
//   toggler[i].style.backgroundColor = "#151719";
// }

function toggleSidebar(){
	sidebar.classList.toggle("active");
	ham.classList.toggle("active");
  overlay.classList.toggle("image-overlay");
}

overlay.addEventListener("click", function(){
  sidebar.classList.remove("active");
  ham.classList.remove("active");
  overlay.classList.remove("image-overlay");
for(var i = 0; i < toggler.length; i++){
      toggler[i].classList.remove("white");
  }
});

ham.addEventListener('click', function(){
  for(var i = 0; i < toggler.length; i++){
      toggler[i].classList.toggle("white");
  }
});


// for (var i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === "block") {
//       dropdownContent.style.display = "none";
//     } else {
//       dropdownContent.style.display = "block";
//     }
//   });
// }

$(".dropdown-btn").on("click", function(){
  $(this).toggleClass("active");
  var dropdownContent = $(this).next();
  dropdownContent.slideToggle(600);
});