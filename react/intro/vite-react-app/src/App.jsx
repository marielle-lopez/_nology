import "./App.scss";
import Header from "../components/Header/Header.jsx";
import Card from "../components/Card/Card.jsx";
import Home from "../containers/Home/Home.jsx";
import Footer from "../components/Footer/Footer.jsx";
import CardWithDynamicData from "../components/CardWithDynamicData/CardWithDynamicData.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <CardWithDynamicData
        title="1st Card Title"
        description={1}
        buttonText="Click me!"
      />
      <CardWithDynamicData
        title="2nd Card Title"
        description={2}
        buttonText="Hello!"
      />
      <CardWithDynamicData
        title="3rd Card Title"
        description={3}
        buttonText="Hi!"
      />
      <CardWithDynamicData description={4} buttonText="Don't click me!" />
      <Footer />
    </>
  );
}

export default App;
