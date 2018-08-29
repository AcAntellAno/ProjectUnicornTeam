import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { members } from './Members';

class App extends Component {
  constructor() {
    super(); //need to call super first before this
    this.state = {
      //state describes our application
      members: members,
      searchfield: ''
    };
  }
  onSearchInput = event => {
    this.setState({ searchfield: event.target.value });
    const filterMembers = this.state.members.filter(member => {
      return member.username
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    console.log(filterMembers);
  };

  render() {
    return (
      <div className="tc">
        <h1>Meet the Unicorn Team</h1>
        <SearchBox searchChange={this.onSearchInput} />
        <CardList members={this.state.members} />
      </div>
    );
  }
}

export default App;
