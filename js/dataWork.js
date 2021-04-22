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
    cell2.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                        <a onClick="onDelete(this)">Delete</a>`
}

function resetForm() {
    document.getElementById('predio').value = ""
    document.getElementById('fullWork').value = ""
    
}

function onEdit(td){
    selectedRow = td.parentElement.parentElement
    document.getElementById('fullWork').value = selectedRow.cells[0].innerHTML
    document.getElementById('predio').value = selectedRow.cells[0].innerHTML
}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullWork
    selectedRow.cells[1].innerHTML = formData.fullWork

}

function onDelete(td) {
    if(confirm('Está decidido de deltar esse item?'))
    row = td.parentElement.parentElement
    document.getElementById('employedList').deleteRow(row.rowIndex)
    resetForm()
}

