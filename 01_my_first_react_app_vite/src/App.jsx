import MyFile from "./MyFile";

function App() {
  const username = "Nandini";
  return (
    <>
      {/* Must return a <div></div>, so it's now called a fragrment , <></> */}
      <h1>{username}</h1>
      <MyFile />
      {/* not allowed <h1></h1>, must return only 1 div */}
    </>
  );
}

export default App;
