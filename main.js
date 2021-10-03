
const input = document.querySelector('text')

document.addEventListener('keydown', e => {
  const key = e.key.toLowerCase()
  const isSearch = key === 'f' && (e.metaKey || e.ctrlKey) // true or false if ctrl + f is pressed
  if (!isSearch) return // if true, (!(false)) return.  else if false, (!(true)), continue

  e.preventDefault()
  input.focus()
  console.log('focus!')
})