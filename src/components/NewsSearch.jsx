import React, { Component } from "react";
import { Button, Input } from "semantic-ui-react";
import axios from "axios";

class NewsSearch extends Component {
  state = {
    search: "",
    items: [],
  };  
  async performSearch() {
    debugger
    const results = await axios.get(`http://newsapi.org/v2/everything?q=${this.state.search}&from=2020-07-12&sortBy=publishedAt&apiKey=b2bf38ecdb764ae6a963b763c64a9473`)
    this.setState({items: results.data.articles});
  }
setValue = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    let displayNews = this.state.items.map(item => {
      return (
      <div>
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      </div>
      )
    })
    return (
      <>
        <Input
          onChange={(e) => this.setValue(e)}
          type="text"
          data-cy="news-search"
          placeholder="Input search term"
        />
        <Button onClick={this.performSearch.bind(this)} data-cy="search-submit">
          Search
        </Button>
        <ul>{displayNews}</ul>
      </>
    );
  }
}

export default NewsSearch;
