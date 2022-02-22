import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UserInfoPage from './pages/UserInfoPage'
import LogInPage from './pages/LogInPage'
import SignUpPage from './pages/SignUpPage'
import NotesPage from './notes/NotesPage'
import PrivateRoute from './auth/PrivateRoute'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute path='/' exact>
          <UserInfoPage />
        </PrivateRoute>
        <Route path='/login' exact>
          <LogInPage />
        </Route>
        <Route path='/signup' exact>
          <SignUpPage />
        </Route>
        <PrivateRoute path='/notes' exact>
          <NotesPage />
        </PrivateRoute>
      </Switch>
    </Router>
  )
}
