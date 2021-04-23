var selectedRow = null

function onFormSubmit() {
    var formData = readFormData()
    if (selectedRow == null)
        insertNewRecord(formData)
        else
            updateRecord(formData)
    resetForm()
}

function readFormData() {
    var formData = {}
    formData['fullWork'] = document.getElementById('fullWork').value 
    formData['predio'] = document.getElementById('predio').value 
    return formData
}

function insertNewRecord(data) {
    var table = document.getElementById('employedList').getElementsByTagName('tbody')[0]
    var newRow = table.insertRow(table.lenght)
    cell1 = newRow.insertCell(0)
    cell1.innerHTML = data.predio
    cell2 = newRow.insertCell(1)
    cell2.innerHTML = data.fullWork
    cell2 = newRow.insertCell(2)
    cell2.innerHTML = `<a style="cursor: pointer" onClick="onEdit(this)"><img src="./img/draw.png" width=18 height=20>  </a>
                        <a style="cursor: pointer" onClick="onDelete(this)"><img src="./img/trash-bin.png" width=18 height=20></a>`
}

function resetForm() {
    document.getElementById('predio').value = ""
    document.getElementById('fullWork').value = ""
    
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement
    document.getElementById('predio').value = selectedRow.cells[0].innerHTML
    document.getElementById('fullWork').value = selectedRow.cells[1].innerHTML
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullWork
    selectedRow.cells[1].innerHTML = formData.fullWork

}

function onDelete(td) {
    if(confirm('Tem certeza que deseja deletar este idem ?'))
    row = td.parentElement.parentElement
    document.getElementById('employedList').deleteRow(row.rowIndex)
    resetForm()
}

