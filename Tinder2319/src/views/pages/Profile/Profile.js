import React from 'react'
import { Form, Input, Button,Space,notification,message, Card  } from 'antd';
import "../../styles/Profile.css"

const Profile = () => {
    return(
           <Card  className= "container" bordered={true} style={{ width: 600 }}>
           <div className= "PicandName" style ={{
                display: "flex",
                justifyContent: " space-around",
            }}>
                <div className= "avatar">
                    <img style = {{width:"150px", height:"140px", borderRadius:"80px"}}
                    src= "https://unsplash.com/photos/E6xfioiJmms/download?force=true" />
                </div>
                <div className= "name" style ={{
                display: "flex",
                justifyContent: " space-around",
                
            }}>
                    <h1>Name</h1>
                </div>
            </div>
            <div>
                <h2 className="textUserName"> UserName : </h2>
                <h2 className="textBirthDay"> Date Of Birth : </h2>
                <h2 className="textInterests"> Interests : </h2>
            </div>
           </Card>
    )
}
export default Profile