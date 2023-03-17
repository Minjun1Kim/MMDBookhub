const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  
  // Get the values of the email and password fields
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  
  // Check if the email and password are correct (this is just an example)
  if (email === 'example@email.com' && password == 'p') {
    // Redirect the user to the main page
    window.location.href = 'index.html';
  } else {
    alert('Incorrect email or password.');
  }
});