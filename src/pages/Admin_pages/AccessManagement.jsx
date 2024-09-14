import React, { useState } from 'react';

const AccessManagementPage = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", projects: 12, expires: "2025-05-01", role: "Administrator" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", projects: 8, expires: "2024-08-15", role: "Developer" },
  { id: 3, name: "Carol White", email: "carol@example.com", projects: 5, expires: "2023-11-30", role: "Designer" },
  { id: 4, name: "David Brown", email: "david@example.com", projects: 15, expires: "2024-12-22", role: "Project Manager" },
  { id: 5, name: "Eva Green", email: "eva@example.com", projects: 7, expires: "2025-02-19", role: "Quality Assurance" },
  { id: 6, name: "Frank Jones", email: "frank@example.com", projects: 9, expires: "2023-09-10", role: "Support Staff" },
  { id: 7, name: "Grace Davis", email: "grace@example.com", projects: 11, expires: "2025-06-07", role: "Data Analyst" },
  { id: 8, name: "Henry Miller", email: "henry@example.com", projects: 14, expires: "2024-01-01", role: "Administrator" },
  { id: 9, name: "Isla Young", email: "isla@example.com", projects: 13, expires: "2023-12-31", role: "Developer" },
  { id: 10, name: "Jake Hall", email: "jake@example.com", projects: 6, expires: "2025-03-23", role: "Designer" },
  { id: 11, name: "Lily King", email: "lily@example.com", projects: 10, expires: "2024-07-15", role: "Project Manager" },
  { id: 12, name: "Max Wilson", email: "max@example.com", projects: 4, expires: "2023-10-05", role: "Quality Assurance" }
]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ marginBottom: '20px', fontSize: '22px', fontWeight: 'bold', color: '#333' }}>
        Members ({members.length})
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <button style={{ padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px' }}>
          Add member
        </button>
        <button style={{ padding: '10px 15px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px' }}>
          Edit roles
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee', textAlign: 'left' }}>
            <th style={{ padding: '12px' }}>Account</th>
            <th style={{ padding: '12px' }}>Projects</th>
            <th style={{ padding: '12px' }}>Access expires</th>
            <th style={{ padding: '12px' }}>Role</th>
            <th style={{ padding: '12px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id} style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '12px' }}>{member.name} ({member.email})</td>
              <td style={{ padding: '12px' }}>{member.projects}</td>
              <td style={{ padding: '12px' }}>{member.expires}</td>
              <td style={{ padding: '12px' }}>{member.role}</td>
              <td style={{ padding: '12px' }}>
                <button style={{ backgroundColor: 'transparent', border: 'none', color: 'blue', cursor: 'pointer',padding: '6px' }}>Edit</button>
                <button style={{ backgroundColor: 'transparent', border: 'none', color: 'red', cursor: 'pointer' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccessManagementPage;
