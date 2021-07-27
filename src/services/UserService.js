import ApiService from "./ApiService";

const UserService = (() => {
  const login = async () => {
    return await ApiService.getInstance().get('/users');
  };

  return {
    login
  };
})();

export default UserService;