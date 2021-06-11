import React from 'react';
import CheckBox from './CheckBox';
import styled from 'styled-components';
import { css } from 'styled-components';

function CartItem({
  isChecked,
  id,
  image_url,
  product_name,
  product_price,
  current_count,
  stock,
}) {
  return (
    <Item>
      <CheckColumn>
        <CheckBox isClicked={isChecked} />
      </CheckColumn>
      <ImgColumn>
        <img src={image_url} />
      </ImgColumn>
      <NameColumn>
        <p>{product_name}</p>
      </NameColumn>
      <CountColumn>
        <p>{current_count}</p>
      </CountColumn>
      <PriceColumn>
        <p>{product_price}원</p>
      </PriceColumn>
      <DeleteColumn>
        <img src={'/images/deleteIcon.png'} />
      </DeleteColumn>
    </Item>
  );
}

export default CartItem;

const Item = styled.tr`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  td {
    text-align: center;
    vertical-align: middle;

    &:first-of-type {
      padding-left: 50px;
    }
  }
`;

const CheckColumn = styled.td`
  width: 15%;
`;

const ImgColumn = styled.td`
  width: 15%;

  img {
    width: 60px;
    height: 60px;

    object-fit: fill;
    border-radius: 50%;
  }
`;

const UseMixin = css`
  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const NameColumn = styled.td`
  width: 20%;
  ${UseMixin}
`;

const CountColumn = styled.td`
  width: 15%;
  ${UseMixin}
`;

const PriceColumn = styled.td`
  width: 15%;
  ${UseMixin}
`;

const DeleteColumn = styled.td`
  width: 15%;
`;
