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

// export const ImageGalleryItem = ({ serchImage }) => {
//   return (
//     <>
//       {serchImage.map(
//         ({ id, webformatURL, largeImageURL, tags, clickPicture }) => {
//           return (
//             <li key={id} onClick={() => clickPicture(largeImageURL)}>
//               <img src={webformatURL} alt={tags} />
//             </li>
//           );
//         }
//       )}
//     </>
//   );
// };
