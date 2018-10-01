import styled from "styled-components";
import React, { Component } from "react";

interface InputTypeProps {
  show: boolean;
}

const PasswordInput = styled.input.attrs<InputTypeProps>({
  type: (props) => props.show ? 'text' : 'password',
})`
  font-size:  24px;
  padding: 6px 4px 6px;
  &:focus{
    border-color: blue;
  }
`;

const ShowToggleButton = styled.button`
  -webkit-appearance: none;
  background: palevioletred;
  color: white;
  font-size:  24px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

class PasswordInputShow extends Component {
  state = {
    showPassword: false
  };

  handleToggleShowPassword = () => {
    this.setState({
      showPassword: !this.state.showPassword
    });
  };

  render() {
    return (
      <div>
        <PasswordInput show={this.state.showPassword} />
        <ShowToggleButton onClick={this.handleToggleShowPassword}>{this.state.showPassword ? 'Hide' : 'Show'}</ShowToggleButton>
      </div>
    );
  }
}

export default PasswordInputShow;
