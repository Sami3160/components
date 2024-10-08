import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes,Outlet , Link} from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'
import ProfilePage from './views/profile'
import LoginPage from './views/LoginMUI'
import { AppBar, Typography, Button, Toolbar } from '@mui/material'
import Navbar from './components/Navbar'
import MainNavigation from './components/Sidebar2'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>} >
            <Route  index element={<Home />} />
            <Route  path='/home' element={<Home />} />
            <Route path='/about' element={<Home />} />
            <Route path='/login' element={<Home />} />
            <Route path='/login2' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/mainnavigation' element={<MainNavigation />} />
          </Route>
      
      </Routes>    

    </BrowserRouter>
        
  )
}


function Layout() {
  return (
    <div>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 ,backgroundColor:'blue'}}>
          MyApp
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/about">About</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
      </Toolbar>
    </AppBar>

    <Outlet /> {/* Renders the child routes */}
  </div>
  )
}
export default App
