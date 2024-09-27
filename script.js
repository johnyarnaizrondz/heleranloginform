document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const messageDiv = document.getElementById('message');
  
    // Store user credentials in localStorage for simplicity
    let user = {};
  
    // Handle Registration
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = document.getElementById('reg-username').value;
      const password = document.getElementById('reg-password').value;
  
      if (username && password) {
        user = { username, password };
        localStorage.setItem('user', JSON.stringify(user));
        
        // Display message and hide registration form
        messageDiv.textContent = "Registration successful! Please login now.";
        messageDiv.style.color = "green";
        
        // Hide Register form and show Login form
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
      } else {
        messageDiv.textContent = "Please fill out all fields.";
        messageDiv.style.color = "red";
      }
    });
  
    // Handle Login
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = document.getElementById('login-username').value;
      const password = document.getElementById('login-password').value;
      const storedUser = JSON.parse(localStorage.getItem('user'));
  
      if (storedUser && storedUser.username === username && storedUser.password === password) {
        messageDiv.textContent = "Login successful!";
        messageDiv.style.color = "green";
      } else {
        messageDiv.textContent = "Invalid username or password.";
        messageDiv.style.color = "red";
      }
    });
  });
  