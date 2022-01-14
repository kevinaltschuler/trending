import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import googleTrends from 'google-trends-api';

// googleTrends.realTimeTrends({ geo: 'US' }, (err, results) => {
//   console.log(err, results)
// })

const makeRequest = () => {
  googleTrends.interestOverTime({ keyword: 'Women\'s march' })
    .then(function (results) {
      console.log('These results are awesome', results);
    })
    .catch(function (err) {
      console.error('Oh no there was an error', err);
    });
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => makeRequest()}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
