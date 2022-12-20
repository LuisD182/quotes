import { useState } from 'react'

import './App.css'
import Cites from './assets/components/Cites'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
     
      <Cites/>
    
    </div>
  )
}

export default App
