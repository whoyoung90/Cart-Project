import React from 'react';
import styled from 'styled-components';

function DropDown({ deliveryTypes, deliverCost }) {
  return (
    <SelectBox onChange={deliverCost}>
      <OptionDefault value="" disabled selected hidden>
        선택해주세요.
      </OptionDefault>
      {deliveryTypes.map((el, idx) => (
        <Option key={idx} value={el.delivery_price}>
          {el.name} {el.delivery_price.toLocaleString()}원
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
