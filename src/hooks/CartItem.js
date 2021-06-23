import React, { useState } from 'react';
import CheckBox from './CheckBox';
import Counter from '../Components/Counter';
import styled from 'styled-components';
import { css } from 'styled-components';

function CartItem({
  isChecked,
  image_url,
  product_name,
  current_count,
  product_price,
  stock,
  filterItem,
  idx,
  PlusAmount,
  MinusAmount,
  PlusPrice,
  MinusPrice,
}) {
  const [count, setCount] = useState(current_count);

  const MinusHandle = () => {
    setCount(count <= 1 ? 1 : count - 1);
    {
      count <= 1 || MinusAmount();
    }
    {
      count <= 1 || MinusPrice(product_price);
    }
  };

  const PlusHandle = () => {
    setCount(count >= stock ? stock : count + 1);
    {
      count >= stock || PlusAmount();
    }
    {
      count >= stock || PlusPrice(product_price);
    }
  };

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
        <p>{count}</p>
        <Counter PlusHandle={PlusHandle} MinusHandle={MinusHandle} />
      </CountColumn>
      <PriceColumn>
        <p>{product_price.toLocaleString()}원</p>
      </PriceColumn>
      <DeleteColumn>
        <img src={'/images/deleteIcon.png'} onClick={() => filterItem(idx)} />
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
  position: relative;
  width: 15%;
  ${UseMixin}

  p {
    position: relative;
    top: 10px;
  }
`;

const PriceColumn = styled.td`
  width: 15%;
  ${UseMixin}
`;

const DeleteColumn = styled.td`
  width: 15%;

  img:hover {
    cursor: pointer;
  }
`;
