import Navbar from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Services } from './Components/Services/Services';
import './app.css';

function App() {
  return (
    <>
        <Navbar/>
        <About/>
        <Services/>
    </>
  );
}

export default App;
