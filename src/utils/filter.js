const apiFilter = (users, filter) => {
 
  if (filter.key == "name") {
    users = users.filter((user) => user.name == filter.value);
  }
  if (filter.key == "company") {
    users = users.filter((user) => user.company.name == filter.value);
  }
  if (filter.key == "city") {
    users = users.filter((user) => user.address.city == filter.value);
  }
  if(filter.keyOrder=="name"){
    users = users.sort((a, b) => a.name.localeCompare(b.name)) 
  }
  if(filter.keyOrder=="username"){
    users = users.sort((a, b) => a.username.localeCompare(b.username)) 
  }
  if(filter.keyOrder=="city"){
    users = users.sort((a, b) => a.address.city.localeCompare(b.address.city)) 
  }

  if(filter.valueOrder== "desc"){
    users = users.reverse()
}


  return users;
};

export default apiFilter;


