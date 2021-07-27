import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  fetchPhotosByAlbumId,
  saveSearchString
} from "../../../redux/reducers/albums";
import PhotoItem from "../../photo";

const AlbumItem = () => {
  const [allPhotos, setAllPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [searchString, setSearchString] = useState('');
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchPhotosByAlbumId(id)).then((res) => {
      setAllPhotos(res.payload);
      setPhotos(res.payload);
    });
    return () => {
      dispatch(saveSearchString(''));
    }
  }, [id, dispatch]);

  const handleSearch = () => {
    if (searchString.includes(' ')) {
      alert("Search string should not contain spaces");
      return;
    }
    const photos = allPhotos.filter(photo => photo.title.includes(searchString));
    dispatch(saveSearchString(searchString));
    setPhotos(photos);
  }

  return (
    <div>
      <div className="m-3 d-flex">
        <h5>Photos</h5>
        <div className="search-form">
          <input type="text" onChange={(e) => setSearchString(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
      {
        photos.map((photo) =>
          <PhotoItem photo={photo} key={photo.id} />
        )
      }
    </div>
  );

};

export default AlbumItem;