import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import { useState } from "react";
function App() {
  const [data,setData] = useState(0);
  console.log(data);
  return (
    <>
      <Header data={data}/>
      <Layout data={data}/>
      <Footer data={data}/>
    </>
  );
}

export default App;