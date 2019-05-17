import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import FormControl  from "@material-ui/core/FormControl";
import  InputLabel  from "@material-ui/core/InputLabel";
import  Input  from "@material-ui/core/Input";
import  Button  from "@material-ui/core/Button";


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const { name, email, password, password_confirmation} = formData

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
  

  const handleSignup = async e => {
    e.preventDefault()
    if(password !== password_confirmation){
      console.log('Password do not match')
    }else{
      console.log('Success')
      // const newUser = {
      //   name,
      //   email,
      //   password
      // }

      // try {
      //   const config  = {
      //     headers: {
      //       'Content-type': 'application/json'
      //     }
      //   }
        
      //   const body = JSON.stringify(newUser)

      //   const res = await axios.post('/api/users', body, config)

      //   console.log(res.data)
      // } catch (err) {
      //   console.error(err.response.data)
      // }
    }
  }

  return (
    <Fragment
      style={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
        padding: 20
      }}
    >
      <form style={{ width: "35%" }}>
        <h1>Sign Up Form</h1>
        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">Name</InputLabel>
          <Input id="name" name="name" value={name} onChange={e => onChange(e)}/>
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input id="email" name="email" value={email} onChange={e => onChange(e)}/>
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password">password</InputLabel>
          <Input id="password" name="password" type="password" value={password} onChange={e => onChange(e)}/>
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="password_confirmation">password confirmation</InputLabel>
          <Input id="password_confirmation" name="password_confirmation" type="password" value={password_confirmation} onChange={e => onChange(e)}/>
        </FormControl>

        <Button onClick={e => handleSignup(e)} variant="contained" color="primary" size="medium">
            Submit
        </Button>
      </form>
      <p>AlreadyDon't have a account? <Link to='/login'>Sign in</Link>
      </p>
    </Fragment>
  );
}


export default Register