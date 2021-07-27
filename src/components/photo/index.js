import { useState } from "react";
import { Lightbox } from "react-modal-image";
import { useSelector } from "react-redux";
import { selectSearchString } from "../../redux/selectors/album";
import "./photo.scss";

const PhotoItem = ({ photo }) => {
  const [showFullImage, setShowFullImage] = useState(false);
  const searchString = useSelector(selectSearchString);

  const renderTitle = (title) => {
    if (!searchString) {
      return (
        <span>{title}</span>
      )
    } else {
      const words = title.split(' ');
      const titleSplices = words.map((word) => {
        return {
          word: word.includes(searchString) ? `*${word}*` : word,
          italic: word.includes(searchString)
        };
      });
      return (
        <div className="d-flex">
          {titleSplices.map((slice, index) => (
            <div className="d-flex" style={{ 'fontStyle': slice.italic ? 'italic' : 'initial' }} key={index}>
              {`${slice.word}`}
              {index !== titleSplices.length - 1 && (
                <span>&nbsp;</span>
              )}

            </div>
          ))}
        </div>
      )
    }
  }

  return (
    <>
      <div className="d-flex flex-column m-3">
        <img className="thumbnail" src={photo.thumbnailUrl} alt="thumbnail" onClick={() => { setShowFullImage(true) }} />
        {renderTitle(photo.title)}
      </div>
      {
        showFullImage && (
          <Lightbox
            large={photo.url}
            onClose={() => setShowFullImage(false)}
          />
        )
      }
    </>
  );

};

export default PhotoItem;

