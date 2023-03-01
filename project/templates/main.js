var faq = document.getElementsByClassName("faq-page");
var i;
for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");
      /* Toggle between hiding and showing the active panel */
      var body = this.nextElementSibling;
      if (body.style.display === "block") {
            body.style.display = "none";
      } else {
            body.style.display = "block";
      }
  });
}



//gets the button by ID from your HTML element
    const themeBtn = document.getElementById("theme-btn");
    //when you click that button
    themeBtn.onclick = () => {
    //the default class "fa-moon" switches to "fa-sun" on toggle
      themeBtn.classList.toggle("fa-sun");
    //after the switch on toggle, if your button contains "fa-sun" class
      if (themeBtn.classList.contains("fa-sun")) {
    //onclicking themeBtn, the changeTheme styling will be applied to the body of your HTML
        document.body.classList.add("changeTheme");
      } else {
    // onclicking themeBtn, applied changeTheme styling will be removed
        document.body.classList.remove("changeTheme");
      }
    }