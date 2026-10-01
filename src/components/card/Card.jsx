import DashboardStats from "../../context/DashboardStats";
import "./Cards.css";

function Cards() {
  return (
    <div className="Dashboard-cards">
      {DashboardStats.map((item) => (
        <div key={item.id} className="card">
          {/* Title */}
          <h4 className="card-title">{item.totalUsers}</h4>

          {/* Value */}
          <h2 className="card-value">{item.userValue}</h2>

          {/* Changes + Subtitle */}
          <div className="card-changes">
            <span className="card-changes-value">{item.changes}</span>

            <span className="card-changes-text">{item.subtitle}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
