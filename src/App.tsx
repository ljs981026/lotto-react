import React, { useState } from 'react';
import logo from './logo.svg';
import Title from './components/Title';
import NumberBox from './components/NumberBox';
import styled from '@emotion/styled';
import Button from './components/Button';

const NumberBoxContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

function getRank(resNum:[number, number, number, number, number, number, number] , 
  num:[number, number, number, number, number, number])

function App() {
  const [num, setNum] = useState<
    [number, number, number, number, number, number, number]
  >([1,2,3,4,5,6,7]);

  const [randNum, setRandNum] = useState<
  [number, number, number, number, number, number] | null>(null);

  return (
    <div className="App">
      <Title>
        정답 번호
      </Title>
      <NumberBoxContainer>
        {
          Array(8).fill(1).map((_, idx) => {
            if(idx === 6) {
              return <NumberBox />
            }
            if (idx === 7) {
              idx = 6;
            }
            return <NumberBox num={num[idx]} setNum={(value) => { 
              if(num.includes(value)) {
                return;
              }
              setNum(prev => {                
                prev[idx] = value
                return [...prev];
              })
            }}/>
          })
        }
      </NumberBoxContainer>
      <div style={{height: "120px"}} />              
      <Button onClick={() => {
        const li:number[] = [];
        while(li.length < 6) {
          const v = Math.floor((Math.random() * 45) +1);
          if(li.includes(v)) 
            continue;
          li.push(v);
        }
        li.length = 6;
        setRandNum(li as [number, number, number, number, number, number])
      }}>랜덤 번호 추첨</Button>
      {
        randNum && 
        <>
          <div style={{height: "24px"}} />        
          <Title>
            번호 추첨 결과
          </Title>
          <NumberBoxContainer>
            {
              Array(6).fill(1).map((_, idx) => <NumberBox num={randNum[idx]} />)              
            }
          </NumberBoxContainer>        
        </>
      }
      <div style={{height: "24px"}} />
      <Title>
        N등 입니다!
      </Title>
    </div>  
  );
}

export default App;
