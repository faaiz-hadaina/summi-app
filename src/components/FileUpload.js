import React from "react";
import { useDispatch } from "react-redux";
import { bulkAdd } from "../redux/actions/bulkadd";

const FileUpload = () => {
  const [file, setFile] = React.useState();
  const [fileName, setFileName] = React.useState("");
  const inputFile = React.useRef(null);
  const dispatch = useDispatch();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  React.useEffect(() => {
    if (file && fileName) uploadFile();
  }, [file, fileName]);

  const handleBulkClick = () => {
    inputFile.current.click();
  };

  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    dispatch(bulkAdd(formData));
  };

  return (
    <div className="App">
      <span onClick={handleBulkClick} className="bulk-add">
        Bulk Add
      </span>
      <input
        id="file"
        ref={inputFile}
        className="file-upload"
        type="file"
        onChange={saveFile}
      />
    </div>
  );
};

export default FileUpload;
