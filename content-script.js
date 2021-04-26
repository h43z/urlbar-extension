function initURLBar(){
  const URLBar = document.createElement('div')

  URLBar.innerText = decodeURI(document.location.href)
  URLBar.contentEditable = true
  URLBar.spellcheck = false
  URLBar.id = 'extensionurlbar'
  URLBar.style.cssText = `
    line-height: 1em;
    font-family: monospace;
    font-size: 1.8em;
    width: 70%;
    padding: 15px;
    left: 50%;
    top: 100px;
    transform: translateX(-50%);
    position: fixed;
    min-height: 1em;
    overflow-wrap: break-word;
    max-height: 8em;
    overflow: auto;
    border: 5px solid lightgrey;
    background-color: white;
    outline: none;
    z-index: 1000;
    height: auto;
  `

  URLBar.addEventListener('keypress', e => {
    if(e.key === 'Enter'){
      e.preventDefault()
      e.currentTarget.style.display = 'none'
      document.location = e.target.innerText
    }
  })

  URLBar.addEventListener('keyup', e => {
    if(e.key === 'Escape'){
      e.currentTarget.style.display = 'none'
    }
  })

  URLBar.addEventListener('focusout', e => {
    e.currentTarget.style.display = 'none'
  })

  document.body.appendChild(URLBar)
  focusURLBar()
}

function focusURLBar(){
  const URLBar = document.getElementById('extensionurlbar')

  URLBar.style.display = 'block'

  const range = document.createRange()
  const sel = window.getSelection()

  range.setStart(URLBar.childNodes[0], URLBar.innerText.length)
  range.collapse(true)

  sel.removeAllRanges()
  sel.addRange(range)

  URLBar.focus()
}

if(!document.getElementById('extensionurlbar')){
  initURLBar()
}else{
  focusURLBar()
}
