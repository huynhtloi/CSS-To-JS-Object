import HomePage from './pages/main'
import { globalStyles } from './styles/main.style'

const App = () => {
  globalStyles()
  return (
    <div className='App'>
      <HomePage />
    </div>
  )
}

export default App
