import MyFile from "./MyFile";

function App() {
  return (
    <>
      {/* Must return a <div></div>, so it's now called a fragrment , <></> */}
      <h1></h1>
      <MyFile />
      {/* not allowed <h1></h1>, must return only 1 div */}
    </>
  );
}

export default App;
