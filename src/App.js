import Header from './components/Header'
import Add from './components/Add'
import Delete from './components/Delete'
import Search from './components/Search'
import Update from './components/Update'

function App() {
  return (
    
    <div className='container'>
      <Header title='Employee Management System'/>
      <Search title='Search'/>
      <Add title='Add'/>
    </div>
  )
}

export default App;