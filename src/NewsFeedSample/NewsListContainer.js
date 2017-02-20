import $ from 'jquery'
import React, { Component } from 'react'
import NewsList from './NewsList'
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Dialog from 'material-ui/Dialog';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles = {
  dropdown: {
    fontSize: 20,
    flex: 1
  }
}

const sourceDict = 
    [
      { text: "None", source: '', sortBy: '' },
      { text: "The Next Web", source: 'the-next-web', sortBy: 'latest' },
      { text: "TechCrunch", source: 'techcrunch', sortBy: 'top'},
      { text: "BuzzFeed", source: 'buzzfeed', sortBy: 'top'},
      { text: "Engadget", source: 'engadget', sortBy: 'top'},
      { text: "Hacker News", source: 'hacker-news', sortBy: 'top'},
      { text: "Mashable", source: 'mashable', sortBy: 'top'},
      { text: "TechRadar", source: 'techradar', sortBy: 'top'},
    ];

const API_KEY = "";

class NewsListContainer extends Component {
  constructor() {
    super();
    this.state = { news: [], value: 0, open: false }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, index, value){
    this.setState({value: value, open: true});
    $.ajax({
      url: "https://newsapi.org/v1/articles?source=" 
          + sourceDict[value].source 
          + "&sortBy=" + sourceDict[value].sortBy
          + "&apiKey=" + API_KEY,
      dataType: 'json',
      success: function(news) {
        this.setState({news: news.articles, open: false});
      }.bind(this)
    });
  }
  render() {
    return (
      <div>
        <DropDownMenu style={styles.dropdown} value={this.state.value} onChange={this.handleChange}>
          {sourceDict.map((obj, i) => { return <MenuItem key={i} value={i} primaryText={obj.text} /> })}
        </DropDownMenu>
        <Dialog
          modal={true}
          open={this.state.open}
        >
          <span><i className="fa fa-spinner fa-spin fa-2x fa-fw"></i>LOADING ... </span>
        </Dialog>
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

export default NewsListContainer