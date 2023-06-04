import React from "react";
import "../styles/SignupPage.css";

export default function signupPage() {
  return (
    <>
      <div className="page">
        <div className="logo">Reminiscence</div>

        <div className="contentWrap">
          <div className="wrapper">
            <div className="inputTitle">E-mail</div>
            <div className="inputWrap">
              <input className="input" />
            </div>
            <div className="errorMessageWrap">
              올바른 이메일을 입력해주세요.
            </div>
          </div>

          <div className="wrapper">
            <div className="inputTitle">Password</div>
            <div className="inputWrap">
              <input className="input" />
            </div>
            <div className="errorMessageWrap">
              영문, 숫자, 특수문자 포함 6자 이상 입력해주세요.
            </div>
          </div>

          <div className="wrapper">
            <div className="inputTitle">Birthday</div>
            <div className="inputWrap">
              <input className="input" />
            </div>
            <div className="errorMessageWrap">생년월일 6자만 입력해주세요.</div>
          </div>
        </div>

        <div className="btnWrap">
          <button className="nextBtn">다음으로</button>
        </div>
      </div>
    </>
  );
}
