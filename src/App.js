import { BrowserRouter as Router, Route } from 'react-router-dom'
import ChooseQuote from './components/ChooseQuote'
import MainPage from './components/MainPage'
import Login from './components/User/Login'
import Register from './components/User/Register'

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/chooseQuote" component={ChooseQuote} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </Router>
  )
}

export default App