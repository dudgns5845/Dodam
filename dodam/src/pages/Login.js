import React, { useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Snackbar from '@mui/material/Snackbar';



const ariaLabel = { 'aria-label': 'description' };

export default function Login(props) {
    // login, register 페이지 스위치
    const [auth, setAuth] = useState(false);

    // 아이디, 비밀번호 등
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [userBirthDay, setUserBirthDay] = useState();
    const [nickName, setNickName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // 조건 오류 메시지
    const [userIdMessege, setUserIdMessege] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('')

    const [errorMessage, setErrorMessage] = useState('')

    // 유효성 검사
    const [isUserId, setIsUserId] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)

    // MUI snackbar
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
      });
    
      const { vertical, horizontal, open } = state;
    
      const handleClick = (newState) => () => {
        setState({ open: true, ...newState });
      };
    
      const handleClose = () => {
        setState({ ...state, open: false });
    };

    const onSubmitHandler = (e) => {
        if (!isUserId) { return setErrorMessage('이메일을 확인해주세요') }
        if (userName.length === 0) { return setErrorMessage('이름을 입력해주세요') }
        if (!isPassword) { return setErrorMessage('비밀번호를 확인해주세요') }
        if (!isPasswordConfirm) { return setErrorMessage('비밀번호가 일치하지 않습니다')}
        if (userBirthDay.length === 0) { return setErrorMessage('생일을 입력해주세요') }
        if (nickName.length === 0) { return setErrorMessage('닉네임을 입력해주세요') }
        if (passwordConfirm.length === 0) { return setErrorMessage('비밀번호 확인을 입력해주세요') }
        e.preventDefault()
        console.log(body)
    };
    
    const buttons = (
        <React.Fragment>
            <Button
            variant="contained"
            onClick={onSubmitHandler({
              vertical: 'top',
              horizontal: 'center',
            })}
            >{auth ? '회원가입' : '로그인'}
            </Button>
        </React.Fragment>
    )

    // 이메일 조건 확인
    const onChangeUserId = (e) => {
        const idRegex = /^[0-9a-zA-Z]([+=-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([+=-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,15}$/;
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
    // 비밀번호 조건 확인
    const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        const passwordCurrent = e.target.value
        setPassword(passwordCurrent)
        if ( !passwordRegex.test(passwordCurrent) ) {
            setPasswordMessage('알파벳+숫자+특수문자 조합으로 8자리 이상 15자리 이하로 입력해주세요')
            setIsPassword(false)
        } else {
            setPasswordMessage('안전한 비밀번호 형식입니다')
            setIsPassword(true)
        }
    }, [])
    // 비밀번호 일치 확인
    const onChangePasswordConfirm = (e) => {
        const passwordConfirmCurrent = e.target.value
        setPasswordConfirm(passwordConfirmCurrent)    
    } 
    useEffect(() => {
        if( passwordConfirm.length > 0 ){
            if( password === passwordConfirm ){
                setIsPasswordConfirm(true)
                setPasswordConfirmMessage('비밀번호 확인 완료')
            } else {
                setIsPasswordConfirm(false)
                setPasswordConfirmMessage('비밀번호가 일치하지 않습니다')
            }
        }
    }, [password, passwordConfirm]);
    
    // 값 가져오기
    const onChangeUserName = (e) => {setUserName(e.target.value)};
    const onChangeUserBirthDay = (e) => {setUserBirthDay(e.target.value)};
    const onChangeNickName = (e) => {setNickName(e.target.value)};
    
    
    // 확인용
    const body = {
        userid: userId,
        username: userName,
        nickname: nickName,
        userbirthday: userBirthDay,
        password: password,
        passwordConfirm: passwordConfirm,

    }
    
    // api 연결용
    
    // 중복 확인
    const onDoublingHandler = (e) => {
        e.preventDefault()
        console.log(userId)
    };

    // login or register 제출
    

    // login register 스위치
    const onChangeHandler = (e) => {
        e.preventDefault()
        auth ? setAuth(false) : setAuth(true)
    };



    
    return (
        <div style={{margin: "auto", width:"500px", height:"100%", marginTop:"2vh", padding:"50px", boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px"}}>
            <h2>{!auth ? '로그인' : '회원가입'}</h2>
            <form>
            <p>이메일</p>
            <Input fullWidth placeholder='이메일을 입력하세요' inputProps={ariaLabel} onChange={onChangeUserId}/>
            {auth && 
                <>
                    <p style={{marginTop:"-10px"}}/>
                    <Button variant="outlined" onClick={onDoublingHandler}>중복확인</Button>
                </>
            }
            <br />
            {auth && userId.length > 1 && isUserId ? 
            <span>{userIdMessege}</span>
            :
            <span>{userIdMessege}</span>
            }
            {auth &&(
                <>
                <p>이름</p>
                <Input fullWidth type='text' placeholder='이름을 입력하세요' onChange={onChangeUserName} />
               
                <p>생년월일</p>
                <Input fullWidth type='date' placeholder='닉네임을 입력하세요' onChange={onChangeUserBirthDay} />
                
                <p>닉네임</p>
                <Input fullWidth type='text' placeholder='닉네임을 입력하세요' onChange={onChangeNickName} />
                </>
            )}
            <p>비밀번호</p>
            <Input fullWidth type='password' placeholder='비밀번호를 입력하세요' onChange={onChangePassword}/>
            <br />
            {auth && password.length > 1 && isPassword ?
            <span>{passwordMessage}</span>
            :
            <span>{passwordMessage}</span>
            }
            {auth &&  (
                <>
                <p>비밀번호 확인</p>
                <Input fullWidth type='password' placeholder='비밀번호를 한번 더 입력하세요' onChange={onChangePasswordConfirm} /><br />
                {passwordConfirm.length > 1 && !isPasswordConfirm ? <span>{passwordConfirmMessage}</span>:<span>{passwordConfirmMessage}</span>}
                </>
                )}
                
                <p />
                <div>
                    {buttons}
                    <Snackbar
                        onClick={handleClick}
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        message={errorMessage}
                        key={vertical + horizontal}
                        >
                    </Snackbar>
                </div>
                
            </form>
            <Button variant="text" onClick={onChangeHandler}>{auth ? '로그인' : '회원가입' }으로 가기</Button>
            
        </div>
        
    );
}