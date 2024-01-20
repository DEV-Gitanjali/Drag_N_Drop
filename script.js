
// this method for all the element capture 
const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

// this code for add eventlistener start & end
fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

// this mehtod for add event listener all the empty element
for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

// when you hold empty element it will be invisible
function dragStart() {
    this.className += ' hold' 
    setTimeout(() => this.className = 'invisible', 0)
}

// this code for dragend event
function dragEnd() {
    this.className = 'fill'
}

// this code for drag over event
function dragOver(e) {
    e.preventDefault()
}

// this code for drag enter 
function dragEnter(e) {
    e.preventDefault()
    this.className += ' hovered'
}

// this code for drag leave 
function dragLeave() {
    this.className = 'empty'
}

// this code for drag drop event when you drop it the image will be  append 
function dragDrop() {
    this.className = 'empty'
    this.append(fill)
}