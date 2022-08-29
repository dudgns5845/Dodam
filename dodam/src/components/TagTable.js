import Reactc from "react";
import styled from "styled-components";

const tagList = ['스터디', '돈까스', '안경', '인형', '낙지볶음', '양곱창', '청소년 봉사', '언어 나눔', '이발 봉사', '문화 탐방'];
export default function TagTable() {
    return (
        <MainWrap>
            <ListWrap>
                <h3 >Tag List</h3>
                {tagList.sort().map((tag) => {
                    return (<Tag>{tag}</Tag>)
                })}
            </ListWrap>
        </MainWrap>
    );
}

const MainWrap = styled.div`
width: 300px;
padding : 60px 20px;
`;

const ListWrap = styled.div`
border: 1px solid gray;
border-radius: 20px;
height: 100vh;
padding : 20px;
.button {
padding : 20px;
}

`;

const Tag = styled.button`
background-color: 	#D2B48C;
border:none;
border-radius: 20px;
padding: 5px 20px;
margin-right: 20px;
margin-bottom: 10px;

`;