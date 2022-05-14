import firebase from "firebase/compat/app";
import React, { useEffect, useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import image from "../../assets/Icon-Facebook/image1.png";

LoginFB.propTypes = {};

function LoginFB(props) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      /* firebase.auth.GoogleAuthProvider.PROVIDER_ID, */
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };

  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        setIsSignedIn(!!user);
      });
    return () => unregisterAuthObserver();
  }, []);

  if (isSignedIn) {
    window.location.href = "/quan-ly-quang-cao/creat-account";
  }

  return (
    <div className="intro">
      <img src={image} alt="" />
      <div className="form-login">
        <h2>Đăng nhập Facebook</h2>
        <p>Bạn cần đăng nhập vào tài khoản Facebook để thiết lập quảng cáo</p>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
        <p>
          Chưa có tài khoản Facebook?{" "}
          <a href="https://www.facebook.com/signup">Đăng ký ngay</a>
        </p>
      </div>
    </div>
  );
}

export default LoginFB;
