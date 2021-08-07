import axios from 'axios'
import { Form, Field } from 'react-final-form'

const Register = () => {

    const onSumbit = async values => {
        //values.preventDefault()
/*
      

        axios.post('/v1/user/register', values, response => {

        })
        */

        let data = {
          user: {
            email: values.user,
            password: values.password,
            password_confirmation: values.password
          }
        }

        axios.post('/v1/signup', data, response => {
          console.log(response)
        })
    
        console.log(data)
    }
    
    return ( 
        <Form
      onSubmit={onSumbit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Login</label>
            <Field
              name="user"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Password</label>
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="buttons">
            <button type="submit">
              Submit
            </button>
          </div>
        </form>
      )}
    />
    );
}
 
export default Register;