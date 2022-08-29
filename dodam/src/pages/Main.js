
import React from 'react';
import styled from 'styled-components'
import { Fab } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
export default function Main(props) {
    return (
        <>
            <Fab variant="extended" sx={{ position: 'fixed', bottom: 20, right: 40 }} onClick={() => { window.scrollTo(0, 0); }}>
                <KeyboardDoubleArrowUpIcon sx={{ mr: 1 }} />
                맨 위로
            </Fab>
            <MainWrap>
                <Title>도담-도담</Title>
                <SubTitle>
                    <div>
                        [부사]
                    </div>
                    <div>어린아이가 탈 없이 잘 놀며 자라는 모양
                    </div>
                </SubTitle>
            </MainWrap>
            <NextSlice>
                <Title style={{ color: 'black' }}>
                    “<br />
                    어른의<br />
                    노력으로<br />
                    아이들을<br />
                    건강하게<br />
                    “
                </Title>
            </NextSlice>
            <ThridSlice>
                <div>
                    도담
                </div>
                <LogoImg src='/dodamLogo.png' />
            </ThridSlice>
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
    background-image: url('https://cdn.pixabay.com/photo/2022/06/12/22/48/futuristic-7258997_960_720.png');
    background-size: cover;
    background-position: center;
    height: 100vh;
`;

const Title = styled.div`
font-size: 7em;
min-width:45vw;
height: 100vh;
/* background-color: orange; */
text-align:center;
display:flex;
justify-content: center;
align-items:center;
color: white;
text-shadow : 3px 3px 6px gray;
`;

const SubTitle = styled.div`
font-size: 2.5em;
min-width: 55vw;
height: 100vh;
/* background-color: orange; */
/* text-align:center; */
display:flex;
justify-content: center;
flex-direction:column;
/* align-items:center; */
color:#464646;
text-shadow : 3px 3px 6px gray;
`

const NextSlice = styled.div`
 @font-face {
    font-family: 'NotoSerifKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NotoSerifKR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    font-family: 'NotoSerifKR';
    display:flex;
    flex-direction: row;
    justify-content:center;
    text-align: center;
    /* background-image: url('https://cdn.pixabay.com/photo/2022/06/12/22/48/futuristic-7258997_960_720.png');
    background-size: cover;
    background-position: center; */
    height: 100vh;
    padding: 50px;

`;

const ThridSlice = styled.div`
@font-face {
    font-family: 'NotoSerifKR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NotoSerifKR.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
    font-family: 'NotoSerifKR';
    background-color:#B3AC87;
    display:flex;
    flex-direction: column;
align-items: center ;
    /* justify-content:center; */
    text-align: center;
    height:80vh;
    padding:10vh;

    div{
        height: 35vh;
        font-size: 7em;
        text-align:center;
        display:flex;
        justify-content: center;
        align-items:center;
        color: black;
        text-shadow : 3px 3px 6px gray;

    }
`;

const LogoImg = styled.img`
    width: 20vw;
    height: 20vw;
    background-color: whitesmoke;
    border-radius: 20px;
`
