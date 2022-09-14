import { SignUpPageStyle, SignUpFormStyle } from './SignUpPage.style';
import logoUnderline from '../../assets/imgs/logoUnderline.svg';

export default function SignUpPage() {
  return (
    <>
      <SignUpPageStyle>
        <div className='logo-container'>
          <h1>Read On</h1>
          <img src={logoUnderline} alt='logoUnderline' />
        </div>
        <SignUpFormStyle>
          <input type='text' name='name' placeholder='Nome' />
          <input type='email' name='email' placeholder='E-mail' />
          <input type='password' name='password' placeholder='Senha' />
          <input type='password' name='passwordConfirm' placeholder='Confirme a senha' />
          <div className='categories-container'>
            <h1>Selecione os seus gêneros de livros preferidos</h1>
            <div className='categories'>
              <label>
                <input type='checkbox' />
                <span>Fantasia</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Ficção Científica</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Ação e Aventura</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Romance</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Suspense</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Infantil</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Biografia</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>História</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Religião</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Guias</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Arte e Fotografia</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Tecnologia e Ciência</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Gastronomia</span>
              </label>
              <label>
                <input type='checkbox' />
                <span>Graphic Novel</span>
              </label>
            </div>
          </div>

          <button>
            <h2>Cadastrar</h2>
          </button>
        </SignUpFormStyle>
      </SignUpPageStyle>
    </>
  );
}
