import Container from "../../components/Container";
import Posts from "../../components/Posts";
import styles from "./index.module.scss";

const Main = () => {
    return (
        <div className={styles.main}>
            <Container>
                <Posts/>
            </Container>
        </div>
    );
};

export default Main;
