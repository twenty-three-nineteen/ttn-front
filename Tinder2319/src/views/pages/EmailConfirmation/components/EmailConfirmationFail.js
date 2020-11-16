import React from 'react';
import { Result, Button  } from 'antd';
const resendEmail=()=>{
  console.log("resend");
}
const EmailConfirmationFail = () => 
{

  return (
    
    <Result
    status="error"
    title="Verification Failed."
    subTitle="Maybe your link is expired."
    extra={[
      <Button onClick={resendEmail} type="primary" key="console">   
        Resend Verification Email
      </Button>

      
    ]}
  >
  </Result>
      

  );
};

export default EmailConfirmationFail;