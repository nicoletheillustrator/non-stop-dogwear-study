import '../src/styling/App.scss'
import logo from '../src/data/icon.svg'
import Header from './components/Header';
import UpdateTop from './components/UserUpdateTop';
import AdCard from './components/AdCard';
import adData from "./data/AdData";
import AdSection from './components/AdSection';
import HighlightCard from './components/HighlightCard';
import hlData from "./data/hlData"
import HighlightSection from './components/HighlightSection';

function App() {

  const adInput =  adData.map(data => {
    return (
    <AdCard 
    data={data}
    key={data.itemId}
    
    />
    )
  });
  
  const highlightInput =  hlData.map(data => {
    return (
      <HighlightCard 
      data={data}
      key={data.id}
      />
    )
  })

  return (
    <div className="App">
      <UpdateTop />
      <Header logo={logo}/>
      <AdSection data={adInput}/>
      <HighlightSection data={highlightInput}/>
    </div>
  );
}

export default App;
