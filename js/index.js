document.addEventListener("DOMContentLoaded", function() {

  const keys = document.querySelectorAll("span") //selects all keys within container
  const display = document.querySelector("#screen") //selects caluclator screen to display
  let array = []
  let operators = ["÷", "x", "-", "+"]

  //testing different types of mathematical operators

  let divide = function(x, y) {
    if (y === 0) {
      return "Error"
    } else {
      return x / y
    }
  }

  let multiply = function(x, y) {
    return x * y
  }

  let add = function(x, y) {
    return x + y
  }

  let subract = function(x, y) {
    return x - y
  }

  //click function for each button event - clear, equals, mathematical operators, cannot compute

  keys.forEach(function(button) {
    button.addEventListener("click", function() {

      if (display.textContent === "Error") {
        display.textContent = "";
      }

      if (button.id !== "clear" && button.id !== "equals") {
        display.textContent += button.textContent
      } else if (button.id === "clear") {
        display.textContent = ""
      } else if (button.id === "equals") {
        operators.forEach(function(calc) {

          if ((display.textContent).includes(calc)) {
            array = (display.textContent.split(calc))

            let x = parseInt(array[0])
            let y = parseInt(array[1])

            if (calc === "÷") {
              display.textContent = divide(x, y)
            }

            if (calc === "x") {
              display.textContent = multiply(x, y)
            }

            if (calc === "+") {
              display.textContent = add(x, y)
            }

            if (calc === "-") {
              display.textContent = subract(x, y)
            }

            if (display.textContent === "NaN") {
              display.textContent = "Error"
            }
          }
        })
      }
    })
  })
})
