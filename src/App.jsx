import "./App.css";
import Landing from "./page/Landing";
import Projects from "./page/Projects";
// import SharesOld from "./page/Shares_old";
import Shares from "./page/Shares";
import Contact from "./page/Contact";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
function App() {
  return (
    <div className="overflow-hidden">
      <Landing />
      <Projects />
      <Shares />

      <Contact />
    </div>
  );
}
export default App;
