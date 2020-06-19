import config from "../config";

const PeopleService = {
  getPeople() {
    return fetch(`${config.REACT_APP_API_BASE}/people`)
      .then((res) => res.json())
      .then((people) => {
        return people;
      });
  },
  addMe(newName) {
    return fetch(`${config.API_ENDPOINT}/people`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newName),
    }).then((res) => {
      if (!res.json()) {
        alert("Name could not be added. Check connection and try again");
      }
      alert("You have been added to the adoption queue");
    });
  },
  deleteMe(name) {
    return fetch(`${config.API_ENDPOINT}/people/${name}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  },
};

export default PeopleService;
