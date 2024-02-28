import MainWrapper from "../../containers/MainWrapper/MainWrapper";
import Form from "../../components/Form/Form";
import { addBlogPost } from "../../services/blog-post-services";
import { useNavigate } from "react-router-dom";

const CreatePage = () => {
  const navigator = useNavigate();
  const submit = async (data) => {
    addBlogPost(data)
      .then((response) => {
        console.log(response);
        navigator("/");
      })
      .catch((e) => console.warn(e.message()));
  };

  return (
    <MainWrapper>
      <h2>Create a Post</h2>
      <Form submit={submit} />
    </MainWrapper>
  );
};

export default CreatePage;
