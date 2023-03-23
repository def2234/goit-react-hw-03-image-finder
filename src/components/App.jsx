import { Section } from './Section-styled';
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
import { GetImage } from '../GetImage/GetImage';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    serchValue: '',
    showModal: false,
    image: [],
    error: null,
    page: 1,
    status: 'idl',
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    // const { serchValue } = this.props;
    const { page, serchValue } = this.state;

    if (prevState.serchValue !== serchValue) {
      this.setState({ status: 'pending' });
      GetImage(serchValue, page)
        .then(item => {
          console.log(item.hits.length);
          if (item.hits.length === 0) {
            return Promise.reject(
              new Error(
                `Image with name:${serchValue} not found, please try again or check input`
              )
            );
          } else {
            const image = item.hits.map(
              ({ id, webformatURL, largeImageURL, tags }) => ({
                id,
                webformatURL,
                largeImageURL,
                tags,
              })
            );
            return image;
          }
        })
        .then(image => {
          return this.setState({
            image,
            status: 'resolved',
          });
        })

        .catch(error => {
          this.setState({ error, status: 'rejected' });
        });
    }
    if (prevState.page < page) {
      GetImage(serchValue, page).then(item =>
        this.setState(state => {
          return { image: [...state.image, ...item.hits] };
        })
      );
    }
  }

  handleClickButton = e => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(state => {
      return {
        showModal: !state.showModal,
      };
    });
  };

  formOnsubmitHandler = value => {
    this.setState({ serchValue: value });
  };

  handleOnPictureClick = largeImageURL => {
    this.setState({ showModal: true, largeImageURL });
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
    document.body.style.position = '';
    document.body.style.top = '';
  };

  render() {
    const { status, showModal, largeImageURL, error, image, serchValue } =
      this.state;
    return (
      <Section>
        {showModal && (
          <Modal image={largeImageURL} closeModal={this.closeModal} />
        )}

        <Searchbar onSubmit={this.formOnsubmitHandler} />
        {status === 'rejected' && <h1>{error.message}</h1>}
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <ImageGallery
            serchValue={serchValue}
            image={image}
            onPictureClick={this.handleOnPictureClick}
          ></ImageGallery>
        )}

        {status === 'resolved' && <Button onClick={this.handleClickButton} />}
      </Section>
    );
  }
}
