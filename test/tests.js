const { expect, should, assert } = chai

describe("Tests are working", () => {
  it("it's on", () => {
    expect(true).to.equal(true)
  })
})

describe("Operators", () => {
  it("Can perform multiplication", () => {
    expect(multiply(5,10)).to.equal(50)
  })

  it("Can perform division", () => {
    expect(divide(10,5)).to.equal(2)
  })

  it("Can perform addition", () => {
    expect(add(10,5)).to.equal(15)
  })

  it("Can perform subtraction", () => {
    expect(subtract(10,5)).to.equal(5)
  })
})

describe("Screen Tests", () => {
  it("Can get/set the screen", () => {
    setScreen('test')
    expect(getScreen()).to.equal('test');
  })
  it("Can clear the screen", () => {
  setScreen('test')
  clearScreen()
  expect(getScreen()).to.equal('');
  })
  it("Clears the screen", () => {
  expect(getScreen()).to.equal('');
  })
})
