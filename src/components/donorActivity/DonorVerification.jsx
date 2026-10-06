import "./DonorVerification.css";
import profile from "../../assets/profile.png";

function DonorVerification() {
  return (
    <>
      <div className="donor-verification-card">
        <h3 className="donor-verification-title">Donor Verification</h3>
        <div className="donor-verication-prifile-frame">
          <img src={profile} alt="" />
          <span>Awais Khan</span>
        </div>
        <div className="donor-verification-blood">
          <span>o+</span>
          <span>Peshawar</span>
        </div>
        <div className="donor-verification-submition">
          <span>CNIC</span>
          <span>Selfie Submitted</span>
        </div>
      </div>
    </>
  );
}

export default DonorVerification;
