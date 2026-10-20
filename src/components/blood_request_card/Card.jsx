import "./Card.css";

function Cards() {
  const cardOptions = [
    {
      id: 1,
      totalRequest: "Total Request",
      totalVal: "1,284",
      totalSubtitle: "All blood requests",
    },
    {
      id: 2,
      totalRequest: "Available Now",
      totalVal: "256",
      totalSubtitle: "currently looking for donors",
    },
    {
      id: 3,
      totalRequest: "Critical Requests",
      totalVal: "856",
      totalSubtitle: "require immediate attention",
    },
    {
      id: 4,
      totalRequest: "Rejected Requests",
      totalVal: "172",
      totalSubtitle: "Requests rejected",
    },
  ];

  return (
    <>
      <h1 className="title-top">Request Statistics</h1>
      <div className="cards-container">
        {cardOptions.map((option) => (
          <div className="card-item" key={option.id}>
            <span className="card-title">{option.totalRequest}</span>

            <h2 className="card-value">{option.totalVal}</h2>

            <p className="card-subtitle">{option.totalSubtitle}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
