import React, { Component } from 'react';
import NewsListContainer from './NewsFeedSample/NewsListContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render(){
    return (
      <MuiThemeProvider>
        <NewsListContainer />        
      </MuiThemeProvider>
    )
  }
}

export default App;
