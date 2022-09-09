import { Button } from "../../Navigation/atoms/Button";
import { Background } from "../atoms/Background";
import { FormInput } from "../atoms/FormInput";
import { ProfilePhoto } from "../atoms/ProfilePhoto";
import styles from "../styles/login.module.scss";

const Login = () => {
  return (
    <Background>
      <div className={styles.container}>
        {" "}
        <div className={styles.login_page}>
          <h2>Login to your Skills Tutor Trade Account</h2>
          <ProfilePhoto />
          <FormInput type="password" placeholder="Password" />
          <Button text="Log in" classname={styles.login} />
          <p>
            or <a href="#">Forgot password</a>
          </p>
          <a href="#">Login to a different account</a>

          <div className={styles.signup}>
            <p>
              Don't have an account? <a href="">Sign up</a>
            </p>
            <a href="#">Login with your organization</a>
          </div>
        </div>
      </div>
    </Background>
  );
};

export default Login;
