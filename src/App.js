import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import DefaultTheme from './components/DefaultTheme'
import Header from './components/Header'
import routes from './routes'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={DefaultTheme}>
        <div>
          <Header/>
            <Switch>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              ))}
            </Switch>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
