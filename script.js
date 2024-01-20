// this method capture all the class element
const fill=document.querySelector('.fill')
const empties=document.querySelectorAll('.empty')

// this method for dragstart & dragend
fill.addEventListener('dragstart',dragStart)
fill.addEventListener('dragend',dragEnd)

// this code for adding addeventlinstener all the empty class 
for(const empty of empties)
{
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drag',dragDrop)
}





// function dragStart(){
//     this.className +='hold'
//     setTimeout(()=>this.className='invisible',0)
// }