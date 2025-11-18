/** biome-ignore-all assist/source/organizeImports: <good import even it has alerts on it> */
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import ScrollUpButton from "./components/ScrollUpButton";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollUpButton />
    </>
  );
}

export default App;
