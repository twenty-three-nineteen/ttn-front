import React from 'react';
import { Result, Button  } from 'antd';

const EmailConfirmationSuccess = () => 
{
const goToCreateProfile = ()=>{
  
}
  return (
    
    <Result
    status="success"
    title="Email Verified."
    subTitle="You have successfully activated your account."
    extra={[
      <Button onClick={goToCreateProfile} type="primary" key="console">
        Continue
      </Button>

      
    ]}
  >
  </Result>
      

  );
};

export default EmailConfirmationSuccess;