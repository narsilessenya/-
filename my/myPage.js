window.addEventListener("load", (event) => {

    // Toggles
    var toggle = document.querySelectorAll(".toggle");
 
    toggle.forEach(function (el) {
       el.addEventListener("click", activateToggle);
    });
 
    function activateToggle(event) {
       var currentToggle = event.target;
 
       if (currentToggle.classList.contains("off")) {
          currentToggle.classList.remove("off");
       } else {
          currentToggle.classList.add("off");
       }
    }
 
    // Font Size Options
    var letter = document.querySelectorAll(".letter"),
       sizeS = document.querySelector(".size_s"),
       sizeM = document.querySelector(".size_m"),
       sizeL = document.querySelector(".size_l"),
       container = document.querySelector(".container");
 
    letter.forEach(function (el) {
       el.addEventListener("click", activateLetter);
    });
 
    function activateLetter(event) {
       var currentLetter = event.currentTarget,
          allLetters = document.querySelectorAll(".letter");
 
       allLetters.forEach(function (el) {
          el.classList.remove("select");
       });
       currentLetter.classList.add("select");
 
       if (sizeS.classList.contains("select")) {
          container.setAttribute("data-size", "small");
       }
 
       if (sizeM.classList.contains("select")) {
          container.setAttribute("data-size", "");
       }
       if (sizeL.classList.contains("select")) {
          container.setAttribute("data-size", "large");
       }
    }

 });
 

//  tab switch

window.onload = function() {
   var aTab_name = document.querySelectorAll(".wrapper .container .settings_modal .left .links_container .side_link");
   var aDiv = document.querySelectorAll(".wrapper .container .settings_modal .right");
   for (var i = 0; i < aTab_name.length; i++) {
      aTab_name[i].index = i;
      aTab_name[i].onclick = function() {
         for (var i = 0; i < aTab_name.length; i++) {
            aTab_name[i].className = "side_link";
         }
         this.className = "side_link active";
         for (var j = 0; j < aDiv.length; j++) {
            aDiv[j].className = "right hide";
         }
         aDiv[this.index].className = "right show";
      }
   }
}