import React from "react";
import { useDispatch } from "react-redux";
import { bulkAdd, bulkDelete, bulkUpdate } from "../redux/actions/bulkadd";
import Select from "react-select";
import Button from "./Button";

const BulkModal = ({ handleClicked }) => {
  const [file, setFile] = React.useState();
  const [fileName, setFileName] = React.useState();
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("");
  const inputFile = React.useRef(null);
  const dispatch = useDispatch();

  const options = [
    { value: "add", label: "Add" },
    { value: "update", label: "Update" },
    { value: "delete", label: "Delete" },
  ];

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleUploadFile = () => {
    if (selectedOption) {
      inputFile.current.click();
    }
  };

  const handleErrors = (errMsg) => {
    setError(true);
    setErrorMsg(errMsg);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  const handleBulkClick = (e) => {
    setSelectedOption(e.value);
  };
  const uploadFile = (e) => {
    if (!file) {
      alert("no file was selected");
      return;
    }
    if (selectedOption === "") {
      alert("pick an option");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);

    if (selectedOption === "add") {
      dispatch(bulkAdd(formData, handleClicked, handleErrors));
    } else if (selectedOption === "update") {
      dispatch(bulkUpdate(formData, handleClicked, handleErrors));
    } else if (selectedOption === "delete") {
      dispatch(bulkDelete(formData, handleClicked, handleErrors));
    }
  };
  return (
    <div className="modal">
      <div className="modal-inner">
        {error && (
          <div className="error-div">
            {errorMsg ? errorMsg : "Error has occured"}
          </div>
        )}
        <div className="main">
          <div className="select-container">
            <span className="select-label">Select Action</span>
            <Select
              defaulValue={selectedOption}
              options={options}
              onChange={handleBulkClick}
            />
          </div>

          <div className="upload">
            <input
              id="file"
              ref={inputFile}
              type="file"
              onChange={saveFile}
              accept=".xlsx"
            />
          </div>

          <Button title={"Submit"} onClick={uploadFile} color="green" />
        </div>
      </div>
    </div>
  );
};

export default BulkModal;
