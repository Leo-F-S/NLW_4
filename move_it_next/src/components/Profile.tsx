import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Leo/F-S.png" alt="Leo" />
      <div>
        <strong>Leonardo Fernandes</strong>
        <p>Level 1</p>
      </div>
    </div>
  );
}
