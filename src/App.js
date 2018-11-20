import React, { Component } from 'react'
import { Switch, Route, Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DefaultTheme from './components/DefaultTheme'
import Header from './components/Header'
import routes from './routes'
import PrivateRoute from './PrivateRoute'
import HomePage from './modules/homePage'
import { history } from './utils/history';
import Login from './modules/login'
import Register from './modules/register'
import Profile from './modules/profile'
import EditProfile from './modules/editProfile'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={DefaultTheme}>
        <div>
          <Header/>
            <Switch>
              <Router history={history}>
                            <div>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/login" component={Login} />
                                <Route path="/register" component={Register} />
                                <Route exact path="/user/:id" component={Profile} />
                                <Route exact path="/user/:id/edit" component={EditProfile} />
                            </div>
                        </Router>
            </Switch>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
