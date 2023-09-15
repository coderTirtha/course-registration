import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Courses from './components/Courses/Courses'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'

function App() {
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [price, setPrice] = useState(0);
  const [hours, setHours] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  const handleSelection = (course) => {
    const duplicateSelection = selectedCourse.find(selected => selected.id === course.id);
    if (duplicateSelection) {
      toast("You have already selected this course");
    } else if ((remainingCredit - course.credit) < 0) {
      toast("You don't have enough credit hours!");
    }
    else {
      const newSelection = [...selectedCourse, course];
      setSelectedCourse(newSelection);
      setPrice(price + course.price);
      setRemainingCredit(remainingCredit - course.credit);
      setHours(hours + course.credit);
    }
  }

  return (
    <>
      <Header></Header>
      <ToastContainer autoClose={2000} draggable={true} />
      <div className='flex flex-col-reverse md:flex-row gap-4'>
        <Courses handleSelection={handleSelection}></Courses>
        <div className='md:w-1/4'>
          <Dashboard remainingCredit={remainingCredit} hours={hours} price={price} selectedCourse={selectedCourse}></Dashboard>
        </div>
      </div>
    </>
  )
}

export default App
