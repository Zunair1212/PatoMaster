import React, { useState } from "react";
import axios from "axios";
import "./reserform.css";
import Reserinput from "./../components/reserinput";
import { ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
export default function Reserform() {
  const [user, setUser] = useState({
    date: "",
    time: "",
    people: "",
    fname: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]:
        event.target.name === "people" ? Number(event.target.value) : event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/reservations", user);

      if (response.status === 201 || response.status === 200) {
        toast.success("Reservation submitted successfully!", {
          position:"top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          rtl:false,
          pauseOnHover: true,
          draggable: true,
          theme: "light"
        });

        setUser({
          date: "",
          time: "",
          people: "",
          fname: "",
          phone: "",
          email: "",
        });
      } else {
        toast.error("Failed to submit reservation. Please try again." ,{ position: "top-right" });
      }
    } catch (error) {
      toast.error(" Error submitting reservation. Please try later." ,{ position: "top-right" });
    }
  };

  return (
    <div className="resercontainer">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <Reserinput title="Date" type="date" id="date" onChange={handleChange} value={user.date} name="date" />
          <Reserinput title="Time" type="time" id="time" onChange={handleChange} value={user.time} name="time" />
          <Reserinput title="People" type="number" id="people" onChange={handleChange} value={user.people} name="people" />
        </div>

        <div className="input-group">
          <Reserinput title="Name" type="text" id="fname" onChange={handleChange} value={user.fname} name="fname" />
          <Reserinput title="Phone" type="number" id="phone" onChange={handleChange} value={user.phone} name="phone" />
          <Reserinput title="Email" type="email" id="email" onChange={handleChange} value={user.email} name="email" />
        </div>

        <button type="submit">BOOK TABLE</button>
      </form>
      <ToastContainer />
    </div>
  );
}

