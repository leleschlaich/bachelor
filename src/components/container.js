import React, { useState } from "react";

const Container = ({ children }) => {
  const [extended, setExtended] = useState(false);

  const handleClick = () => {
    setExtended(!extended);
  }

  return (
    <div className="container">
      <div className="title" onClick={handleClick}>{children.title}</div>
      {extended && <div className="aufklappbar">
        {children.body}
      </div>}
    </div>
  );
};

export default Container;
