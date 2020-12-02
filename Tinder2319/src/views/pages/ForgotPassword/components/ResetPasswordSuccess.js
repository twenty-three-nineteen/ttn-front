import React from 'react';
import { Result, Button  } from 'antd';
import history from "../../../../core/modules/history";

const EmailConfirmationSuccess = () => 
{
const goToLogin = ()=>{
  history.push('/login_signup');
}
  return (
    
    <Result
    status="success"
    title="Password Reset."
    subTitle="You have successfully reset your password."
    extra={[
      <Button onClick={goToLogin} type="primary" key="console">
        Log In
      </Button>

      
    ]}
  >
  </Result>
      

  );
};

export default EmailConfirmationSuccess;