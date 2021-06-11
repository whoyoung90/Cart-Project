import React from 'react';
import DropDown from '../Components/DropDown';
import CheckBox from '../Components/CheckBox';
import CartItem from '../Components/CartItem';
import { cartLists } from '../data';
import styled from 'styled-components';
import { css } from 'styled-components';

function Cart() {
  return (
    <Wrap>
      <Title>장바구니</Title>
      <AddressWrap>주소</AddressWrap>
      <Address>서울시 강남구 도산대로 174 7층</Address>
      <DeliverWrap>배송 방법</DeliverWrap>
      <DropDown />
      <ListContainer>
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
            {cartLists.map((el, idx) => (
              <CartItem {...el} key={idx} />
            ))}
          </tbody>
        </CartTable>
        <OrderTotal>
          <p>총 상품 금액 : 0원</p>
          <p>총 상품 수량 : 0개</p>
          <p>총 배송비 : 0원</p>
          <p>총 결제하실 금액 : 0원</p>
        </OrderTotal>
        <OrderBtn>
          <button>주문하기</button>
        </OrderBtn>
      </ListContainer>
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

const ListContainer = styled.div``;

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
