import React from 'react';
import styled from 'styled-components';

function OrderButton({ price }) {
  const Notice = () => {
    alert(`총 상품 금액은 "${price.toLocaleString()}원" 입니다.`);
  };

  return (
    <OrderBtn>
      <button onClick={Notice}>주문하기</button>
    </OrderBtn>
  );
}

export default OrderButton;

const OrderBtn = styled.div`
  margin-top: 30px;
  text-align: right;

  button {
    width: 180px;
    height: 50px;

    background: #929292;
    border: none;
    border-radius: 5px;

    font-size: 20px;
    font-weight: bold;
    color: #ffffff;
  }
`;
