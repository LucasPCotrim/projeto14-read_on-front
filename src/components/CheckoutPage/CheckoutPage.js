import { CheckoutPageStyle, AddressFormStyle, PaymentFormStyle } from './ChekoutPage.style';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import { checkout } from '../../services/readOnService';
import { ThreeDots } from 'react-loader-spinner';

const ESTADOS = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
  'DF',
];

function OrderSummary() {
  const { user } = useContext(UserContext);

  let numberItems;
  let orderValue;
  if (user.cart) {
    numberItems = user.cart.length;
    orderValue = user.cart.reduce((acc, product) => {
      return acc + product.price;
    }, 0);
  } else {
    numberItems = 0;
    orderValue = 0;
  }
  const orderValueString = orderValue.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  const shipping = Math.floor(Math.random() * (1500 - 400 + 1) + 400) / 100;
  const shippingString = shipping.toFixed(2).toString().toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });
  const totalValueString = (orderValue + shipping).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <>
      <div className='order-summary-container'>
        <h1>Confirme seu pedido</h1>
        <div className='divide'></div>
        <div className='order-value'>
          <h2>{`Pedido (${
            numberItems === 1 ? `1 item` : `${numberItems} itens`
          }): ${orderValueString}`}</h2>
        </div>
        <div className='shipping'>
          <h2>{`Frete: R$ ${shippingString}`}</h2>
        </div>
        <div className='divide-small'></div>
        <div className='total-value'>
          <h2>{`Total: ${totalValueString}`}</h2>
        </div>
      </div>
    </>
  );
}

function CheckoutForm() {
  const { user, setUser } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    address: '',
    number: '',
    addressComplement: '',
    district: '',
    state: '',
    city: '',
    postalCode: '',
    name: '',
    cpf: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleForm = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const clearForm = () => {
    setForm({
      address: '',
      number: '',
      addressComplement: '',
      district: '',
      state: '',
      city: '',
      postalCode: '',
      name: '',
      cpf: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    });
  };
  const executeCheckout = (event) => {
    event.preventDefault();
    console.log(form);
    const cart = user.cart || [];
    clearForm();
    const body = {
      name: user.name,
      email: user.email,
      cpf: form.cpf,
      products: [...cart],
      addressInfo: {
        address: form.address,
        number: form.number,
        complement: form.addressComplement,
        district: form.district,
        state: form.state,
        city: form.city,
        postalCode: form.postalCode,
      },
    };
    setIsLoading(true);
    const promise = checkout(body);
    promise
      .then(() => {
        clearForm();
        setUser({ ...user, cart: [] });
        setIsLoading(false);
        alert('Compra realizada com sucesso!');
        navigate('/main');
      })
      .catch((res) => {
        setIsLoading(false);
        alert(res.response?.data?.message || 'Error when connecting to the database');
        clearForm();
      });
  };

  const invalidForm =
    form.address === '' ||
    form.number === '' ||
    form.district === '' ||
    form.state === 'Estado' ||
    form.state === '' ||
    form.city === '' ||
    form.postalCode === '' ||
    form.name === '' ||
    form.cpf === '' ||
    form.cardNumber === '' ||
    form.expirationDate === '' ||
    form.cvv === '';

  return (
    <form onSubmit={executeCheckout}>
      <AddressFormStyle>
        <h1>Dados de Entrega</h1>
        <div className='address-street'>
          <input
            type='text'
            name='address'
            placeholder='Endereço'
            value={form.address}
            onChange={handleForm}
          />
          <input
            type='number'
            name='number'
            placeholder='Número'
            value={form.number}
            onChange={handleForm}
          />
          <input
            type='text'
            name='addressComplement'
            placeholder='Complemento'
            value={form.addressComplement}
            onChange={handleForm}
          />
        </div>
        <div className='address-city'>
          <input
            type='text'
            name='district'
            placeholder='Bairro'
            value={form.district}
            onChange={handleForm}
          />
          <select name='state' value={form.state} onChange={handleForm}>
            <option value='Estado'>Estado</option>
            {ESTADOS.map((estado, index) => {
              return (
                <option value={estado} key={index}>
                  {estado}
                </option>
              );
            })}
          </select>
          <input
            type='text'
            name='city'
            placeholder='Cidade'
            value={form.city}
            onChange={handleForm}
          />
          <input
            type='number'
            name='postalCode'
            placeholder='Código Postal'
            value={form.postalCode}
            onChange={handleForm}
          />
        </div>
      </AddressFormStyle>
      <PaymentFormStyle>
        <h1>Dados de Pagamento</h1>
        <div className='customer-info'>
          <input
            type='text'
            name='name'
            placeholder='Nome'
            value={form.name}
            onChange={handleForm}
          />
          <input
            type='number'
            name='cpf'
            placeholder='CPF/CNPJ'
            value={form.cpf}
            onChange={handleForm}
          />
        </div>
        <div className='card-info'>
          <input
            type='number'
            name='cardNumber'
            placeholder='Número do Cartão'
            value={form.cardNumber}
            onChange={handleForm}
          />
          <input
            type='month'
            name='expirationDate'
            placeholder='Data de Validade'
            value={form.expirationDate}
            onChange={handleForm}
          />
          <input
            type='number'
            name='cvv'
            placeholder='Código de Verificação'
            value={form.cvv}
            onChange={handleForm}
          />
        </div>
      </PaymentFormStyle>
      <button disabled={invalidForm || isLoading}>
        {isLoading ? (
          <ThreeDots color={'#112d4e'} height={13} width={51} />
        ) : (
          <h2>Finalizar Compra</h2>
        )}
      </button>
    </form>
  );
}

export default function CheckoutPage() {
  return (
    <>
      <CheckoutPageStyle>
        <OrderSummary />
        <CheckoutForm />
      </CheckoutPageStyle>
    </>
  );
}
