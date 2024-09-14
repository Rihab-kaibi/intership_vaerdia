import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import exampleImage from '../../assets/image.png'; // Adjust the path as necessary

const fakeData = {
  summary: [
    { title: '$7,245.00', subtitle: 'Total Sells', change: '3.5%', type: 'increase' },
    { title: '$7,245.00', subtitle: 'Total Visit', change: '34.4%', type: 'decrease' },
    { title: '$10,245.00', subtitle: 'Total Click', change: '54.2%', type: 'increase' },
    { title: '$80,245.00', subtitle: 'Inspirations', change: '77.5%', type: 'increase' },
  ],
  sellHistory: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Sell Price',
        data: [120, 100, 140, 170, 180, 165, 200, 190, 220, 210, 230, 240],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Total Sell',
        data: [90, 80, 100, 130, 140, 135, 170, 160, 200, 190, 210, 220],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
    ],
  },
  visitorSource: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Visitors',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Sells',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
    ],
  },
  analyticsConversions: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Visitors',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
      {
        label: 'Sells',
        data: [28, 48, 40, 19, 86, 27, 90],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        fill: true,
      },
    ],
  },
  countries: [
    { name: 'Afghanistan', value: '$7.34k' },
    { name: 'Saudi Arabia', value: '$5.34k' },
    { name: 'Bangladesh', value: '$3.34k' },
    { name: 'United States', value: '$3.34k' },
    { name: 'Ireland', value: '$8.34k' },
  ],
};

const AdminDashboard = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Dashboard</div>
        <div>
          <button style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', marginRight: '10px' }}>
            Add Member
          </button>
          <button style={{ padding: '10px 20px', backgroundColor: '#6c757d', color: '#fff', border: 'none', borderRadius: '5px' }}>
            Edit Roles
          </button>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        {fakeData.summary.map((item, index) => (
          <div key={index} style={{ width: '24%', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px' }}>{item.title}</div>
            <div style={{ fontSize: '14px', color: '#6c757d', marginBottom: '10px' }}>{item.subtitle}</div>
            <div style={{ fontSize: '14px', color: item.type === 'increase' ? 'green' : 'red' }}>{item.change}</div>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ width: '65%', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Sell History</div>
          <Bar data={fakeData.sellHistory} />
        </div>
        <div style={{ width: '30%', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Visitor Source</div>
          <Line data={fakeData.visitorSource} />
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div style={{ width: '65%', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
          <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Analytics Conversions</div>
          <Line data={fakeData.analyticsConversions} />
        </div>
        <div style={{ width: '30%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ fontSize: '18px', fontWeight: 'bold' }}>Countries</div>
              <div style={{ fontSize: '14px', color: '#007bff', cursor: 'pointer' }}>View All</div>
            </div>
            {fakeData.countries.map((country, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>{country.name}</div>
                <div>{country.value}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <div style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>June 2024</div>
            <table style={{ width: '100%', textAlign: 'center', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={{ padding: '5px', color: '#007bff' }}>Sun</th>
                  <th style={{ padding: '5px', color: '#007bff' }}>Mon</th>
                  <th style={{ padding: '5px', color: '#007bff' }}>Tue</th>
                  <th style={{ padding: '5px', color: '#007bff' }}>Wed</th>
                  <th style={{ padding: '5px', color: '#007bff' }}>Thu</th>
                  <th style={{ padding: '5px', color: '#007bff' }}>Fri</th>
                  <th style={{ padding: '5px', color: '#007bff' }}>Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '5px' }}></td>
                  <td style={{ padding: '5px' }}></td>
                  <td style={{ padding: '5px' }}></td>
                  <td style={{ padding: '5px' }}></td>
                  <td style={{ padding: '5px' }}></td>
                  <td style={{ padding: '5px', backgroundColor: '#007bff', color: '#fff', borderRadius: '50%' }}>1</td>
                  <td style={{ padding: '5px' }}>2</td>
                </tr>
                <tr>
                  <td style={{ padding: '5px' }}>3</td>
                  <td style={{ padding: '5px' }}>4</td>
                  <td style={{ padding: '5px' }}>5</td>
                  <td style={{ padding: '5px' }}>6</td>
                  <td style={{ padding: '5px' }}>7</td>
                  <td style={{ padding: '5px' }}>8</td>
                  <td style={{ padding: '5px' }}>9</td>
                </tr>
                <tr>
                  <td style={{ padding: '5px' }}>10</td>
                  <td style={{ padding: '5px' }}>11</td>
                  <td style={{ padding: '5px' }}>12</td>
                  <td style={{ padding: '5px' }}>13</td>
                  <td style={{ padding: '5px', backgroundColor: '#007bff', color: '#fff', borderRadius: '50%' }}>14</td>
                  <td style={{ padding: '5px' }}>15</td>
                  <td style={{ padding: '5px' }}>16</td>
                </tr>
                <tr>
                  <td style={{ padding: '5px' }}>17</td>
                  <td style={{ padding: '5px' }}>18</td>
                  <td style={{ padding: '5px' }}>19</td>
                  <td style={{ padding: '5px' }}>20</td>
                  <td style={{ padding: '5px' }}>21</td>
                  <td style={{ padding: '5px' }}>22</td>
                  <td style={{ padding: '5px' }}>23</td>
                </tr>
                <tr>
                  <td style={{ padding: '5px' }}>24</td>
                  <td style={{ padding: '5px' }}>25</td>
                  <td style={{ padding: '5px' }}>26</td>
                  <td style={{ padding: '5px' }}>27</td>
                  <td style={{ padding: '5px' }}>28</td>
                  <td style={{ padding: '5px' }}>29</td>
                  <td style={{ padding: '5px' }}>30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
