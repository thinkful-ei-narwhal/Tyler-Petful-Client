import config from "../config";

const PeopleService = {
  getPeople() {
    return fetch(`${config.REACT_APP_API_BASE}/people`)
      .then((res) => res.json())
      .then((data) => {
        return data.people;
      });
  },
  addMe(newName) {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newName }),
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
  deleteMe() {
    return fetch(`${config.REACT_APP_API_BASE}/people`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return res.json();
    });
  },
};

export default PeopleService;
