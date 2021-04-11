chrome.commands.onCommand.addListener(command => {
  chrome.tabs.executeScript({
    file: 'content-script.js'
  })
})
