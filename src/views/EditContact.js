import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateContact } from "../redux/actions/updatecontact";

const EditContact = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const contacts = useSelector(
    (state) => state?.contactReducer?.contacts || []
  );
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  React.useEffect(() => {
    if (contacts && state?.id) {
      const selectedContact = contacts.filter(
        (contact) => contact._id === state?.id
      )[0];
      setName(selectedContact?.name);
      setPhone(selectedContact?.phone);
    } else {
      navigate("/");
    }
  }, [contacts]);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleUpdateContact = (e) => {
    e.preventDefault();
    if (phone.length < 11) {
      alert("Invalid Phone number");
      return;
    }
    if (!name || !phone) {
      alert("All fields required");
      return;
    }
    dispatch(updateContact(state?.id, { name, phone }, navigate));
  };

  return (
    <div className="container">
      <form onSubmit={handleUpdateContact} className="add-form">
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
        <input className="btn btn-block" type="submit" value="Update Contact" />
      </form>
      <Link to={"/"}>Go back</Link>
    </div>
  );
};

export default EditContact;
