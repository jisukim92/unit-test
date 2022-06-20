import logo from './logo.svg'
import './App.css'

function App() {
  //clientx, clientY 등등...  somedom = document.createElement('div')
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <span>Hello World</span>
        <div className='red'>빨간 블럭</div>
      </header>
    </div>
  )
}

export default App
