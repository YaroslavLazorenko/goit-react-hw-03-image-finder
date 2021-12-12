import { Component } from 'react';
import PicturesApiService from '../../services/pixabay-api';
import Loader from 'react-loader-spinner';
import ImageGalleryItem from '../ImageGalleryItem';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = { status: Status.IDLE, imagesArray: [], error: null };
  picturesApiService = new PicturesApiService();

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery === this.props.searchQuery) return;

    this.setState({ status: Status.PENDING });
    this.picturesApiService.query = this.props.searchQuery;
    this.picturesApiService
      .fetchPictures()
      .then(result =>
        result.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return { id, webformatURL, largeImageURL, tags };
        }),
      )
      .then(imagesArray => {
        this.setState({ imagesArray, status: Status.RESOLVED });
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  }

  render() {
    const { status, imagesArray, error } = this.state;

    if (status === Status.IDLE) {
      return <p>Please, enter your search query and find pictures</p>;
    }
    if (status === Status.PENDING) {
      return (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }
    if (status === Status.RESOLVED) {
      return (
        <ul className="gallery">
          {imagesArray.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                galleryImageURL={webformatURL}
                largeImageURL={largeImageURL}
                tags={tags}
              />
            );
          })}
        </ul>
      );
    }
    if (status === Status.REJECTED) {
      return <p>{error.message}</p>;
    }
  }
}
