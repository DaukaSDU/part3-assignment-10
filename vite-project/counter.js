const colors = ['black', 'blue', 'yellow', 'green', 'red', 'brown', 'purple', 'gray', 'pink', 'orange']

export function setupCounter(element) {
  let counter = 0
  let h1 = document.querySelector('h1')
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
    h1.style.color = `${getColor(counter)}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

function getColor(counter) {
  return colors[counter % 10]
}