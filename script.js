function showSurprise() {
    const surpriseMessage = document.getElementById('surprise');
    surpriseMessage.classList.remove('hidden');
    surpriseMessage.style.animation = 'fadeIn 1s ease-in-out';
  }