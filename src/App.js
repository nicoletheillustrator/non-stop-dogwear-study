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
import FeaturedProducts from './components/FeaturedProducts';
import PData from './data/PData';
import ProductData from './components/PCard';
import 'swiper/css';
import "swiper/css/bundle";
import Activity from './components/ActivitySection';
import activity from './data/activityData';
import ActivityImage from './components/ActivityCard';

function App() {

    const activityInput = activity.map(data => {
      return (
        <ActivityImage 
        data={data}
        key={data.id}
        />
      )
    })


    const pdInput = PData.map(data =>{
      return (
        <ProductData 
        data={data}
        key={data.itemId}
        
        />
      )
    })
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
      <FeaturedProducts data={pdInput}/>
      <Activity data={activityInput}/>
    </div>
  );
}

export default App;

//<HighlightSection data={highlightInput}/>