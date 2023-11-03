import React, { useState, useEffect } from 'react';


function App() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => setEmployees(data.data));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Employee List</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by first name"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="card-container">
        {filteredEmployees.map((employee) => (
          <div key={employee.id} className="employee-card">
            <div className="employee-avatar">
              <span className="employee-id">{employee.id}</span>
              <img src={employee.avatar} alt="Avatar" />
            </div>
            <p className="employee-name">{employee.first_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
