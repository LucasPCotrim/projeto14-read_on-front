import { TopMenuStyle, IconsContainerStyle } from './TopMenu.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../../contexts/UserContext';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CartMenu({ setCartPopUpMenu }) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const cartProducts = user.cart || [];

  return (
    <div className='cart-menu'>
      <div className='background-shadow' onClick={() => setCartPopUpMenu(false)}></div>
      <div className='cart-menu-container'>
        <FontAwesomeIcon id='icon' icon={faXmark} onClick={() => setCartPopUpMenu(false)} />
        <div className='cart-summary'>
          {cartProducts.map((product) => {
            return (
              <div className='product'>
                <img src={product.img} alt='product' />
                <div className='product-name'>Nome do produto</div>
                <div className='product-value'>R$ 35,99</div>
              </div>
            );
          })}
        </div>
        <div className='buttons-container'>
          <button onClick={() => navigate('/cart')}>
            <h2>Visualizar Carrinho</h2>
          </button>
          <button onClick={() => navigate('/checkout')}>
            <h2>Finalizar Compra</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

function IconsContainer() {
  const { user } = useContext(UserContext);
  const [cartPopUpMenu, setCartPopUpMenu] = useState(false);
  const [userPopUpMenu, setUserPopUpMenu] = useState(false);
  const cartCount = user.cart ? user.cart.length : 0;

  return (
    <IconsContainerStyle>
      <div className='user-profile-container'>
        <FontAwesomeIcon id='icon' icon={faUser} onClick={() => setUserPopUpMenu(!userPopUpMenu)} />
      </div>
      <div className='shopping-cart-container'>
        <FontAwesomeIcon
          id='icon'
          icon={faShoppingCart}
          onClick={() => setCartPopUpMenu(!cartPopUpMenu)}
        />
        {cartCount > 0 ? <div className='cart-count'>{cartCount}</div> : <></>}
      </div>
      {cartPopUpMenu ? <CartMenu setCartPopUpMenu={setCartPopUpMenu} /> : <></>}
    </IconsContainerStyle>
  );
}

export default function TopMenu() {
  const navigate = useNavigate();
  return (
    <>
      <TopMenuStyle>
        <div className='logo-container' onClick={() => navigate('/')}>
          <h1>Read On</h1>
        </div>
        <input className='searchbar' type='text' placeholder='Pesquisar' />
        <IconsContainer />
      </TopMenuStyle>
    </>
  );
}
