import { TopMenuStyle } from './TopMenu.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function TopMenu() {
  return (
    <>
      <TopMenuStyle>
        <div className='logo-container'>
          <h1>Read On</h1>
        </div>
        <input className='searchbar' type='text' placeholder='Pesquisar' />
        <div className='icons-container'>
          <div className='user-profile-container'>
            <FontAwesomeIcon id='icon' icon={faUser} />
          </div>
          <div className='shopping-cart-container'>
            <FontAwesomeIcon id='icon' icon={faShoppingCart} />
          </div>
        </div>
      </TopMenuStyle>
    </>
  );
}
