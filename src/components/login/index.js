import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/reducers/user";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(email)).then((res) => {
      if (res.payload.myInfo) {
        history.push(`/albums`);
      } else {
        alert("Not Registered Email");
      }
    })
  }

  return (
    <form className="d-flex flex-column p-3" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" className="m-1" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mt-2">
        <button type="submit" className="w-100">Login</button>
      </div>
      <div className="text-center">
        Please use an email that was already registered in https://jsonplaceholder.typicode.com/users
      </div>
    </form>
  )

};

export default Login;