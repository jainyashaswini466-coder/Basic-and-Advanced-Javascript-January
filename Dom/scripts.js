let container = document.getElementById('container')

let selectedCellSet = new Set
let idToCell = new Map()

for(let i=0; i<=26; i++){
let cell = document.createElement('div')

cell.className = 'cell header-cell'

if(i!==0){
    cell.innerHTML = String.fromCharCode(64+i)
}

container.append(cell)

}





















for(let i=1; i<=20; i++){
    let headerCell = document.createElement('div')
    headerCell.className = 'cell header-cell'
    headerCell.innerHTML = i;

    container.append(headerCell)

    for(let j = 1; j<=26; j++){
        let newCell = document.createElement('div');
        newCell.row = i;
        newCell.col = j;

        newCell.id = i +""+ j;
        newCell.contentEditable = true;
        newCell.className = 'cell data-cell'

        newCell.addEventListener('click',selection)

        container.append(newCell);
        idToCell.set(newCell.id, newCell)
    }
}

function selection(e){
    console.log(e)

    let clickedCell = e.target;

    if(!e.ctrlKey && !e.metaKey){
        for(let t of selectedCellSet){

            t.classList.remove('selected')
        }
        selectedCellSet.clear()

        clickedCell.classList.add('selected')
        selectedCellSet.add(clickedCell)
    }

    if((e.ctrlKey || e.metaKey) &&selectedCellSet.has(clickedCell)){
        clickedCell.classList.remove('selected');
        selectedCellSet.delete(clickedCell)
    }
    else{
        clickedCell.classList.add('selected');
        selectedCellSet.add(clickedCell)
    }
}

let saveBtn = document.getElementById('save')
saveBtn.addEventListener('click',()=>{
    let filledColumn = []
    let cells = document.querySelectorAll('.data-cell')
    for(let t of cells){

        let obj = {
            id: t.id,
            value: t.innerText
        }
        filledColumn.push(obj)
    }

    localStorage.setItem('filledColumn',JSON.stringify(filledColumn))

})

function setDefaultValues(){
    let filledColumn = JSON.parse(localStorage.getItem('filledColumn'))

    for(let t of filledColumn){
        let cell = idToCell.get(t.id)
        cell.innerText = t.value
    }
}
setDefaultValues()

let boldBtn = document.getElementById('bold')
boldBtn.addEventListener('click',function(){
    selectedCellSet.forEach(cell=>{
        cell.style.fontWeight =='bold'? cell.style.fontWeight='normal':cell.style.fontWeight='bold'
    })
})