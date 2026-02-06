if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
  // User is on a mobile device
  document.body.classList.add('is-mobile');
}