import profilResmi from "../images/profil_400x400.jpg";


export default function HeaderRow() {
    return (
        <div class="row">
            <div class="col-md-4">
                <div class="profile-img">
                    <img src={profilResmi} alt="Profil Resmi" />
                </div>
            </div>
            <div class="col-md-6">
                <div class="profile-head">
                    <h5>Yavuz EFE</h5>
                    <h6>Freelance Web Developer</h6>
                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                </div>
            </div>
            <div class="col-md-2">
                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
            </div>
        </div>
    );
}