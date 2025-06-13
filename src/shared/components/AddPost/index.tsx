import { useState } from "react";
import styles from "./index.module.scss";
import TextArea from "../TextArea";
import Button from "../Button";
import { useAppDispatch } from "../../store/hooks";
import { addPost } from "../../store/slices/posts.slice";

const AddPost = () => {
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const dispatch = useAppDispatch();

    const handleSubmit = () => {
        if (title.trim() && text.trim()) {
            dispatch(addPost({ title, text }));
            setTitle("");
            setText("");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input 
                    type="text" 
                    className={styles.titleInput}
                    placeholder="Введите название поста"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextArea 
                    placeholder="Напишите что-нибудь..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <Button 
                variant="black" 
                className={styles.submitButton}
                onClick={handleSubmit}
                disabled={!title.trim() || !text.trim()}
            >
                Add Post
            </Button>
        </div>
    );
};

export default AddPost;