import React from "react";

function Heading(props) {
  const TagName = `h${props.level}`;

  return (
    <div>
      <TagName>{props.children}</TagName>
    </div>
  );
}

export default Heading;
