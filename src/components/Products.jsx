import React, { useState } from "react";

export default function Products() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
  return (
    <div>
      <button onClick={toggleShow}>
        {show ? <p>Este seria el contenido a mostrar</p> : null}
      </button>
    </div>
  );
}
