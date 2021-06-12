import React from 'react';
import styled from 'styled-components';

function Counter({ MinusHandle, PlusHandle }) {
  return (
    <>
      <PlusBtn>
        <img src="/images/plus.png" onClick={PlusHandle} />
      </PlusBtn>
      <MinusBtn>
        <img src="/images/minus.png" onClick={MinusHandle} />
      </MinusBtn>
    </>
  );
}

export default Counter;

const PlusBtn = styled.button`
  position: relative;
  bottom: 6px;
  left: 35px;
  border: none;
  background: #ffffff;
  img {
    width: 15px;
  }
`;

const MinusBtn = styled.button`
  position: relative;
  bottom: 6px;
  right: 35px;
  border: none;
  background: #ffffff;

  img {
    width: 15px;
  }
`;
