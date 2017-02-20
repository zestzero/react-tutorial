import React, { Component } from 'react';
import NewsListContainer from './NewsFeedSample/NewsListContainer'

class App extends Component {
  render(){
    return (
      <div>
        <NewsListContainer source="the-next-web" sortBy="latest" />
        <hr />
        <NewsListContainer source="bbc-news" sortBy="top" />
        <hr />
        <NewsListContainer source="buzzfeed" sortBy="top" />
        <hr />
        <NewsListContainer source="mashable" sortBy="top" />
        <hr />
        <NewsListContainer source="techcrunch" sortBy="top" />
      </div>
    )
  }
}

export default App;
