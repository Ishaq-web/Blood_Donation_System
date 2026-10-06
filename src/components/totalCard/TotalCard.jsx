import React from "react";
import "./TotalCard.css";

export default function CharityDashboardFinal() {
  return (
    <div className="dashboard-bg">
      {/* TOP 4 CARDS */}
      <div className="top-stats-row">
        <div className="stat-card">
          <span>Total Donations</span>
          <b>Rs. 2.45M</b>
        </div>
        <div className="stat-card">
          <span>Medical Help</span>
          <b>Rs. 820K</b>
        </div>
        <div className="stat-card">
          <span>Medicines</span>
          <b>Rs. 450K</b>
        </div>
        <div className="stat-card">
          <span>Food Packs</span>
          <b>Rs. 380K</b>
        </div>
      </div>

      <div className="main-bottom-grid">
        {/* LEFT SIDE */}
        <div className="left-col">
          <div className="blood-fund-card">
            <span>Blood Fund</span>
            <b>Rs. 800K</b>
          </div>

          <div className="transactions-card">
            <h3>Recent Charity Transactions</h3>
            <table>
              <thead>
                <tr>
                  <th>Donor</th>
                  <th>Category</th>
                  <th>Amount</th>
                  <th>Payment</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ahmed Khan</td>
                  <td>Blood Fund</td>
                  <td>Rs. 5,000</td>
                  <td>Card</td>
                  <td className="success">✓ Success</td>
                  <td className="date">Today</td>
                </tr>
                <tr>
                  <td>Sara Ali</td>
                  <td>Medical</td>
                  <td>Rs. 2,500</td>
                  <td>Wallet</td>
                  <td className="success">✓ Success</td>
                  <td className="date">Today</td>
                </tr>
                <tr>
                  <td>Hamza</td>
                  <td>Food</td>
                  <td>Rs. 1,000</td>
                  <td>Card</td>
                  <td>Pending</td>
                  <td className="date">Yesterday</td>
                </tr>
              </tbody>
            </table>
            <button className="view-btn">View All Transactions →</button>
          </div>
        </div>

        {/* RIGHT SIDE - Recent Activity */}
        <div className="activity-card">
          <h3>Recent Activity</h3>
          <div className="activity-item">
            <p className="a-title">● New donor registered</p>
            <p>Muhammad Ali joined the platform</p>
            <small>5 min ago</small>
          </div>
          <div className="activity-item">
            <p className="a-title">● Blood request created</p>
            <p>O- blood requested at City Hospital</p>
            <small>12 min ago</small>
          </div>
          <div className="activity-item">
            <p className="a-title">● Donor verified</p>
            <p>Ahmed Khan was verified</p>
            <small>25 min ago</small>
          </div>
          <div className="activity-item">
            <p className="a-title">● Charity donation received</p>
            <p>Rs. 5,000 donated to Blood Fund</p>
            <small>35 min ago</small>
          </div>
        </div>
      </div>
    </div>
  );
}
