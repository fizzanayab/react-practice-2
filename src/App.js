import Navbar from './components/navbar/Navbar';
import SectionTop from './components/sectiontop/SectionTop';
import Itemsdiv from './components/itemsdiv/Itemsdiv';
import './App.css';

function App() {
  return (
    <div className="mainDesign">
      <Navbar />
      <SectionTop />
      <Itemsdiv />
    </div>
  );
}

export default App;
