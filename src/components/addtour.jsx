import { useState } from "react";
import { Button } from "react-bootstrap";
function Add({ tour, setTour }) {
  const [tname, setTname] = useState("");
  const [tinfo, setTinfo] = useState("");
  const [timage, setTimage] = useState("");
  const [tprice, setTprice] = useState("");
  const handelAdd = () => {
    setTour([
      ...tour,
      {
        name: tname,
        info: tinfo,
        image: timage,
        price: tprice,
        id: Math.floor(Math.random() * 10)
      }
    ]);
  };
  return (
    <div>
      <h5>Destination Name</h5>
      <input value={tname} onChange={(e) => setTname(e.target.value)} />
      <h5>Destination Info</h5>
      <input value={tinfo} onChange={(e) => setTinfo(e.target.value)} />
      <h5>Destination Image</h5>
      <input value={timage} onChange={(e) => setTimage(e.target.value)} />
      <h5>Destination Price</h5>
      <input value={tprice} onChange={(e) => setTprice(e.target.value)} />
      <p></p>
      <Button variant="primary" onClick={handelAdd}>
        ADD
      </Button>
    </div>
  );
}
export default Add;
