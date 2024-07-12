import { LoginForm } from "../../../features";
import s from "./LoginPage.module.scss";

export const LoginPage = () => {
  return (
    <section className={s.root}>
      <LoginForm />
    </section>
  );
};
