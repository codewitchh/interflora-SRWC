function registerFunction() {
  if (document.registerForm.email.value == "") {
    alert("enter email");
    document.registerForm.email.focus();
    return false;
  } else if (document.registerForm.password.value == "") {
    alert("enter password");
    document.registerForm.password.focus();
    return false;
  } else if (document.registerForm.confirmPass.value == "") {
    alert("enter confirm password");
    document.registerForm.confirmPass.focus();
    return false;
  } else if (document.registerForm.password.value !== document.registerForm.confirmPass.value) {
    alert("password and confirm password should be same!!");
    document.registerForm.confirmPass.focus();
    return false;
  } else {
    alert(document.registerForm.email.value + " " + "you have Registered successfully!");
    console.log(window.location.href)
    window.location.href = "login.html"
    console.log(window.location.href)
    return true;
  }
}