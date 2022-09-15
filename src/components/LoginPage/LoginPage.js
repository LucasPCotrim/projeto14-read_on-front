import { LoginPageStyle, LoginFormStyle } from './LoginPage.style';
import logoUnderline from '../../assets/imgs/logoUnderline.svg';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/readOnService';

export default function LoginPage() {
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
    const promise = login(form);
    promise
      .then(() => {
        clearForm();
        navigate('/');
      })
      .catch((res) => {
        alert(res.response?.data?.message || 'Error when connecting to the database');
        clearForm();
      });
  };

  const disableButton = form.email === '' || form.password === '';

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

          <button disabled={disableButton}>
            <h2>Entrar</h2>
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
