import { LoginPageStyle, LoginFormStyle } from './LoginPage.style';
import logoUnderline from '../../assets/imgs/logoUnderline.svg';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, setToken } from '../../services/readOnService';
import UserContext from '../../contexts/UserContext';
import { ThreeDots } from 'react-loader-spinner';

export default function LoginPage() {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      email: '',
      password: '',
    });
  };
  const executeLogin = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const promise = login(form);
    promise
      .then((res) => {
        setIsLoading(false);
        setToken(res.data.token, user, setUser);
        setUser({ ...user,
            name: res.data.user.name,
            email: res.data.user.email,
            userId: res.data.user.userId });
        clearForm();
        navigate('/main');
      })
      .catch((res) => {
        setIsLoading(false);
        alert(res.response?.data?.message || 'Error when connecting to the database');
        clearForm();
      });
  };

  const invalidForm = form.email === '' || form.password === '';

  return (
    <>
      <LoginPageStyle>
        <div className='logo-container'>
          <h1>Read On</h1>
          <img src={logoUnderline} alt='logoUnderline' />
        </div>
        <LoginFormStyle onSubmit={executeLogin}>
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            value={form.email}
            onChange={handleForm}
          />
          <input
            type='password'
            name='password'
            placeholder='Senha'
            value={form.password}
            onChange={handleForm}
          />

          <button disabled={invalidForm || isLoading}>
            {isLoading ? <ThreeDots color={'#112d4e'} height={13} width={51} /> : <h2>Entrar</h2>}
          </button>
        </LoginFormStyle>
        <Link to='/sign-up'>
          <div className='sign-up-link'>
            <h2> Primeira vez? Cadastre-se! </h2>
          </div>
        </Link>
      </LoginPageStyle>
    </>
  );
}
