import { useState } from 'react';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={() => {}}>
        <input
        required
        type="text"
        placeholder="Name"
        onChange={handleChange}
        name='displayName'
        value={displayName}/>

        <input
        required
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name='email' 
        value={email}/>

        <input
        required
        type="password"
        placeholder="Password"
        onChange={handleChange}
        name='password' 
        value={password}/>

        <input
        required
        type="password"
        placeholder="Confirm Password"
        onChange={handleChange}
        name='confirmPassword' 
        value={confirmPassword}/>

        <button type='submit'>Sing Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
