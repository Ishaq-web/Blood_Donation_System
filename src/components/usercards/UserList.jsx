import "./UserList.css";
import eyeicon from "../../assets/eyeicon.png";
import deleteicon from "../../assets/deleteicon.png";
import { useNavigate } from "react-router-dom";

function UserList() {
  const navigate = useNavigate();
  const User_list = [
    {
      id: 1,
      name: "Muhammad Ishaq",
      blood_group: "B+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 18",
      status: "Active",
    },
    {
      id: 2,
      name: "Muhammad Waqas",
      blood_group: "A+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 20",
      status: "Active",
    },
    {
      id: 3,
      name: "Muhammad Waqas",
      blood_group: "A+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 20",
      status: "Active",
    },
    {
      id: 4,
      name: "Muhammad Waqas",
      blood_group: "A+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 20",
      status: "Active",
    },
    {
      id: 5,
      name: "Muhammad Waqas",
      blood_group: "A+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 20",
      status: "Active",
    },
    {
      id: 6,
      name: "Muhammad Waqas",
      blood_group: "A+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 20",
      status: "Active",
    },
    {
      id: 7,
      name: "Muhammad Waqas",
      blood_group: "A+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 20",
      status: "Active",
    },
    {
      id: 8,
      name: "Muhammad Waqas",
      blood_group: "A+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 20",
      status: "Active",
    },
    {
      id: 9,
      name: "Muhammad Waqas",
      blood_group: "A+",
      location: "Peshawar",
      verified: "Verified",
      joined: "Aug 20",
      status: "Active",
    },
  ];
  return (
    <>
      <div className="user-list">
        <div className="list-header">
          <span>
            <input type="checkbox" className="id-checkbox" /> ID
          </span>
          <span>Name</span>
          <span>Blood Group</span>
          <span>Location</span>
          <span>Verification</span>
          <span>Joined</span>
          <span>Status</span>
          {/* <span className="Action-2">
            <img src={eyeicon} alt="" className="eye-header-icon" />
            <img src={deleteicon} alt="" className="delete-header-icon" />
          </span> */}
        </div>

        <div className="user-list-item">
          {User_list.map((user) => {
            return (
              <div key={user.id} className="user-list-display">
                <span>
                  <input type="checkbox" className="id-checkbox" />
                  {user.id}
                </span>
                <span>{user.name}</span>
                <span>{user.blood_group}</span>
                <span>{user.location}</span>
                <span>{user.verified}</span>
                <span>{user.joined}</span>
                <span>{user.status}</span>
                <span className="Action-2">
                  <img
                    src={eyeicon}
                    alt=""
                    className="eye-icon"
                    onClick={() => navigate("/profile", { state: { user } })}
                    style={{ cursor: "pointer" }}
                  />
                  <img src={deleteicon} alt="" className="delete-icon" />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserList;
