import React, { Component } from 'react'

class NewsList extends Component {
  renderArticle({author, title, url, urlToImage}, i) {
    return (
    <li key={i}>
      <a href={url}>{author}—{title}</a>
      </li>
    );
  }
  render() { 
    return <ul> {this.props.news.map(this.renderArticle)} </ul>;
  }
}

export default NewsList