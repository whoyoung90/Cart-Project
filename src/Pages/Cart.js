import React, { useState, useEffect } from 'react';
import DropDown from '../Components/DropDown';
import CheckBox from '../hooks/CheckBox';
import CartItem from '../hooks/CartItem';
import OrderButton from '../Components/OrderButton';
import styled from 'styled-components';
import { css } from 'styled-components';

function Cart({ flowers, deliveryTypes, filterItem }) {
  const [delivery, setDelivery] = useState(0);

  const [amount, setAmount] = useState(
    flowers.reduce((acc, cur) => {
      return (acc += cur.current_count);
    }, 0)
  );

  const [price, setPrice] = useState(
    flowers.reduce((acc, cur) => {
      return (acc += cur.product_price * cur.current_count);
    }, 0)
  );

  const deliverCost = el => {
    setDelivery(Number(el.target.value));
  };

  const PlusAmount = e => {
    setAmount(amount + 1);
  };

  const MinusAmount = e => {
    setAmount(amount - 1);
  };

  const PlusPrice = e => {
    setPrice(price + e);
  };

  const MinusPrice = e => {
    setPrice(price - e);
  };

  return (
    <Wrap>
      <Title>장바구니</Title>
      <AddressWrap>주소</AddressWrap>
      <Address>경기도 성남시 중원구 도촌남로 134</Address>
      <DeliverWrap>배송 방법</DeliverWrap>
      <DropDown deliveryTypes={deliveryTypes} deliverCost={deliverCost} />
      <div>
        <ProductInfo>상품 내역</ProductInfo>
        <CartTable>
          <tbody>
            <CartHeader>
              <td>
                <div>
                  <CheckBox />
                  <p>전체</p>
                </div>
              </td>
              <td>
                <span>이미지</span>
              </td>
              <td>
                <span>상품정보</span>
              </td>
              <td>
                <span>수량</span>
              </td>
              <td>
                <span>상품금액</span>
              </td>
            </CartHeader>
            {flowers.map((e, i) => (
              <CartItem
                {...e}
                key={e.id}
                idx={i}
                filterItem={filterItem}
                PlusAmount={PlusAmount}
                MinusAmount={MinusAmount}
                PlusPrice={PlusPrice}
                MinusPrice={MinusPrice}
              />
            ))}
          </tbody>
        </CartTable>
        <OrderTotal>
          <p>총 상품 금액 :{price.toLocaleString()}원</p>
          <p>총 상품 수량 :{amount}개</p>
          <p>총 배송비 : {delivery.toLocaleString()}원</p>
          <p>총 결제하실 금액 :{(price + delivery).toLocaleString()}원</p>
        </OrderTotal>
        <OrderButton price={price} />
      </div>
    </Wrap>
  );
}

export default Cart;

const Wrap = styled.div`
  width: 1096px;
  margin: 0 auto;
`;

const Title = styled.h1`
  padding-top: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid gray;
  color: black;
  font-size: 50px;
  font-weight: bold;
`;

const Mixin = css`
  margin-top: 20px;
  color: black;
  font-size: 30px;
  font-weight: bold;
`;

const AddressWrap = styled.p`
  ${Mixin}
`;
const Address = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const DeliverWrap = styled.p`
  ${Mixin}
`;

const ProductInfo = styled.p`
  ${Mixin}
`;

const CartTable = styled.table`
  margin-top: 20px;
  width: 100%;
  border: 1px solid #000000;
  border-radius: 3px;
`;

const CartHeader = styled.tr`
  height: 72px;
  border-bottom: 1px solid #000000;
  background: #fffef8;

  td {
    vertical-align: middle;
    text-align: center;

    &:first-of-type {
      padding-left: 50px;

      div {
        display: flex;
        align-items: center;

        p {
          padding-left: 10px;
        }
      }
    }
  }
`;

const OrderTotal = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 1096px;
  height: 60px;
  margin-top: 30px;
  border: 1px solid gray;
  border-radius: 3px;

  background: #fffef8;

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;
