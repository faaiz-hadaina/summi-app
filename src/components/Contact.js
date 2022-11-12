import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteContact } from "../redux/actions/deletecontact";
import { selectContact } from "../redux/actions/selectcontact";

const Contact = ({ contact }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedContacts = useSelector(
    (state) => state?.contactReducer?.selectedContacts || []
  );
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSelect = (id) => {
    dispatch(selectContact(id));
  };

  return (
    <div
      onClick={() => handleSelect(contact._id)}
      className={`contact ${
        selectedContacts.includes(contact._id) ? "selected" : ""
      }`}
    >
      <div>
        <h3>{contact.name}</h3>
        <p>{contact.phone}</p>
      </div>

      <div>
        <FaTimes
          onClick={() => handleDelete(contact._id)}
          className="deleteicon"
        />
        <FaEdit
          onClick={() =>
            navigate("/editcontact", { state: { id: contact._id } })
          }
          className="editicon"
        />
      </div>
    </div>
  );
};

export default Contact;
