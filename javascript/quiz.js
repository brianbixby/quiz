var formCounter = 0;
var formIDs = ["quizForm0", "quizForm1", "quizForm2", "quizForm3"];
var formNames = ["question0", "question1", "question2", "question3"]
var form = document.getElementById(formIDs[formCounter]);

function localStore(event) {
  event.preventDefault();
  // console.log(form.elements[formNames[formCounter]].value);
  localStorage.setItem(formNames[formCounter], form.elements[formNames[formCounter]].value);
  document.getElementById(formIDs[formCounter]).style.display = "none";
  if(formCounter < 3){
    document.getElementById(formIDs[formCounter+1]).style.display = "block";
    // console.log(formCounter);
    form = document.getElementById(formIDs[formCounter+1]);
    form.addEventListener("submit", localStore);
  }
  else{
    window.location.href = "../pages/results.html";
  }
  formCounter++;
}

form.addEventListener("submit", localStore);
