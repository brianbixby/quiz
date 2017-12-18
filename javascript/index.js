var form = document.getElementById("nameForm");
form.addEventListener("submit", localStore);

function localStore(event) {
  event.preventDefault();
  console.log(form.elements["userName"].value);
  localStorage.setItem("userName", form.elements["userName"].value);
  window.location.href = "pages/quiz.html";
}
