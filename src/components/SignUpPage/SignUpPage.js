import { SignUpPageStyle, SignUpFormStyle } from './SignUpPage.style';
import logoUnderline from '../../assets/imgs/logoUnderline.svg';
import { useState } from 'react';

const GENRES = [
  'Fantasia',
  'Ficcção Cinetífica',
  'Ação e Aventura',
  'Romance',
  'Suspense',
  'Infantil',
  'Biografia',
  'História',
  'Religião',
  'Guias',
  'Arte e Fotografia',
  'Tecnologia e Ciência',
  'Gastronomia',
  'HQs',
];

export default function SignUpPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    favGenres: [],
  });
  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleCheckboxChange = (event, index) => {
    let checked = event.target.checked;
    const genres = [...form.favGenres];
    let genresNew;
    if (checked) {
      genresNew = genres.includes(GENRES[index]) ? [...genres] : [...genres, GENRES[index]];
    } else {
      genresNew = genres.filter((e) => e !== GENRES[index]);
    }
    setForm({ ...form, favGenres: genresNew });
  };
  const clearForm = () => {
    setForm({
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
      favGenres: [],
    });
  };
  const executeSignUp = (event) => {
    event.preventDefault();
    console.log(form);
    clearForm();
  };
  const disableButton =
    form.name === '' ||
    form.email === '' ||
    form.password === '' ||
    form.passwordConfirm === '' ||
    form.password !== form.passwordConfirm;
  return (
    <>
      <SignUpPageStyle>
        <div className='logo-container'>
          <h1>Read On</h1>
          <img src={logoUnderline} alt='logoUnderline' />
        </div>
        <SignUpFormStyle onSubmit={executeSignUp}>
          <input
            type='text'
            name='name'
            placeholder='Nome'
            value={form.name}
            onChange={handleForm}
          />
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
          <input
            type='password'
            name='passwordConfirm'
            placeholder='Confirme a senha'
            value={form.passwordConfirm}
            onChange={handleForm}
          />
          <div className='categories-container'>
            <h1>Selecione os seus gêneros de livros preferidos</h1>
            <div className='categories'>
              {GENRES.map((genre, index) => {
                return (
                  <label key={index}>
                    <input
                      type='checkbox'
                      onChange={(event) => handleCheckboxChange(event, index)}
                      checked={form.favGenres.includes(GENRES[index])}
                    />
                    <span>{genre}</span>
                  </label>
                );
              })}
            </div>
          </div>

          <button disabled={disableButton}>
            <h2>Cadastrar</h2>
          </button>
        </SignUpFormStyle>
      </SignUpPageStyle>
    </>
  );
}
