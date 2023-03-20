import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ pictureUrl, clickPicture }) => {
  return (
    <>
      <li key={pictureUrl.id}>
        <img
          src={pictureUrl.webformatURL}
          alt={pictureUrl.tags}
          onClick={clickPicture}
        />
      </li>
    </>
  );
};

ImageGalleryItem.propTypes = {
  clickPicture: PropTypes.func.isRequired,
  pictureUrl: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
