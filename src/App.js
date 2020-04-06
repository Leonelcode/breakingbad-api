import React from 'react'
import ReactDOM from 'react-dom'
import './stylesheets/main.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import CharacterIndex from './components/characters/CharacterIndex'
import SeasonIndex from './components/seasons/SeasonIndex'
import EpisodeIndex from './components/episodes/EpisodeIndex'
import Deaths from './components/deaths/Deaths'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
        <Navbar />
          <Switch>
            <Route exact path='/' component={CharacterIndex} />
            <Route path='/seasons/:id' component={EpisodeIndex} />
            <Route path="/seasons" component={SeasonIndex} />
            <Route path="/deaths" component={Deaths} />
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