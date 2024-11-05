import logo from './logo.svg';
import './App.css';
import Prizes from './Sections/Prizes';
import CatchTheBee from './Sections/CatchTheBee';
import Cursor from './Components/Cursor';
import Team from './Sections/Team';

function App() {
  return (
    <div className="App bg-checks relative min-w-screen min-h-screen flex flex-col overflow-x-clip">
      
      {/* Section 1:-  Prizes */}
      <Prizes />

      {/* catch the bee */}
      <CatchTheBee />

      {/* Team */}
      <Team />

      

    </div>
  );
}

export default App;
