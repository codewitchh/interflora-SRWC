function ClearStorage() {
  window.localStorage.clear();
}
window.onload = function () {
  ClearStorage()
};

function myFunction() {
  alert("Thanks for the order")
  window.location.href = "index.html"
}

function getData() {
  localStorage.getItem("userName")
}

function logout() {
  window.localStorage.clear();
  window.location.href = "login.html"
}

function logFunction() {
  window.localStorage.clear();
  if (document.myform.user.value == "") {
    alert("enter usernsme");
    document.myform.user.focus();
    return false;
  }
  if (document.myform.pass.value == "") {
    alert("enter password");
    document.myform.pass.focus();
    return false;
  } else {
    alert(document.myform.user.value + " " + "you have logged in successfully!");
    window.location.href = "index.html"
    console.log(document.myform.user.value)
    localStorage.setItem("userName", document.myform.user.value);
    // document.getElementById("panel_button").value="Close Curtain";
    // var elem = document.getElementById("panel_button");
    // console.log(elem)
    // elem.value = "Logout";
    // document.getElementsByClassName("childdiv")[0].childNodes[1].textContent="Updated Text";
  }
}