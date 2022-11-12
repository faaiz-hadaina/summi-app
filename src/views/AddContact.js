import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addContact } from "../redux/actions/addcontact";

const AddContact = () => {
  const dispatch = useDispatch();
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const addSuccess = useSelector(
    (state) => state?.contactReducer?.addSuccess || []
  );
  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleAddContact = (e) => {
    e.preventDefault();
    if (phone.length < 11) {
      alert("Invalid Phone number");
      return;
    }
    if (!name || !phone) {
      alert("All fields required");
      return;
    }
    dispatch(addContact({ name, phone }));
    setName("");
    setPhone("");
  };

  return (
    <div className="container">
      <form onSubmit={handleAddContact} className="add-form">
        <div className="form-control">
          <label>Name</label>
          <input
            value={name}
            required
            onChange={handleChangeName}
            type="text"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-control">
          <label>Phone</label>
          <input
            value={phone}
            required
            onChange={handleChangePhone}
            type="tel"
            placeholder="Enter Phone"
          />
        </div>
        {addSuccess.length > 0 ? (
          <div>
            <h3 className={"success"}>{addSuccess}</h3>
          </div>
        ) : (
          <></>
        )}

        <input className="btn btn-block" type="submit" value="Add Contact" />
      </form>
      <Link to={"/"}>Go back</Link>
    </div>
  );
};

export default AddContact;
