import React from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
import './index.css';

import App from 'components/App/App'

axios.get('http://localhost:3001/persons').then(response => {
  const notes = response.data
  console.log(notes)
})

ReactDOM.createRoot(document.getElementById('root')).render(<App />)