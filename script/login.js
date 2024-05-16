function validateForm() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username === 'admin' && password === 'admin123') {
    alert('Inicio de sesión exitoso');
    window.location.href = './index.html'; 
    return false;
  } else {
    var errorMessage = '';

    if (username !== 'admin') {
      errorMessage += 'Usuario incorrecto. ';
    }

    if (password !== 'admin123') {
      errorMessage += 'Contraseña incorrecta.';
    }

    alert(errorMessage.trim());
    return false;
  }
}
