import React, { useState } from 'react';
import styled from 'styled-components';

function CheckBox() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <Label isClicked={isChecked}>
      <CheckImg isClicked={isChecked} />
      <Input defaultChecked onClick={e => setIsChecked(e.target.checked)} />
    </Label>
  );
}

export default CheckBox;

const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;

  background: ${({ isClicked }) => (isClicked ? '#e82c23' : 'gray')};
`;

const CheckImg = styled.div`
  display: ${({ isClicked }) => (isClicked ? 'block' : 'none')};
  width: 14px;
  height: 12px;
  background-image: url('/images/checkIcon.png');
`;

const Input = styled.input.attrs(() => ({ type: 'checkbox' }))`
  width: 0;
  height: 0;
  margin: 0;
`;
