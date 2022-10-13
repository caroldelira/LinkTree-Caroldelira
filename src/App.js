
import { Social } from "./Social";
import { Avatar } from "./Avatar";
import { About } from "./About";
import { Projects } from "./Projects"
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Avatar avatar={data.avatar} />
      <About name={data.name} about={data.about} />
      <Social social={data.social} />
      <Projects />
    </div>
  );
}

export default App;
