

/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPassword = (inputPassword, inputIcon) => {
  const input = document.getElementById(inputPassword),
        iconEye = document.getElementById(inputIcon)

  iconEye.addEventListener('click', () => {
    // Change password to text
    if (input.type === 'password') {
      // Switch to text
      input.type = 'text'

      // Add icon
      iconEye.classList.add('ri-eye-line')

      // Remove icon
      iconEye.classList.remove('ri-eye-off-line')
    } else {
      // Change to password
      input.type = 'password'

      // Remove icon
      iconEye.classList.remove('ri-eye-line')

      // Add icon
      iconEye.classList.add('ri-eye-off-line')
    }
  })
}

showHiddenPassword('password', 'input-icon')

const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

let attempts = 3;

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (email === "user@example.com" && password === "password") {
      window.location.href = "acceuil.html";
  } else {
      attempts--;
      if (attempts > 0) {
          errorMessage.style.display = "block";
          errorMessage.textContent = `Nom d'utilisateur ou mot de passe incorrect. Il vous reste ${attempts} tentatives.`;
      } else {
          errorMessage.style.display = "block";
          errorMessage.textContent = "Vous ne pouvez plus essayer.";
          loginForm.querySelector('button[type="submit"]').disabled = true;
      }
  }
});

