import React from 'react'
import './App.css'
import Feed from './Components/Feed/Feed'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sedebar/Sidebar'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='app__body'>
        <Feed />
        <Sidebar />
      </div>
    </div>
  )
}

export default App
