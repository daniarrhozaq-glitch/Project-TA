document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form reload langsung

    const inputUsername = document.getElementById('username').value;
    const inputPassword = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (inputUsername === 'admin' && inputPassword === 'admin123') {
        window.location.href = 'index.html';
    } else {
        errorMessage.textContent = 'Login gagal! Username atau password salah.';
        errorMessage.style.display = 'block';
    }
});