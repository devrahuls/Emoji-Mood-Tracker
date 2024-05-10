import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { login } from '../api/APICalls';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();
        const response = await login({email, password});
        console.log(response);
        if(response.data.errorMessage == "User not found"){
          navigate("/login");
        }else{
          // console.log(response.data);
          localStorage.setItem("Emoji_Mood_Tracker_Token", response.data.token)
          localStorage.setItem("Emoji_Mood_Tracker_Username", response.data.username);
          navigate("/app")
        }
      };
  return (
    <div>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <br />
          <button type="submit">Login</button>
          <p><Link to = "/signup">Need to Signup Create Account</Link></p>
        </form>
      </div>
  )
}

export default Login