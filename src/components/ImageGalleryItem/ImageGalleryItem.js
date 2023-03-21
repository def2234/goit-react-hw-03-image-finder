import PropTypes from 'prop-types';
import { Li, Img } from './ImageGalleryItem-styled';

export const ImageGalleryItem = ({ pictureUrl, clickPicture }) => {
  return (
    <>
      <Li key={pictureUrl.id}>
        <Img
          src={pictureUrl.webformatURL}
          alt={pictureUrl.tags}
          onClick={clickPicture}
        />
      </Li>
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
