import useMousePosition from "../hooks/useMousePosition";

const MouseMove = () => {
  const coords = useMousePosition();

  const style = {
    fontSize: `${coords.y / 5}px`,
    color: `rgb(${coords.x / 4}, ${coords.y / 4}, 0)`,
    backgroundColor: `rgb(0, ${coords.x / 4}, ${coords.y / 4})`,
    padding: '10px',
    border: `10px dotted rgb(${coords.y / 4}, 0, ${coords.x / 4})` 
  };

  return (
    <div>
      <h2 style={style}>MouseMove component</h2>
      <h2>X: {coords.x}, Y: {coords.y}</h2>
    </div>
  );
};

export default MouseMove;
