import React,{ useCallback, useState } from 'react';

export default function Login(props) {
    // login, register 페이지 스위치
    const [auth, setAuth] = useState(false);

    // 아이디, 비밀번호 등
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState();
    const [userBirthDay, setUserBirthDay] = useState();
    const [nickName, setNickName] = useState();
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState();

    // 조건 오류 메시지
    const [userIdMessege, setUserIdMessege] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')

    // 유효성 검사
    const [isUserId, setIsUserId] = useState(false)
    const [isPassword, setIsPassword] = useState(false)

    // 조건 확인
    const onChangeUserId = (e) => {
        const idRegex = /^[0-9a-zA-Z]([+=-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([+=-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,8}$/;
        const idCurrent = e.target.value
        setUserId(idCurrent)
        if ( !idRegex.test(idCurrent) ) {
            setUserIdMessege('이메일 형식이 아닙니다.')
            setIsUserId(false)
        } else {
            setUserIdMessege('올바른 이메일 형식입니다.')
            setIsUserId(true)
        }
    };
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
        if ( !passwordRegex.test(passwordCurrent) ) {
            setPasswordMessage('알파벳+숫자+특수문자 조합으로 8자리 이상 입력해주세요')
            setIsPassword(false)
        } else {
            setPasswordMessage('안전한 비밀번호 형식입니다')
            setIsPassword(true)
        }
    }, [])
        

    const onChangeUserName = (e) => {setUserName(e.target.value)};
    const onChangeUserBirthDay = (e) => {
        setUserBirthDay(e.target.value)};
    const onChangeNickName = (e) => {
        setNickName(e.target.value)};
    
    const onChangePasswordConfirm = (e) => {
        setPasswordConfirm(e.target.value)};

    const body = {
        userid: userId,
        username: userName,
        nickname: nickName,
        userbirthday: userBirthDay,
        password: password,
        passwordConfirm: passwordConfirm,

    }
    
    console.log(body)
    const onClickHandler = (e) => {
        e.preventDefault()
        auth ? setAuth(false) : setAuth(true)
    }



    
    return (
        <>
            <p>{!auth ? '로그인' : '회원가입'}페이지 입니다.</p>
            <form>
            <p>이메일</p>
            <input type='text' placeholder='이메일을 입력하세요' onChange={onChangeUserId}/>
            {auth && userId.length > 0 && isUserId ? 
            <span>{userIdMessege}</span>
            :
            <span>{userIdMessege}</span>
            }
            {auth &&(
                <>
                <p>이름</p>
                <input type='text' placeholder='이름을 입력하세요' onChange={onChangeUserName} />
                </>
            )}
            {auth &&(
                <>
                <p>생년월일</p>
                <input type='date' placeholder='닉네임을 입력하세요' onChange={onChangeUserBirthDay} />
                </>
            )}
            {auth &&(
                <>
                <p>닉네임</p>
                <input type='text' placeholder='닉네임을 입력하세요' onChange={onChangeNickName} />
                </>
            )}
            <p>비밀번호</p>
            <input type='password' placeholder='비밀번호를 입력하세요' onChange={onChangePassword}/>
            <p />
            {auth && password.length > 0 && isPassword ?
            <span>{passwordMessage}</span>
            :
            <span>{passwordMessage}</span>
            }
            {auth &&(
                <>
                <p>비밀번호 확인</p>
                <input type='password' placeholder='비밀번호를 한번 더 입력하세요' onChange={onChangePasswordConfirm} />
                <p />
                </>
            )}
            
            <button>{!auth ? '로그인' : '회원가입'}</button>
            </form>
            <button onClick={onClickHandler}>{auth ? '로그인' : '회원가입'}으로 가기</button>

        </>
        
    );
}