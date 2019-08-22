function solve() {
console.log('0');

  let paragraph = document.getElementById('input')
  let text = paragraph.textContent
  let splitted = text.split('.')
  let counter = 0
  let newParagraph = ''
  let isTrue = true;
  let i = 0
  if (splitted.length >= 3) {

    for (const textp of splitted) {
      newParagraph += textp + '.'
      counter++
      i++

      if(counter == 3){
        
          
          let newNew = document.createElement('p')
          newNew.textContent = newParagraph
          let insertParagraph = document.getElementById('output')
          insertParagraph.appendChild(newNew)
        counter = 0
        newParagraph = ''
      }

      if(i == splitted.length-1){
        let newNew = document.createElement('p')
        newNew.textContent = newParagraph
        let insertParagraph = document.getElementById('output')
        insertParagraph.appendChild(newNew)
      }
    

  }
  

  }
}

