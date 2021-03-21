import facebookicon from "../images/facebook-icon.png";
import twittericon from "../images/twitter-icon.png"; 
import linkedinicon from "../images/linkedin-icon.png"; 
import instagramicon from "../images/instagram-icon.png"; 

export default function SocialInfo(){
    return(
        <div class= "social-icon">
        <a href=""><img src={facebookicon}/></a><br/>
        <a href=""><img src={twittericon}/></a><br/>
        <a href=""><img src={linkedinicon}/></a><br/>
        <a href=""><img src={instagramicon}/></a><br/>
    </div>
    );
}