import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import MyPage from './components/MyPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyPage/>
    </>
  )
}

export default App
