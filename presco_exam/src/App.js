import React, {Component} from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import FlagGrid from './components/FlagGrid'
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo'
import {BrowserRouter as Router, Route} from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})
class App extends Component{
  render(){
  return(

    <ApolloProvider client={client}>
      <Router>
        <div className="container">
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/flags" component={FlagGrid} />
        <Footer />
      </div>
      </Router>


    </ApolloProvider>
  )
  }

}
export default App;
