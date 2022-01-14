import React, { useState } from 'react'
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
        <p>Hello parcel, fuck vite!</p>
        <p>
          <button type="button" onClick={() => makeRequest()}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default App
