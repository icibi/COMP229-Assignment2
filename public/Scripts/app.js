/*-------------------------------------
            Assingment 2
        Irin Cibi - 301248509
COMP229 - Web Application Development
          29 October, 2022
--------------------------------------*/





// IIFE -- Immediately Invoked Function Expression
(function () {
  function Start() {
    console.log("App Started...");
    let deletebuttons = document.querySelectorAll(".btn-danger");
    for (button of deletebuttons) {
      button.addEventListener("click", (event) => {
        if (!confirm("Are you sure you want to delete this contact?")) {
          event.preventDefault();
          window.location.assign("/business-contact");
        }
      });
    }
  }
  window.addEventListener("load", Start);
})();
