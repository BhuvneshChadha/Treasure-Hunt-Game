import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import treasurechest from './treasurechest.png'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/puzzle1')
    };
  
    return (
      <div>
        <h1>Lets Play!</h1>
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
          <button type="submit">Start</button><br />
        </form>
        <h1><b>TREASURE HUNT</b></h1>
        <img src={treasurechest} />
      </div>
    );
}

export default Login