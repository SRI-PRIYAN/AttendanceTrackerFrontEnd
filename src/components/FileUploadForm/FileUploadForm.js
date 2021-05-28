import React from "react";
import ClassDropdown from "../ClassDropdown/ClassDropdown";

const FileUploadForm = (props) => {
  const {
    title,
    classes,
    fileInputName,
    handleFileChange,
    handleClassChange,
    handleSubmit,
  } = props;

  return (
    <div className="form">
      <h1 className="form-title">{title}</h1>

      <div className="form-elt">
        <ClassDropdown
          classes={classes}
          handleClassChange={handleClassChange}
        />
      </div>

      <div className="form-elt">
        <input type="file" name={fileInputName} onChange={handleFileChange} />
      </div>

      <button className="btn" onClick={() => handleSubmit(fileInputName)}>
        Upload
      </button>
    </div>
  );
};

export default FileUploadForm;
