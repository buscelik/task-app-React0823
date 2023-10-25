import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import './Login.css'
import { useState } from 'react';

const initialLogin = {
    email: "",
    password: ""
}
const Login = (props) => {
    const [loginFormState, setLoginFormState] = useState(initialLogin); 
    const handleChange = (evt) => {
        setLoginFormState({...loginFormState,[evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.handleLogin(loginFormState);
    }
    return (
        <>
        <h2>LOGIN</h2>
        <Form className="login-form" onSubmit={handleSubmit}>
  <FormGroup>
    <Label for="exampleEmail">Email</Label>
    <Input
      id="email"
      name="email"
      placeholder="Kayıtlı email adresiniz."
      type="email"
      value={loginFormState.email}
      onChange={handleChange}
      />
      
  </FormGroup>

  <FormGroup>
    <Label for="examplePassword">Password </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Şifreniz"
      type="password"
      value={setLoginFormState.password}
      onChange={handleChange}
    />
  </FormGroup>
  
  
  <div class="kaydet-buton-container">
  <button class="kaydet-buton">Submit</button>
</div>

</Form>
</>
    )
}

export default Login;