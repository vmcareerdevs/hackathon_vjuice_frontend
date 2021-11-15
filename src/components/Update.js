import Button from './Button'

let employeeRecords = []

const Update = (prop) => {
    const submitForm = () => {
            const updateValue = document.getElementById('updateID').value
            const obj = {}
            const elements = document.getElementsByClassName('updateProp')
            for (let i = 0; i < employeeRecords.length; i++) {
                if (updateValue == employeeRecords[i]['ID']) {
                    //if match found, delete old record and replace with new, then clear fields and push updated record to all records
                    employeeRecords.splice(i,1)
                    for (let j = 0; j < elements.length; j++) {
                        obj[document.getElementsByClassName('addProp')[j].id] = elements[j].value
                        document.getElementsByClassName('updateProp')[j].value = ''
                        }
                        employeeRecords.push(obj)
                    return 'Record Updated'
                    //if no match, clear fields and return no record found
                } for (let k = 0; k < elements.length; k++) {
                    document.getElementsByClassName('updateProp')[k].value = ''
                    return 'No Record Found'
                }
            } 
        }
    return (
        <div>
            <h3>Update Record</h3>
            <br/>
            <label>Employee ID: </label>
            <input type='text' class='updateProp' id='updateID'></input>
            <br/>
            <br/>
            <label>Full Name: </label>
            <input type='text' class='updateProp' id='updateName'></input>
            <br/>
            <br/>
            <label>Department: </label>
            <input type='text' class='updateProp' id='updateDepartment'></input>
            <br/>
            <br/>
            <label>Location: </label>
            <input type='text' class='updateProp' id='updateLocation'></input>
            <br/>
            <br/>
            <label>Role: </label>
            <input type='text' class='updateProp' id='updateRole'></input>
            <br/>
            <br/>
            <label>Supervisor: </label>
            <input type='text' class='updateProp' id='updateSupervisor'></input>
            <br/>
            <br/>
            <label>Salary: </label>
            <input type='text' class='updateProp' id='updateSalary'></input>
            <br/>
            <br/>
            {/* <label>Date Hired: </label>
            <input type='text' class='updateProp' id='updateDateHired'></input>
            <br/> */}
            <Button color ='darkorange' text='Update' onClick={submitForm}>Update</Button>
        </div>
    )
}

export default Update