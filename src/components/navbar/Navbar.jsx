
import SocialMedia from '../utilities/social/SocialMedia';
import MyButton from '../utilities/button/MyButtons';
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
       <div className='logo'>SoundSMP</div> 
       <div className='menu'>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
       </div>
       <div className='buttonnav'>
        <MyButton b_name="Download Now" b_class="primary" b_type="button"/>
        </div>
       <div className='icons'> <ul className="social_media_ul">
        <SocialMedia icon_name="facebook" />
        <SocialMedia icon_name="twitter" />
        <SocialMedia icon_name="youtube" />
        <SocialMedia icon_name="pinterest-square" />
      </ul></div>
    </div>
  );
}

export default Navbar;
