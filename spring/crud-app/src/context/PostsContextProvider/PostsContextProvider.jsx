import { createContext, useState } from "react";

export const PostsContext = createContext(null);

const PostsContextProvider = ({ children }) => {
  const [posts, setPosts] = useState(null);
  return (
    <PostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContextProvider;
