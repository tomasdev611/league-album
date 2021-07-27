import ApiService from "./ApiService";

const AlbumService = (() => {
  const getAllAlbums = async () => {
    return await ApiService.getInstance().get('/albums');
  };

  const getAlbumsByUserId = async (userId) => {
    return await ApiService.getInstance().get(`/users/${userId}/albums`);
  };

  const getPhotosByAlbumId = async (albumId) => {
    return await ApiService.getInstance().get(`/albums/${albumId}/photos`);
  }

  return {
    getAllAlbums,
    getAlbumsByUserId,
    getPhotosByAlbumId
  };
})();

export default AlbumService;