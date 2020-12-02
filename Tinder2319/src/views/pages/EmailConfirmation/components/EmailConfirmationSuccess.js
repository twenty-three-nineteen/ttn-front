import React from 'react';
import { Result, Button  } from 'antd';

import history from "../../../../core/modules/history";

const EmailConfirmationSuccess = () => 
{
  const goToCreateProfile = ()=>{
    // history.push('/create_profile');
    history.push('/login_signup');
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