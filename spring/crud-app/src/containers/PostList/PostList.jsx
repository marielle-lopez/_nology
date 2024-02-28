import styles from "./PostList.module.scss";
import Post from "../../components/Post/Post";
import { PostsContext } from "../../context/PostsContextProvider/PostsContextProvider";
import { useContext } from "react";

const PostList = () => {
  const { posts } = useContext(PostsContext);

  return (
    <div className={styles.posts}>
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            createdAt={post.createdAt}
            content={post.content}
            category={post.category}
          />
        ))}
    </div>
  );
};

export default PostList;
