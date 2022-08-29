import React, { useCallback, useEffect, useState } from "react";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

export default function Login(props) {
  // login, register 페이지 스위치
  const [auth, setAuth] = useState(false);

  // 아이디, 비밀번호 등
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirthDay, setUserBirthDay] = useState();
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 조건 오류 메시지
  const [userIdMessege, setUserIdMessege] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  // 유효성 검사
  const [isUserId, setIsUserId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 이메일 조건 확인
  const onChangeUserId = (e) => {
    const idRegex =
      /^[0-9a-zA-Z]([+=-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([+=-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,8}$/;
    const idCurrent = e.target.value;
    setUserId(idCurrent);
    if (!idRegex.test(idCurrent)) {
      setUserIdMessege("이메일 형식이 아닙니다.");
      setIsUserId(false);
    } else {
      setUserIdMessege("올바른 이메일 형식입니다.");
      setIsUserId(true);
    }
  };
  // 비밀번호 조건 확인
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "알파벳+숫자+특수문자 조합으로 8자리 이상 입력해주세요"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 형식입니다");
      setIsPassword(true);
    }
  }, []);
  // 비밀번호 일치 확인
  const onChangePasswordConfirm = (e) => {
    const passwordConfirmCurrent = e.target.value;
    setPasswordConfirm(passwordConfirmCurrent);
  };
  useEffect(() => {
    if (passwordConfirm.length > 0) {
      if (password === passwordConfirm) {
        setIsPasswordConfirm(true);
        setPasswordConfirmMessage("비밀번호 확인 완료");
      } else {
        setIsPasswordConfirm(false);
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
      }
    }
  }, [password, passwordConfirm]);

  // 값 가져오기
  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };
  const onChangeUserBirthDay = (e) => {
    setUserBirthDay(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  // 확인용
  const body = {
    userid: userId,
    username: userName,
    nickname: nickName,
    userbirthday: userBirthDay,
    password: password,
    passwordConfirm: passwordConfirm,
  };

  // api 연결용
  // 중복 확인
  const onDoublingHandler = (e) => {
    e.preventDefault();
    console.log(userId);
  };
  // login or register 제출
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!isUserId) {
      return alert("이메일을 확인해주세요");
    }
    if (!isPassword) {
      return alert("비밀번호를 확인해주세요");
    }
    if (!isPasswordConfirm) {
      return alert("비밀번호가 일치하지 않습니다");
    }
    if (userName.length === 0) {
      return alert("이름을 입력해주세요");
    }
    if (userBirthDay.length === 0) {
      return alert("생일을 입력해주세요");
    }
    if (nickName.length === 0) {
      return alert("닉네임을 입력해주세요");
    }
    if (passwordConfirm.length === 0) {
      return alert("비밀번호 확인을 입력해주세요");
    }

    console.log(body);
  };
  // login register 스위치
  const onChangeHandler = (e) => {
    e.preventDefault();
    auth ? setAuth(false) : setAuth(true);
  };

  return (
    <div
      style={{
        margin: "auto",
        width: "500px",
        height: "100%",
        marginTop: "2vh",
        padding: "50px",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <p>{!auth ? "로그인" : "회원가입"}페이지 입니다.</p>
      <form>
        <p>이메일</p>
        <Input
          fullWidth
          placeholder="이메일을 입력하세요"
          inputProps={ariaLabel}
          onChange={onChangeUserId}
        />
        {auth && (
          <>
            <button onClick={onDoublingHandler}>중복확인</button>
          </>
        )}
        <br />
        {auth && userId.length > 1 && isUserId ? (
          <span>{userIdMessege}</span>
        ) : (
          <span>{userIdMessege}</span>
        )}
        {auth && (
          <>
            <p>이름</p>
            <Input
              fullWidth
              type="text"
              placeholder="이름을 입력하세요"
              onChange={onChangeUserName}
            />

            <p>생년월일</p>
            <Input
              fullWidth
              type="date"
              placeholder="닉네임을 입력하세요"
              onChange={onChangeUserBirthDay}
            />

            <p>닉네임</p>
            <Input
              fullWidth
              type="text"
              placeholder="닉네임을 입력하세요"
              onChange={onChangeNickName}
            />
          </>
        )}
        <p>비밀번호</p>
        <Input
          fullWidth
          type="password"
          placeholder="비밀번호를 입력하세요"
          onChange={onChangePassword}
        />
        <br />
        {auth && password.length > 1 && isPassword ? (
          <span>{passwordMessage}</span>
        ) : (
          <span>{passwordMessage}</span>
        )}
        {auth && (
          <>
            <p>비밀번호 확인</p>
            <Input
              fullWidth
              type="password"
              placeholder="비밀번호를 한번 더 입력하세요"
              onChange={onChangePasswordConfirm}
            />
            <br />
            {passwordConfirm.length > 1 && !isPasswordConfirm ? (
              <span>{passwordConfirmMessage}</span>
            ) : (
              <span>{passwordConfirmMessage}</span>
            )}
          </>
        )}

        <p />
        <button onClick={onSubmitHandler}>
          {auth ? "회원가입" : "로그인"}
        </button>
      </form>
      <button onClick={onChangeHandler}>
        {auth ? "로그인" : "회원가입"}으로 가기
      </button>
    </div>
  );
}
