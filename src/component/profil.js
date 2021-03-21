import "./profil.css";
import SocialInfo from "./social";
import PersonalInfos from "./personal-info";
import SkillInfo from "./skills";
import HeaderRow from "./header";

export default function ProfilSayfasi(){
    return(
        <div class="container emp-profile">
        <form method="post">
            <HeaderRow></HeaderRow>
            <div class="row">
                <div class="col-md-4">
                    <SkillInfo></SkillInfo>
                    <SocialInfo></SocialInfo>
                </div>
                <PersonalInfos></PersonalInfos>
            </div>
        </form>           
    </div>
    );
}
    