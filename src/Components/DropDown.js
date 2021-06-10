import React from 'react';
import { deliveryTypes } from '../data';
import styled from 'styled-components';

function DropDown() {
  return (
    <SelectBox>
      <OptionDefault>선택해주세요.</OptionDefault>
      {deliveryTypes.map((el, idx) => (
        <Option key={idx} value={el.id}>
          {el.name} {el.delivery_price}원
        </Option>
      ))}
    </SelectBox>
  );
}

export default DropDown;

const SelectBox = styled.select`
  margin-top: 20px;
  width: 330px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
`;

const OptionDefault = styled.option`
  font-size: 18px;
  font-weight: bold;
`;
const Option = styled.option`
  font-weight: bold;
`;
