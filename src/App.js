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
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Activity from './components/ActivitySection';
import activity from './data/activityData';
import ActivityImage from './components/ActivityCard';
import Testimonials from './components/Testimonials';
import tmData from './data/TmData';
import TDataCard from './components/TCard';
import faqData from './data/faqData';
import FaqCard from './components/faqCard';
import FaqSection from './components/faqSection';
import EmailBanner from './components/EmailBanner';
import QuickInfo from './components/QuickInfo'
import Footer from './components/footer';
import UserCustomerization from './components/usercustom';
function App() {

 const faqInput = faqData.map(data => {
  return (
    <FaqCard
    data = {data}
    key = {data.id}
    />
  )
 })

  const testimonialInput = tmData.map(data => {
    return (

      <TDataCard 
      data = {data}
      key = {data.id}
      />
    )
  });

    const activityInput = activity.map(data => {
      return (
        <ActivityImage 
        data={data}
        key={data.id}
        />
      )
    });


    const pdInput = PData.map(data =>{
      return (
        <ProductData 
        data={data}
        key={data.itemId}
        
        />
        
      )
    });
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
  });

  return (
    <div className="App">
      <UpdateTop />
      <Header logo={logo}/>  
      <AdSection data={adInput}/>
      <HighlightSection data={highlightInput}/>
      <FeaturedProducts data={pdInput}/>
      <Activity data={activityInput}/>
      <Testimonials tdata={testimonialInput}/>
      <FaqSection data={faqInput} />
      <EmailBanner />
      <QuickInfo />
      <Footer />
      <UserCustomerization />
    </div>
  );
}

export default App;

//<HighlightSection data={highlightInput}/>