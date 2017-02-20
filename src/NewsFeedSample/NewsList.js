import React, { Component } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  card: {
    flex: 1
  }
}
class NewsList extends Component {
  renderArticle({author, title, description, url, urlToImage, publishedAt}, i) {
    return (
    <Card key={i} style={styles.card}>
        <CardHeader title={author} avatar={urlToImage} />
         <CardMedia overlay={<CardTitle title={''} subtitle={publishedAt} />}>
          <img src={urlToImage} alt={title} />
          </CardMedia>
          <CardTitle title={title} />
          <CardText>
            {description}
          </CardText>
          <CardActions>
            <a href={url}><FlatButton label="More" /></a>
          </CardActions>
      </Card>
    );
  }
  render() { 
    return (
      <div>
          {this.props.news.map(this.renderArticle)} 
     </div>
    );
  }
}

export default NewsList