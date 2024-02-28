import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
// import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "male",
    phoneNumber: "",
    modeOfContact: [],
    maritalStatus: "single",
    immediateJoiner: "No",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormData({ ...formData, [name]: [...formData[name], value] });
      } else {
        const updatedModes = formData[name].filter((mode) => mode !== value);
        setFormData({ ...formData, [name]: updatedModes });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = formData;
      setEmployees(updatedEmployees);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "male",
        phoneNumber: "",
        modeOfContact: [],
        maritalStatus: "single",
        immediateJoiner: "No",
      });
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setEmployees([...employees, formData]);
      setFormData({
        firstName: "",
        middleName: "",
        lastName: "",
        gender: "male",
        phoneNumber: "",
        modeOfContact: [],
        maritalStatus: "single",
        immediateJoiner: "No",
      });
    }
  };

  const handleEdit = (index) => {
    setFormData(employees[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((employee, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const handleClear = () => {
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      gender: "male",
      phoneNumber: "",
      modeOfContact: [],
      maritalStatus: "single",
      immediateJoiner: "No",
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  return (
    <div className="App">
      <h1>Employees List</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-3">
          <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>

          </div>
          <div className="col-3">
        <label>
          Middle Name:
          <input
            type="text"
            name="middleName"
            value={formData.middleName}
            onChange={handleChange}
          />
        </label>

          </div>
          <div className="col-3">
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>

          </div>
          <div className="col-3">
        <label>
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            Female
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="others"
              checked={formData.gender === "others"}
              onChange={handleChange}
            />
            Others
          </label>
        </label>

          </div>
          <div className="col-3">
          <label>
          Phone Number:
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </label>

          </div>
          <div className="col-3">
          <label>
          Mode of Contact:
          <label>
            <input
              type="checkbox"
              name="modeOfContact"
              value="email"
              checked={formData.modeOfContact.includes("email")}
              onChange={handleChange}
            />
            Email
          </label>
          <label>
            <input
              type="checkbox"
              name="modeOfContact"
              value="phone"
              checked={formData.modeOfContact.includes("phone")}
              onChange={handleChange}
            />
            Phone
          </label>
        </label>

          </div>
          <div className="col-3"><label>
          Marital Status:
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
          >
            <option value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
            <option value="widowed">Widowed</option>
          </select>
        </label>

          </div>
          <div className="col-3">
          <label>
          Immediate Joiner:
          <label>
            <input
              type="radio"
              name="immediateJoiner"
              value="Yes"
              checked={formData.immediateJoiner === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="immediateJoiner"
              value="No"
              checked={formData.immediateJoiner === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </label>

          </div>
          <div className="col-3">

          </div>
          <div className="col-3">
          </div>
          <div className="col-3">

          </div>
          <div className="col-3">
          <div>
          <button type="submit">{isEditing ? "Update" : "Submit"}</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
          </div>
        
          
        
        
        
       
        </div>
        
      </form>
      <Table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Phone Number</th>
            <th>Mode of Contact</th>
            <th>Marital Status</th>
            <th>Immediate Joiner</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.middleName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.gender}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.modeOfContact.join(", ")}</td>
              <td>{employee.maritalStatus}</td>
              <td>{employee.immediateJoiner}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
