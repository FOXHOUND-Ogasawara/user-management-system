import React from "react";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {

  const onSuccess = () => {
    // ユーザー一覧画面へ遷移
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onError = (error: any) => {
    console.error(error);
  }

  return (
    <div>
      <h1>新規登録</h1>
      <RegisterForm onSuccess={onSuccess} onError={onError}/>
    </div>
  );
};

export default RegisterPage;