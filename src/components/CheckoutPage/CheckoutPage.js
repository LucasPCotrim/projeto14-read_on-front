import { CheckoutPageStyle, FormStyle } from './ChekoutPage.style';

export default function CheckoutPage() {
  return (
    <>
      <CheckoutPageStyle>
        <div className='order-summary-container'>
          <h1>Confirme seu pedido</h1>
          <div className='divide'></div>
        </div>
        <FormStyle>
          <h1>Dados de Entrega</h1>
          <input type='text' name='address' placeholder='Endereço' />
          <input type='number' name='Number' placeholder='Número' />
          <input type='text' name='address-complement' placeholder='Complemento' />
          <input type='text' name='district' placeholder='Bairro' />
          <input type='text' name='state' placeholder='Estado' />
          <input type='text' name='city' placeholder='Cidade' />
          <input type='number' name='postal-code' placeholder='Código Postal' />
          <h1>Dados de Pagamento</h1>
          <input type='text' name='name' placeholder='Nome' />
          <input type='number' name='CPF' placeholder='CPF/CNPJ' />
          <input type='number' name='card-number' placeholder='Número do Cartão' />
          <input type='text' name='expiration-date' placeholder='Data de Validade' />
          <input type='number' name='cvv' placeholder='Código de Verificação' />
        </FormStyle>
      </CheckoutPageStyle>
    </>
  );
}
