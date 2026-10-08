import Sidebar from "../../components/sidebar/Sidebar";
import profile from "../../assets/profile.png";
import wadget from "../../assets/wadget.png";
import search from "../../assets/searchicon.png";
import "./Users.css";
import UserCards from "../../components/usercards/UserCards";
import UserDropDown from "../../components/usercards/UserDropDown";
import UserList from "../../components/usercards/UserList";

function UserManagement() {
  return (
    <>
      <div className="users-management">
        <Sidebar />

        <section>
          <div className="users-management-content">
            <div className="users-management-content-header">
              <h1 className="users-management-content-title">Users</h1>

              <div className="users-management-content-search">
                <div className="users-management-content-search-input-wrapper">
                  <img
                    src={search}
                    alt="Search"
                    className="header-search-icon"
                  />
                  <input
                    type="text"
                    placeholder="Search users..."
                    className="users-management-content-search-input"
                  />
                </div>

                <div>
                  <select
                    name=""
                    id=""
                    className="users-management-content-search-select"
                  >
                    <option value="">Filter by status</option>
                    <option value="active">Active</option>
                    <option value="blocked">Blocked</option>
                    <option value="pending">Pending</option>
                  </select>
                </div>
              </div>

              <div>
                <img src={wadget} alt="" />
                <img src={profile} alt="" />
                <span className="users-management-content-profile-name">
                  Awais Khan
                </span>
              </div>
            </div>

            {/* Users Cards section */}
            <section className="usercards-section">
              <UserCards />
            </section>

            {/* User Drop Down section  */}
            <section className="user-drop-down-section">
              <UserDropDown />
            </section>

            {/* User List section  */}
            <section className="user-drop-down-section">
              <UserList />
            </section>
          </div>
        </section>
      </div>
    </>
  );
}

export default UserManagement;
