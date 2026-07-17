import Hero from "./Hero";
import About from "./About";

const Layout = (props) => {
    console.log(props);
  return (
    <main className="bg-gray-400 min-h-screen px-10 py-10">
      <h1 className="text-4xl mb-4">Layout</h1>

      <Hero data={props.data}/>
      <About data={props.data}/>
    </main>
  );
};

export default Layout;