import Tcard from "./tourcard";
function Destination({ tour }) {
  return (
    <div className="Tlist">
      {tour.map((el) => (
        <Tcard el={el} />
      ))}
    </div>
  );
}
export default Destination;
