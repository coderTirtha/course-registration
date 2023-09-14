import { useState } from 'react'
import './App.css'
import Courses from './components/Courses/Courses'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [price, setPrice] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSelection = course => {
    const duplicateSelection = selectedCourse.find(selected => selected.id === course.id);
    if(duplicateSelection) {
      alert("You have already selected this course");
    } else {
      const newSelection = [...selectedCourse, course];
      setSelectedCourse(newSelection);
      setPrice(price + course.price);
      setHours(hours + course.credit);
    }
  }

  return (
    <>
      <Header></Header>
      <div className='flex gap-4'>
        <Courses handleSelection={handleSelection}></Courses>
        <div className='md:w-1/4'>
          <Dashboard hours={hours} price={price} selectedCourse ={selectedCourse}></Dashboard>
        </div>
      </div>
    </>
  )
}

export default App
