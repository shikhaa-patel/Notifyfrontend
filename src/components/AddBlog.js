import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import addNotification from "react-push-notification";
import logo from "../images/juet.png";

function AddBlog() {
  const navigate = useNavigate();

  const [inputs, setinputs] = useState({
    title: "",
    description: "",
    // imageURL: "",
  });

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/api/blog/add", {
        title: inputs.title,
        description: inputs.description,
        // image: inputs.imageURL,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    // console.log(data);
    return data;
  };

  const handleChange = (e) => {
    setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blogs"));
  };

  const clickToNotify = () => {
    addNotification({
      title: inputs.title,
      message: inputs.description,
      icon: logo,
      duration: "4000",
      native: true,
    });
  };

  return (
    <div className="addingblog">
      <div className="adding">
        <h1>Post Your Notice</h1>
        <form className="addingform" onSubmit={handlesubmit}>
          <div className="rightt">
            {/* <h3>Choose from device</h3>               
               <input type="file" className='imgurl' name="imageURL" onChange={handleChange} />
               <h3>OR</h3> */}
            {/* <input type="text" className='imgurl' name="imageURL" placeholder='Enter image url' onChange={handleChange} value={inputs.imageURL}/> */}
            <h3 className="blogtitle">Title</h3>
            <input
              type="text"
              name="title"
              placeholder="Enter title"
              onChange={handleChange}
              value={inputs.title}
            />
            <h3>Description</h3>
            <input
              type="text"
              name="description"
              placeholder="Enter description"
              onChange={handleChange}
              value={inputs.description}
            />

            <button onClick={clickToNotify} type="submit" className="addsubmit">
              {" "}
              Submit{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBlog;
