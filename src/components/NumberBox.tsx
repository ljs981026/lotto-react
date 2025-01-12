import styled from "@emotion/styled";
import { useState } from "react";

const StyledNumberBox = styled.select<{
  num: number;
}>`
  width: 48px;
  height: 48px;
  border: #48AEFF solid 1px;
  font-size: 14px;
  color: #48AEFF;

  appearance: none;
  padding-left: ${(props) => props.num >= 10 ? 16 : 20}px;
  &:disabled {
    opacity: 1
  }
`;

const NumberBox = (
  {num, setNum} : {
    num?: number;
    setNum?: (num: number) => void;
  }
) => {  
  return <StyledNumberBox num={num ?? 0} value={num ?? "+" } 
    disabled={!setNum}
    onChange={(event) => {
      if(setNum) {
        console.log(num, setNum, event.target)        
        setNum(parseInt(event.currentTarget.value))
      }
    }}>
    {
      !num ? <option>+</option> :
      Array(45).fill(0).map((value, idx) => 
      <option value={idx + 1}>
        {idx + 1}
      </option>                 
      )
    }    
  </StyledNumberBox>
}

export default NumberBox;

