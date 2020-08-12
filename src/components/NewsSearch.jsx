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
    const results = await axios.get(`http://newsapi.org/v2/everything?q=${this.state.search}&from=2020-07-12&sortBy=publishedAt&apiKey=<API_KEY>`)
    this.setState({items: results.data.articles});
  }
setValue = (e) => {
    this.setState({ search: e.target.value });
  };
  render() {
    let displayNews = this.state.items.map(items => {
      return (
      <li>{items.articles}</li>
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