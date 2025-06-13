import styles from "./index.module.scss";
import { IPost } from "../../types";
import { DynamicIcon } from "lucide-react/dynamic";
import { useState } from "react";
import TextArea from "../TextArea";
import Button from "../Button";
import { useAppDispatch } from "../../store/hooks";
import { editPost, likePost, removePost } from "../../store/slices/posts.slice";

interface PostProps {
    post: IPost;
}

const Post = (props: PostProps) => {
    const {post} = props;
    const dispatch = useAppDispatch();

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(post.text);

    const handleEdit = () => {
        setIsEditing(true);
        setEditText(post.text);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setEditText(post.text);
    };

    const handleSave = () => {
        if (editText.trim() === "") {
            return;
        }

        dispatch(editPost({
            id: post.id,
            title: post.title,
            text: editText,
        }));
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch(removePost(post.id));
    };

    const handleLike = () => {
        dispatch(likePost(post.id));
    };

    return (
        <li className={styles.post}>
            <div className={styles.header}>
                {post.title && <h3 className={styles.title}>{post.title}</h3>}
                <Button
                    variant="transparent"
                    onClick={handleDelete}
                    title="Удалить пост"
                    className={styles.deleteButton}
                >
                    <DynamicIcon name="trash-2" width={18} height={18}/>
                </Button>
            </div>

            {!isEditing ? (
                <>
                    <div className={styles.content}>
                        <p>{post.text}</p>
                    </div>
                    <div className={styles.actions}>
                        <Button
                            variant="transparent"
                            onClick={handleEdit}
                            title="Изменить пост"
                            className={styles.actionButton}
                        >
                            <DynamicIcon name="edit-2" width={16} height={16}/>
                            <span>Изменить</span>
                        </Button>
                        {post.likes !== undefined && (
                            <Button
                                variant="transparent"
                                onClick={handleLike}
                                title="Лайкнуть пост"
                                className={styles.actionButton}
                            >
                                <DynamicIcon name="heart" width={16} height={16}/>
                                <span>{post.likes}</span>
                            </Button>
                        )}
                    </div>
                </>
            ) : (
                <div className={styles.editForm}>
                    <TextArea
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        placeholder="Редактировать пост..."
                    />
                    <div className={styles.actions}>
                        <Button
                            variant="black"
                            onClick={handleSave}
                            disabled={editText.trim() === ""}
                            title={editText.trim() === "" ? "Текст поста не может быть пустым" : "Сохранить изменения"}
                            className={styles.saveButton}
                        >
                            <DynamicIcon name="check" width={16} height={16}/>
                            <span>Сохранить</span>
                        </Button>
                        <Button
                            variant="transparent"
                            onClick={handleCancel}
                            className={styles.cancelButton}
                        >
                            <DynamicIcon name="x" width={16} height={16}/>
                            <span>Отмена</span>
                        </Button>
                    </div>
                </div>
            )}
        </li>
    );
};

export default Post;