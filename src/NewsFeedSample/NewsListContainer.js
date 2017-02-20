import React, { Component } from 'react'
import NewsList from './NewsList'
import $ from 'jquery'

class NewsListContainer extends Component {
  constructor() {
    super();
    this.state = { news: [] }
  }

  componentDidMount() {
    let API_KEY = "";
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=" 
          + this.props.source 
          + "&sortBy=" + this.props.sortBy
          + "&apiKey=" + API_KEY,
      dataType: 'json',
      success: function(news) {
        this.setState({news: news.articles});
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <h1>{this.props.source}</h1>
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

export default NewsListContainer