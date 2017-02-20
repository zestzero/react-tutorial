import React, { Component } from 'react'

class NewsList extends Component {
  renderArticle({author, title, url, urlToImage}, i) {
    return (
    <li key={i}>
      <a href={url}>
        <img src={urlToImage} style={{width: 60, height: 40}} />
        {title} -- {author}
        </a>
      </li>
    );
  }
  render() { 
    return <ul> {this.props.news.map(this.renderArticle)} </ul>;
  }
}

export default NewsList