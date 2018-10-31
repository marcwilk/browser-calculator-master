const { expect } = chai

describe("Tests are working", () => {
  it("it's on", () => {
    expect(true).to.equal(true)
  })
})


describe("Screen Tests", () => {
  it("sets the screen to 1", () => {
    clearScreen()
    updateScreen('1')
    expect(getScreen()).to.equal('1')
  })

  it("appends when setting the screen to 11", () => {
    clearScreen()
    updateScreen('1')
    updateScreen('1')

    expect(getScreen()).to.equal('11')
  })

  it("sets clears the screen", () => {
    updateScreen('1')
    clearScreen()
    expect(getScreen()).to.equal('')
  })
})

describe("1+1 is 2", () => {
  it("sets the screen to 1 + 1", () => {
    clearScreen()
    updateScreen('1')
    updateScreen('+')
    updateScreen('1')
    expect(getScreen()).to.equal('1+1')
  })
})


describe("DOM tests", () => {
  it("clears the screen", () => {
    clearScreen()
    updateScreen('1')
    // click clear button
    let clearButton = document.getElementById('clear')
    clearButton.click()

    expect(getScreen()).to.equal('')
  })

  it("clicking 1 + 1 sets screen to '1+1'", () => {
    clearScreen()
    // click clear button
    let oneButton = findButton('1')
    let plusButton = findButton('+')
    oneButton.click()
    plusButton.click()
    oneButton.click()

    expect(getScreen()).to.equal('1+1')
  })
})

function findButton(char) {
  let buttons = document.querySelectorAll('.buttons span')

   for (let button of buttons) {
     if (char === button.innerText) {
       return button
     }
   }
}
