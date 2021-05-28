import React from "react";

const ClassBar = (props) => {
  const { classes } = props;

  return (
    <div className="class-bar">
      <h1>Classes</h1>
      {classes.map((_class) => {
        return (
          <div className="class-elt" key={_class.class_id}>
            <h3>{_class.subject}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ClassBar;
