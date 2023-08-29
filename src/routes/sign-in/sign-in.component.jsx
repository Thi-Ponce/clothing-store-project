import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';

const SignIn = () => {
const logGoogleUser = async() => {
  const { user } = await signInWithGooglePopup();
  const userRef = await createUserDocumentFromAuth(user);
}

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logGoogleUser}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;