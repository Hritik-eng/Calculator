let string = "";
var input = document.querySelector(".input");
let buttons = document.querySelectorAll(".button");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    try {
      if (e.target.innerText == "=") {
        string = eval(string);
        input.value = string;
        string = string.toString();
        string =" ";
      } else if (e.target.innerText == "c") {
        input.value = " ";
        string = " ";
      } else if (e.target.innerText == "x") {
        let str = string.slice(0, string.length - 1);
        string = str;
        input.value = str;
      } else {
        string = string + e.target.innerText;
        input.value = string;
      }
    } catch {
      alert("Please Enter a Valid Input 😊");
      input.value = " ";
      string = "";
    }
  });
});
