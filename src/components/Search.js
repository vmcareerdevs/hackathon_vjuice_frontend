import Button from './Button'

let employeeRecords = []

const Search = (prop) => {
    const submitForm = () => {
    let searchValue = document.getElementById('search').value
    for (let i = 0; i < employeeRecords.length; i++) {
    if (searchValue == employeeRecords[i]['Name'] || searchValue == employeeRecords[i]['ID'] || searchValue == employeeRecords[i]['Department'] || searchValue == employeeRecords[i]['Location'] || searchValue == employeeRecords[i]['Role'] || searchValue == employeeRecords[i]['Supervisor'] || searchValue == employeeRecords[i]['Salary']) {
        //if match found, clear field and return matching record
        document.getElementById('search').value = ''
        return Document.write('<p>Hi</p>')
        }
        //if no match, clear field and return no record found
    } return document.getElementById('search').value = '','No Record Found'
    }
    return (
        <div>
            <input type='text' id='search'></input>
            <br/>
            <Button color='teal' text='Search' onclick={submitForm}>Find</Button>
            <br/>
            <br/>
        </div>
    )
}

export default Search
