import Container from "../Container";
import styles from "./index.module.scss";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <a className={styles.link} href="https://github.com/cruiserrrrrr">@cruiserrrrrr</a>
            </Container>
        </header>
    );
};

export default Header;
