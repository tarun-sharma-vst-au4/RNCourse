import AuthContent from "../components/Auth/AuthContent";
import { useState, useContext } from "react";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";
function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState();

  const authCtx = useContext(AuthContext)
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try{
      const token = await createUser(email, password);
      authCtx.authenticate(token)
    }catch(error){
      Alert.alert('Authentication failed!', 'Could not create user! Try again later')
      setIsAuthenticating(false);
    }
    
    
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating User..." />;
  }
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
