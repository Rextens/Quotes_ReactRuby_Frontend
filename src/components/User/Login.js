import axios from 'axios'
import { Form, Field } from 'react-final-form'

const Login = () => {
    const onSumbit = async values => {
        //values.preventDefault()

        axios.post('/v1/login', values, response => {
            console.log(response)
        })
    }
    

    return ( 
        <Form
      onSubmit={onSumbit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Login</label>
            <Field
              name="login"
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
 
export default Login;