import { useState, useEffect, useRef } from "react";
import "./App.css";

function App() {
  // const SearchBar = ({ setSearch }) => {
  //   const [input, setInput] = useState("");

  //   const handleChange = (event) => setInput(event.target.value);
  //   const handleClick = () => setSearch(input);

  //   return (
  //     <>
  //       <input type="text" value={input} onChange={handleChange} />
  //       <button onClick={handleClick}>Search</button>
  //     </>
  //   );
  // };

  // const Header = () => {
  //   const [search, setSearch] = useState("");

  //   useEffect(() => {
  //     console.log(search);
  //   }, [search]);

  //   return <SearchBar setSearch={setSearch} />;
  // };

  // const TextField = ({ initial }) => {
  //   const [input, setInput] = useState(initial);

  //   const handleChange = (event) => {
  //     setInput(event.target.value);
  //     // This console.log never logs the right input value, why?
  //     // Where could I move log this to see the new value?
  //     // console.log(input);
  //   };

  //   console.log(input);

  //   return (
  //     <div>
  //       <input
  //         type="text"
  //         value={input}
  //         onChange={(e) => {
  //           handleChange(e);
  //         }}
  //       />
  //     </div>
  //   );
  // };

  // import { useRef, useState } from "react";

  const states = [
    { label: "New South Wales", value: "NSW" },
    { label: "Victoria", value: "VIC" },
    { label: "Queensland", value: "QLD" },
  ];

  const MyForm = () => {
    const formRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();

      const form = formRef.current;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      console.log("Form Data:", data);
    };

    return (
      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div>
          <label htmlFor="state">State:</label>
          <select id="state" name="selectedState">
            {states.map((state) => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  };

  // const states = [
  //   { label: "New South Wales", value: "NSW" },
  //   { label: "Victoria", value: "VIC" },
  //   { label: "Queensland", value: "QLD" },
  // ];

  // const MyForm = () => {
  //   const [formData, setFormData] = useState({
  //     firstName: "",
  //     selectedState: states[0].value,
  //   });

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("Form Data:", formData);
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="firstName">First Name:</label>
  //         <input
  //           type="text"
  //           id="firstName"
  //           name="firstName"
  //           value={formData.firstName}
  //           onChange={handleInputChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="state">State:</label>
  //         <select
  //           id="state"
  //           name="selectedState"
  //           value={formData.selectedState.value}
  //           onChange={handleInputChange}
  //         >
  //           {states.map((state) => (
  //             <option key={state.value} value={state.value}>
  //               {state.label}
  //             </option>
  //           ))}
  //         </select>
  //       </div>
  //       <button type="submit">Submit</button>
  //     </form>
  //   );
  // };

  return (
    <>
      <MyForm />
    </>
  );
}

export default App;
