import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectMyInfo } from "../../redux/selectors/user";
import { fetchAlbumsByUserId } from "../../redux/reducers/albums";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const dispatch = useDispatch();
  const myInfo = useSelector(selectMyInfo);
  const history = useHistory();

  useEffect(() => {
    if (myInfo) {
      dispatch(fetchAlbumsByUserId(myInfo.id)).then((res) => {
        setAlbums(res.payload);
      });
    } else {
      history.push('/login');
    }
  }, [dispatch, myInfo, history]);

  return (
    <div>
      <div>
        <h5 className="m-3">Albums</h5>
        {
          albums.map((album) =>
            <div className="m-2" key={album.id}>
              <Link to={`/album/${album.id}/photos`} className="p-2">{album.title}</Link>
            </div>
          )
        }
      </div>
    </div>
  );

};

export default Albums;