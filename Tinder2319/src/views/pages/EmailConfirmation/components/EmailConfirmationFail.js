import React from 'react';
import { Result, Button  } from 'antd';

import {connect} from 'react-redux';
import * as email_confirmation_actions from '../../../../core/email-confirmation/action/emailConfirmationActions';
import ResendEmailModal from './ResendEmailModal';
  
    

const EmailConfirmationFail = ({msg,setResendEmailModal}) => 
{
  const resendEmail=()=>
{
  setResendEmailModal(true);
}

  return (
    <div>
    <ResendEmailModal/>
    <Result
    status="error"
    title="Verification Failed."
    subTitle={msg}
    extra={[
      <Button onClick={resendEmail} type="primary" key="console">   
        Resend Verification Email
      </Button>

      
    ]}
  >
  </Result>
  </div>

  );
};

const mapStateToProps = (state) =>{
  
  return{
    msg: state.email_confirmation.errorMsg,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setResendEmailModal : (v) => dispatch(email_confirmation_actions.setResendEmailModal(v)),
    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmailConfirmationFail);