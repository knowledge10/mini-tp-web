document.getElementById('startConsultation').addEventListener('click', function() {
    // Afficher le formulaire de consultation
    document.getElementById('consultationForm').classList.remove('hidden');
  });
  
  document.getElementById('consultation-form').addEventListener('submit', function(event) {
    // Empêcher le formulaire de soumettre la page
    event.preventDefault();
    
    // Envoyer les données du formulaire à un serveur ou effectuer d'autres actions nécessaires
    console.log('Formulaire soumis ! Données :', new FormData(event.target));
  });
  // Sélectionnez le formulaire
const form = document.getElementById('consultation-form');

// Ajoutez un écouteur d'événements pour l'événement submit du formulaire
form.addEventListener('submit', function(event) {
  // Empêchez l'envoi par défaut du formulaire
  event.preventDefault();

  // Réinitialisez les champs du formulaire
  form.reset();
});
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionnez le bouton "Commencer la consultation"
  const startConsultationButton = document.getElementById('startConsultation');

  // Sélectionnez le formulaire de consultation
  const consultationForm = document.getElementById('consultationForm');

  // Ajoutez un gestionnaire d'événements au clic sur le bouton "Commencer la consultation"
  startConsultationButton.addEventListener('click', function() {
    // Faites défiler la page jusqu'au formulaire de consultation
    consultationForm.scrollIntoView({ behavior: 'smooth' });
  });
});
