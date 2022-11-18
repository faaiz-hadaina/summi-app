import React from "react";
import BulkModal from "./BulkModal";
import Overlay from "./Overlay";

const FileUpload = () => {
  const [showModal, setShowModal] = React.useState(false);
  const handleToggleModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="App">
      <span onClick={handleToggleModal} className="bulk-add">
        Bulk Operations
      </span>
      {showModal && <BulkModal handleClicked={handleToggleModal} />}
      {showModal && <Overlay handleClicked={handleToggleModal} />}
    </div>
  );
};

export default FileUpload;
