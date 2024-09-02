import Navbar from './components/navbar/Navbar';
import SectionTop from './components/sectiontop/SectionTop';
import Footer from './components/footer/Footer';
import SocialMedia from './components/utilities/social/SocialMedia';
import './App.css';

function App() {
  return (
    <div className="mainDesign">
      <Navbar />
      <SectionTop />
      <div className='image'></div>
      <div className='text'>
        blajh lkjskj blah blah loremm loremm lore lorem
        <h3>Simple design by me :D</h3>
        <h2>hehhehehehehhehehehehhehehehhehe</h2>
        <ul>
          <li>hehhehehehehhehehhehehehhehe</li>
          <li>hehhehehehehhehehhehehehhehe</li>
          <li>hehhehehehehhehehhehehehhehe</li>
          <li>hehhehehehehhehehhehehehhehe</li>
          <li>hehhehehehehhehehhehehehhehe</li>

        </ul>
        <div className='icons'>
          <ul className="social_media1_ul">
            <SocialMedia icon_name="google-plus" />
            <SocialMedia icon_name="linkedin" />
            <SocialMedia icon_name="steam" />
            <SocialMedia icon_name="spotify" />
          </ul>
        </div>
      </div>
      < Footer />
    </div>
  );
}

export default App;
