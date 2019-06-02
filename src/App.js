import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginContainer from './containers/LoginContainer'
import Weather from './components/Weather'
import './App.css'

const App = () => (

    <div>
      <div className="content">
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route exact path="/" component={LoginContainer} />
        </Switch>
      </div>
    </div>

)

export default App
