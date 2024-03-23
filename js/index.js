// redirect.js

document.addEventListener("DOMContentLoaded", function () {
  var btnLogin = document.getElementById("btnlogin");
  if (btnLogin) {
    btnLogin.addEventListener("click", function () {
      window.location.href = "profile.html"; // Redireciona para profile.html ao clicar no botão
    });
  }
});
