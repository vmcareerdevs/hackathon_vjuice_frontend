import Button from './Button'

let employeeRecords = []

const Add = (prop) => {
    const submitForm = () => {
        const obj = {}
        const elements = document.getElementsByClassName('addProp')
        for (let i = 0; i < elements.length; i++) {
            obj[elements[i].name] = elements[i].value
            document.getElementsByClassName('addProp')[i].value = ''
        }
        employeeRecords.push(obj)
        return 'Record Added'
    }
    return (
        <div>
            <input type='text' placeholder=' Full Name' class='addProp' id='FullName' name='Name'/>
            <br/>
            <input type='text' placeholder=" Department" class='addProp' id='Department' name='Department'/>
            <br/>
            <input type='text' placeholder=' Location' class='addProp' id='Location' name='Location'/>
            <br/>
            <input type='text' placeholder=' Role' class='addProp' id='Role' name='Role'/>
            <br/>
            <input type='text' placeholder=' Supervisor' class='addProp' id='Supervisor' name='Supervisor'/>
            <br/>
            <input type='text' placeholder=' Salary' class='addProp' name='Salary'/>
            <br/>
            {/* <label>Date Hired:</label>
            <input type='text' class='addProp' name='DateHired'/>
            <br/>
            <br/> */}
            <Button align = 'center' color ='steelblue' text='Add Record' onClick={submitForm}>Add Record</Button>
            <br/>
        </div>
    )
}

export default Add