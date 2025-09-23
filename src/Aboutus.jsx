import React from "react";

function Aboutus() {
  React.useEffect(() => {
    document.title = "Aboutus";
  }, []);
  return (
    <div>
      <h1>Aboutus</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        voluptatibus amet asperiores cumque, quae quo laudantium, vel tempora
        magnam ratione at distinctio sed aperiam ullam minus quaerat? Dolorem,
        nisi eum.
      </p>
    </div>
  );
}

export default Aboutus;