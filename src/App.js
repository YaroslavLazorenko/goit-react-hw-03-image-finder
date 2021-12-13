import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import styles from './App.module.css';

class App extends Component {
  state = { searchQuery: '', showModal: false, largeImageURL: '', tags: '' };

  onSubmitSearchQuery = searchQuery => {
    this.setState({ searchQuery });
  };

  openModal = (largeImageURL, tags) => {
    this.toggleModal();
    this.setState({ largeImageURL, tags });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { searchQuery, showModal, largeImageURL, tags } = this.state;

    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmitSearchQuery} />
        <main>
          <ImageGallery searchQuery={searchQuery} openModal={this.openModal} />
          {showModal && (
            <Modal closeModal={this.toggleModal} largeImageURL={largeImageURL} tags={tags} />
          )}
          <ToastContainer autoClose={3000} />
        </main>
      </div>
    );
  }
}

export default App;
