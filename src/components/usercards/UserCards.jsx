import "./UserCards.css";

function UserCards() {
  const usersCards = [
    {
      id: 1,
      totalUsers: "Total Users",
      usersValue: "25023",
      subtitle: "All registered users",
    },
    {
      id: 2,
      totalUsers: "Total Users",
      usersValue: "25023",
      subtitle: "All registered users",
    },
    {
      id: 3,
      totalUsers: "Total Users",
      usersValue: "25023",
      subtitle: "All registered users",
    },
    {
      id: 4,
      totalUsers: "Total Users",
      usersValue: "25023",
      subtitle: "All registered users",
    },
  ];
  return (
    <>
      <div className="usercards">
        <div className="user-cards-display">
          {usersCards.map((item, index) => {
            return (
              <div key={item.id} className="user-cards-content">
                <p className="total-users">{item.totalUsers}</p>
                <p className="user-values">{item.usersValue}</p>
                <p
                  className={`user-subitile ${index < 2 ? "user-color" : "user-black"}`}
                >
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default UserCards;
