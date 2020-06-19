import config from "../config";

const PetService = {
  getDog() {
    return fetch(`${config.REACT_APP_API_BASE}/pets`)
      .then((res) => res.json())
      .then((data) => {
        return data.dog;
      });
  },
  getCat() {
    return fetch(`${config.REACT_APP_API_BASE}/pets`)
      .then((res) => res.json())
      .then((data) => {
        return data.cat;
      });
  },
  delDog() {
    return fetch(`${config.REACT_APP_API_BASE}/pets?type=dog`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return Promise.resolve();
    });
  },
  delCat() {
    return fetch(`${config.REACT_APP_API_BASE}/pets?type=cat`, {
      method: "DELETE",
    }).then((res) => {
      if (!res.ok) {
        return res.json().then((e) => Promise.reject(e));
      }
      return Promise.resolve();
    });
  },
};

export default PetService;
