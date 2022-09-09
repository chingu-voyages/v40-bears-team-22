import styles from '../styles/background.module.scss'
type BackgroundProps = {
  children: any;
};

export const Background = ({ children }: BackgroundProps) => {
  return <div className={styles.background}>{children}</div>;
};
