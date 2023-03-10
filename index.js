const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  return (
    <div className={className}>
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="bg-cont">
    <h1 className="header">Boxes</h1>
    <div className="box-cont">
      <Box className="small" text="Small" />
      <Box className="medium" text="Medium" />
      <Box className="large" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
