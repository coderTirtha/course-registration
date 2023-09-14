import './App.css'
import Courses from './components/Courses/Courses'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Courses></Courses>
        <div className='flex-1'>
          <Dashboard></Dashboard>
        </div>
      </div>
    </>
  )
}

export default App
