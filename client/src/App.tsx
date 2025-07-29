import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cars from './pages/Cars'
import MyBookings from './pages/MyBookings'
import CarDetails from './pages/CarDetails'

function App() {

  return (
    <div className='bg-light'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </div>
  )
}

export default App
