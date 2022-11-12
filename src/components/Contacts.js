import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDebounce } from "../hooks/useDebounce";
import { bulkDelete } from "../redux/actions/bulkdelete";
import { searchContact } from "../redux/actions/getcontacts";
import Contact from "./Contact";

const Contacts = () => {
  const [search, setSearch] = React.useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(
    (state) => state?.contactReducer?.contacts || []
  );
  const selectedContacts = useSelector(
    (state) => state?.contactReducer?.selectedContacts || []
  );
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleBulkDelete = () => {
    dispatch(bulkDelete());
  };

  useDebounce(
    () => {
      dispatch(searchContact(search));
    },
    [search],
    200
  );

  return (
    <>
      <input
        value={search}
        onChange={handleChange}
        className="search-input"
        type="text"
        placeholder="Search here ..."
      />

      {selectedContacts.length > 1 && (
        <span onClick={handleBulkDelete} className="bulk-delete">
          Bulk Delete
        </span>
      )}

      {contacts.map((contact, index) => (
        <Contact key={index} contact={contact} />
      ))}
    </>
  );
};

export default Contacts;
