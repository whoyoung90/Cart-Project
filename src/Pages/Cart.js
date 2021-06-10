import React from 'react';
import DropDown from '../Components/DropDown';
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
      <ProductInfo>상품 내역</ProductInfo>
      <InputCheckbox /> 전체
    </Wrap>
  );
}

export default Cart;

const Wrap = styled.div``;

const Title = styled.h1`
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

const AddressWrap = styled.div`
  ${Mixin}
`;
const Address = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const DeliverWrap = styled.div`
  ${Mixin}
`;

const ProductInfo = styled.div`
  ${Mixin}
`;

const InputCheckbox = styled.input.attrs({
  type: 'checkbox',
})`
  margin: 8px;
  width: 17px;
  height: 17px;
  border-bottom: 1px solid gray;
`;
