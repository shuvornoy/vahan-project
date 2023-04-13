import './App.css';
import Navbar from './Component/Shared/Navbar/Navbar';
import Banner from './Component/Home/Banner/Banner';
import Count from './Component/Home/Count/Count';
import Footer from './Component/Shared/Footer/Footer';
import Questions from './Component/Home/Questions/Questions';
import Download from './Component/Home/Download/Download';
import Partner from './Component/Home/Partner/Partner';
import Review from './Component/Home/Review/Reciew';
import Features from './Component/Home/Features/Features';
import NewsLater from './Component/Home/NewsLater/NewsLater';

function App() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Features />
      <Count />
      <Partner />
      <Download />
      <Review />
      <Questions />
      <NewsLater />
      <Footer />
    </div>
  );
}

export default App;
