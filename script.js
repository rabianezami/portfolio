 document.querySelectorAll('header a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); // Stop the default jump
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' }); // Scrolls smoothly
      }
    });
  });

  const toggleBtn = document.querySelector("#toggle-about");
  
  const extraContent = document.querySelector(".extra-about");

  toggleBtn.addEventListener("click", () => {
    if (extraContent.style.display === "none") {
        extraContent.style.display = "block";
        toggleBtn.textContent = "Show Less";
        
    } else {
        extraContent.style.display = "none";
        toggleBtn.textContent = "Show More";
    }
  });

  document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("#contactForm");
    const formMessage = document.querySelector("#formMessage");

  form.addEventListener("submit", function (e){
    e.preventDefault();

    const nameInput = document.querySelector("#name")
    const emailInput = document.querySelector("#email")
    const messageInput = document.querySelector("#message")

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    [nameInput, emailInput, messageInput].forEach(input => {
      input.classList.remove("input-error");
    });

    let hasError = false;

   if (name === "") {
    nameInput.classList.add("input-error");
    hasError = true;
   }

   if (email === "") {
    emailInput.classList.add("input-error");
    hasError = true;
   }

   if (message === "") {
    messageInput.classList.add("input-error");
    hasError = true;
   }

   if (hasError) {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill out all required fields.";
    return;
   }


    formMessage.style.color = "green";
    formMessage.textContent = "Thank you! Your message has been sent.";

    form.reset();

    });
  });



 

