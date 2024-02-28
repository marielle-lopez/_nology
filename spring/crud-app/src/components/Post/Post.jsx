import styles from "./Post.module.scss";

const Post = ({
  title = "Post title",
  createdAt = "1 January 0000",
  content = "Post content",
  category = { name: "Category name" },
}) => {
  return (
    <article className={styles.post}>
      <h3>{title}</h3>
      <p>{createdAt}</p>
      <p>{content}</p>
      <p>{category.name}</p>
    </article>
  );
};

export default Post;
