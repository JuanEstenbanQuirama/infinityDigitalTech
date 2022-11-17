import React, { useState } from "react";

const ModalFilter = ({ users, update }) => {
  const [filter, setFilter] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [order, setOrder] = useState("");
  const [orderValue, setOrderValue] = useState("");

  console.log(users)
  console.log(update)

  return (
    <div>
      <div>
        <input type="checkbox" name="" id="btn-modal" />
        <div className="container-filters-modal">
          <label htmlFor="btn-modal" className="lbl-modal">
            Open filters
          </label>
        </div>
        <div className="modal">
          <div className="container">
            <header style={{ color: "black" }}>Select a filter</header>
            <label id="close-modal" htmlFor="btn-modal">
              X
            </label>
            <form>
              <div >
                <div className="contenido-filter-by">
                  <select id="" onChange={(e) => setFilter(e.target.value)}>
                    <option value="">Filter by</option>
                    <option value="name">Name</option>
                    <option value="company">Company</option>
                    <option value="city">City</option>
                  </select>
                  {filter == "name" && (
                    <select onChange={(e) => setFilterValue(e.target.value)}>
                      <option value="">Select name</option>

                      {users.map((name) => (
                        <option key={name.id}>{name.name}</option>
                      ))}
                    </select>
                  )}
                  {filter == "city" && (
                    <select onChange={(e) => setFilterValue(e.target.value)}>
                      <option value="">Select a city</option>
                      {users.map((name) => (
                        <option key={name.id}>{name.address.city}</option>
                      ))}
                    </select>
                  )}
                  {filter == "company" && (
                    <select onChange={(e) => setFilterValue(e.target.value)}>
                      <option value="">Select a company</option>
                      {users.map((name) => (
                        <option key={name.id}>{name.company.name}</option>
                      ))}
                    </select>
                  )}
                </div>
                <div className="contenido-order-by">
                  <select onChange={(e) => setOrder(e.target.value)}>
                    <option value="">Order by</option>
                    <option value="name">Name</option>
                    <option value="username">Username</option>
                    <option value="city">City</option>
                  </select>
                  <select onChange={(e) => setOrderValue(e.target.value)}>
                    <option value="">Select an option</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                  </select>
                </div>
              </div>
              <button className="btn-delete-filters" value="reset" type="reset">
                Delete filters
              </button>
              <div
                id="container-accept-filters"
                style={{ position: "fixed", bottom: "15%" }}
              >
                <button
                  type="button"
                  onClick={(e) =>
                    update({
                      key: filter,
                      value: filterValue,
                      keyOrder: order,
                      valueOrder: orderValue,
                    })
                  }
                >
                  <label
                    id="label-accept-filters"
                    htmlFor="btn-modal"
                    style={{
                      height: "40px",
                      width: "100px",
                      paddingTop: "10px",
                    }}
                  >
                    Apply filters
                  </label>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilter;
