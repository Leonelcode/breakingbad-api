import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import CharacterIndex from './components/characters/CharacterIndex'


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
        <Navbar />
          <Switch>
            <Route exact path='/' component={CharacterIndex} />
          </Switch>
        </>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)