document.addEventListener("DOMContentLoaded", () => {
  const lb_getSense = () => {
    let changer = document.querySelector(".sXer")
      ? ".secondInput"
      : ".firstInput";
    return changer;
  };
  const lb_calculate = (num1, num2) => {
    let result = 0;
    if (document.querySelector(".operation").value === "add") {
      result = num2 - num1;
    } else if (document.querySelector(".operation").value === "sous") {
      if (reversed === ".secondInput") {
        result = num1 - num2;
      } else {
        result = num1 + num2;
      }
    } else if (document.querySelector(".operation").value === "multi") {
      result = num2 / num1;
    } else {
      if (reversed === ".secondInput") {
        result = 1 / (num2 / num1);
      } else {
        result = num2 / (1 / num1);
      }
    }
    return result;
  };
  let reversed = lb_getSense();
  document.querySelector(".reverseButton").addEventListener("click", () => {
    document.querySelector(reversed).innerHTML = "";
    const inputer = document.createElement("input");
    inputer.className = "theNum";
    inputer.type = "number";
    inputer.placeholder = "Number";
    document.querySelector(reversed).appendChild(inputer);
    document
      .querySelector(
        reversed === ".secondInput" ? ".firstInput" : ".secondInput"
      )
      .removeChild(
        reversed === ".firstInput"
          ? document.querySelectorAll(".theNum")[1]
          : document.querySelector(".theNum")
      );
    const divXer = document.createElement("div");
    divXer.className = reversed === ".secondInput" ? "fXer" : "sXer";
    divXer.innerHTML = "x";
    document
      .querySelector(
        reversed === ".secondInput" ? ".firstInput" : ".secondInput"
      )
      .appendChild(divXer);
    reversed = lb_getSense();
  });
  document.querySelector(".buttonX").addEventListener("click", () => {
    if (
      document.querySelector(".theNum").value === "" ||
      document.querySelector(".result").value === ""
    ) {
      alert("Enter a number !");
    } else {
      alert(
        "x = " +
          lb_calculate(
            parseFloat(document.querySelector(".theNum").value),
            parseFloat(document.querySelector(".result").value)
          )
      );
    }
  });
});
