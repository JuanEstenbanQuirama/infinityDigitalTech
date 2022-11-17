import React, { useState } from "react";
import ModalFilter from "./ModalFilter";
import apiFilter from "../utils/filter";

const UsersList = ({ users }) => {

  const updateFilter = (filter) => {
    setFilter(filter);
  };

  const [filter, setFilter] = useState("");

  const usersFiltered = apiFilter(users, filter);
  return (
    <div id="container-everything">
      <h1>Users list</h1>
      <ModalFilter users={users} update={updateFilter} />
      <div className="container-btn-clear">
        {filter.key && (
          <button id="btn-clear" onClick={(e) => setFilter("")}>
            Delete Filters
          </button>
        )}
      </div>

      <table className="desktop-table">
        <thead className="table-head">
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Website</th>
            <th>Company</th>
            <th>City</th>
          </tr>
        </thead>
        {usersFiltered.map((user) => (
          <tbody key={user.id} className="table-body">
            <tr>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
              <td>{user.address.city}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <div className="mobile-table">
        <div className="row">
          <div className="column">
            <div className="header">Name</div>
            {usersFiltered.map((user) => <div className="contenido">{user.name}</div>)}
          </div>
          <div className="column">
            <div className="header">Username</div>
            {usersFiltered.map((user) => <div className="contenido">{user.username}</div>)}
          </div>
          <div className="column">
            <div className="header">Email</div>
            {usersFiltered.map((user) => <div className="contenido">{user.email}</div>)}
          </div>
          <div className="column">
            <div className="header">Website</div>
            {usersFiltered.map((user) => <div className="contenido">{user.website}</div>)}
          </div>
          <div className="column">
            <div className="header">Company</div>
            {usersFiltered.map((user) => <div className="contenido">{user.company.name}</div>)}
          </div>
          <div className="column">
            <div className="header">City</div>
            {usersFiltered.map((user) => <div className="contenido">{user.address.city}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
