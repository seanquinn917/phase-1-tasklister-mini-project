document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.querySelector('input').value)
    form.reset()
  })

})

function handleToDo(todo){
  let p = document.createElement('p')
  p.textContent = todo
  document.querySelector('#list').appendChild(p)
}

function colorChange(color){
  document.body.style.background = 'violet';
  
}
colorChange()

// function newText(){
//   for(let item of text){
//     return item
//   }
// }
document.querySelector('h2').innerText = "Get it DONE"