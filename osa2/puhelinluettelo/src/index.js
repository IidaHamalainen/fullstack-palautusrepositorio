
import ReactDOM from 'react-dom'
import App from './App'

const persons = [
  {
   name:'Arto Hellas',
   number: '040-5678901'
  }

]
ReactDOM.createRoot(document.getElementById('root')).render(
  <App persons={persons} />
)
