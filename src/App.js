import { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';

class App extends Component {
  state = { searchQuery: '' };

  onSubmitSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.onSubmitSearchQuery} />
        <ImageGallery searchQuery={searchQuery} />
        {/* <Button /> */}
      </>
    );
  }
}

export default App;
