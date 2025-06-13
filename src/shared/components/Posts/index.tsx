import styles from "./index.module.scss";
import AddPost from "../AddPost";
import { useAppSelector } from "../../store/hooks";
import { selectPosts } from "../../store/slices/posts.slice";
import Post from "../Post";

const Posts = () => {
    const posts = useAppSelector(selectPosts);

    return (
        <div className={styles.posts}>
            <AddPost/>
            {posts.length > 0 ? (
                <ul className={styles.list}>
                    {posts.map((post) => (
                        <Post post={post} key={`${post.id}_post_element`}/>
                    ))}
                </ul>
            ) : (
                <div className={styles.emptyState}>
                    <p>Постов пока нет.</p>
                </div>
            )}
        </div>
    );
};

export default Posts;