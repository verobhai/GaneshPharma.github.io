
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const data = new FormData(form);
  fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      alert('Thank you! Your message has been sent.');
      form.reset();
    } else {
      alert('There was a problem submitting your form.');
    }
  })
  .catch(() => alert('There was a problem connecting to the server.'));
});
