import { Background } from "../../Login/atoms/Background";
import { FormInput } from "../../Login/atoms/FormInput";
import { Button } from "../../Navigation/atoms/Button";
import styles from "../styles/signup.module.scss";

const SignUp = () => {
  return (
    <Background>
      <div className={styles.signup}>
        <FormInput placeholder="Fullname" type="text" />
        <FormInput placeholder="Email" type="email" />
        <FormInput placeholder="Password" type="password" />
        <div>
          <FormInput type="checkbox" />{" "}
          <p>Send me personal offers and learning tips</p>
        </div>
        <Button classname="signup__btn" text="Sign up" />
        <p>By signing up, you agree to our terms and conditions</p>
        <p>
          Already have an account? <a href="#">Login</a>
        </p>
      </div>
    </Background>
  );
};

export default SignUp;
