document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("inscription-form");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      // Récupérer les valeurs du formulaire
      const nom = document.getElementById("nom").value;
      const prenom = document.getElementById("prenom").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const telephone = document.getElementById("telephone").value;
      
      // Stocker les données dans le stockage local
      localStorage.setItem("nom", nom);
      localStorage.setItem("prenom", prenom);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      localStorage.setItem("telephone", telephone);
      
      // Afficher un message de succès
      alert("Inscription réussie !");
      
      // Réinitialiser le formulaire
      form.reset();
    });
});
function storeUserData() {
    // Récupérer les valeurs du formulaire
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Stocker les données dans le stockage local
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
 
    // Rediriger vers la page de connexion après l'inscription
    window.location.href = "mini.html";
 
    // Empêcher la soumission du formulaire
    return false;
 }
 