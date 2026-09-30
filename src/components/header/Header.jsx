import profile from "../../assets/profile.png";
import wadget from "../../assets/wadget.png";

function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div>
        <h2 className="font-baloo font-semibold text-[35px] text-center">
          Blood Donation
        </h2>
      </div>

      <div className="flex items-center justify-between gap-4">
        <select
          name=""
          id=""
          className="w-[163px] h-[48px] rounded-[99px] bg-[#FFFFFF] border-[1px] p-2 mr-8"
        >
          <option value="month">This month</option>
          <option value="year">This year</option>
        </select>

        <div>
          <img
            src={wadget}
            alt=""
            className="w-[35px] h-[35px] rounded-[50%]"
          />
        </div>
        <div className="flex items-center gap-2 mr-20">
          <img src={profile} alt="" className="w-[32px] h-[33px]" />
          <span className="text-[16px] font-medium">Muhammad Ali</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
