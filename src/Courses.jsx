import React from "react";

function Courses() {
  React.useEffect(() => {
    document.title = "Courses";
  }, []);
  return (
    <div>
      <ul>
        <li>ReactJS</li>
        <li>Angular</li>
        <li>NodeJS</li>
      </ul>
    </div>
  );
}

export default Courses;