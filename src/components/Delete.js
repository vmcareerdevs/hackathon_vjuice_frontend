import Button from './Button'

let employeeRecords = []

const Delete = (prop) => {
    const submitForm = () => {
        let deleteValue = document.getElementById('deleteRecord').value
        for (let i = 0; i < employeeRecords.length; i++) {
        if (deleteValue == employeeRecords[i]['ID']) {
         //if match found, delete record
            document.getElementById('deleteRecord').value = ''
            employeeRecords.splice(i,1)
            return 'Record Deleted'
            } //if no match found, return no record found
        } return 'No Record Found'
    }
    return (
        <div>
            <h3>Delete By ID</h3>
            <input type='text' id='deleteRecord'></input>
            <br/>
            <Button color='darkred' text='Delete' onClick={submitForm}>Delete</Button>
            <br/>
            </div>
    )
}

export default Delete