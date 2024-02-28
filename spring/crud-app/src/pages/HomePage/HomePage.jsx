import PostList from "../../containers/PostList/PostList";
import MainWrapper from "../../containers/MainWrapper/MainWrapper";
import { PostsContext } from "../../context/PostsContextProvider/PostsContextProvider";
import { getAllBlogPosts } from "../../services/blog-post-services";
import { useEffect, useContext } from "react";

const HomePage = () => {
  const { setPosts } = useContext(PostsContext);

  useEffect(() => {
    getAllBlogPosts()
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((e) => console.warn(e.message));
  }, []);

  return (
    <MainWrapper>
      <PostList />
    </MainWrapper>
  );
};

export default HomePage;
