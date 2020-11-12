import React from 'react';
// import '../../../styles/App.css';
import axios from 'axios';
import avPath from '../../../../assessts/images/avatars/boy.png';
const Avatar = (props) => 
{

   const onValueChange = (event) => {
        props.setselectedAvatar(event.target.value);
      }
  return (
    <div className="modal-container">
    <div
    className="avatar-container">
    <div className="radio">
          <label>
            <input
              type="radio"
              value="1"
              checked={props.selectedAvatar === "1"}
              onChange={onValueChange}
            />
            <img alt="av" src={avPath} />
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="2"
              checked={props.selectedAvatar === "2"}
              onChange={onValueChange}
            />
            <img alt="av" src={avPath} />
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="3"
              checked={props.selectedAvatar === "3"}
              onChange={onValueChange}
            />
            <img alt="av" src={avPath} />
          </label>
        </div> 

        <div className="radio">
        <label>
          <input
            type="radio"
            value="1"
            checked={props.selectedAvatar === "1"}
            onChange={onValueChange}
          />
          <img alt="av" src={avPath} />
        </label>
      </div>

      <div className="radio">
      <label>
        <input
          type="radio"
          value="1"
          checked={props.selectedAvatar === "1"}
          onChange={onValueChange}
        />
        <img alt="av" src={avPath} />
      </label>
    </div>

    <div className="radio">
    <label>
      <input
        type="radio"
        value="1"
        checked={props.selectedAvatar === "1"}
        onChange={onValueChange}
      />
      <img alt="av" src={avPath} />
    </label>
  </div>

  <div className="radio">
  <label>
    <input
      type="radio"
      value="1"
      checked={props.selectedAvatar === "1"}
      onChange={onValueChange}
    />
    <img alt="av" src={avPath} />
  </label>
</div>
      </div>
      </div>
  );
};

export default Avatar;