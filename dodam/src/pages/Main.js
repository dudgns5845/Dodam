import React from 'react';
import styled from 'styled-components'

export default function Main(props) {
    return (
        <>
            <MainWrap>
                <Title>도담-도담</Title>
                <SubTitle>
                    <div>
                        부사
                    </div>
                    <div>어린아이가 탈 없이 잘 놀며 자라는 모양.
                    </div>
                </SubTitle>
            </MainWrap>
        </>

    );
}

const MainWrap = styled.div`
    @font-face {
    font-family: 'NotoSerifKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NotoSerifKR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
font-family: 'NotoSerifKR';
display:flex;
    flex-direction: row;
    
    background-image: url('https://i.pinimg.com/564x/bd/f1/45/bdf1454034f8f11cc6433866541558b3.jpg') ;
  
`;

const Title = styled.div`
font-size: 7em;
width: 40%;
height: 800px;
/* background-color: orange; */
text-align:center;
display:flex;
justify-content: center;
align-items:center;
`;

const SubTitle = styled.div`
font-size: 5em;
width: 60%;
height: 800px;
/* background-color: orange; */
/* text-align:center; */
display:flex;
/* justify-content: center; */
align-items:center;
`