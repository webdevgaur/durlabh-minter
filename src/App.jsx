import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar'
import MainMint from './components/MainMint';

function App() {
  const [accounts, setAccounts] = useState([]);

  return (
    <>
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
    </>
  )
}

export default App
