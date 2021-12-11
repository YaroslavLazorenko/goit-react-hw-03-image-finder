import { Component } from 'react';
import Searchbar from './components/Searchbar';

class App extends Component {
  state = { searchQuery: '' };

  onSubmitSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return <Searchbar onSubmit={this.onSubmitSearchQuery} />;
  }
}

export default App;
