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
};

export default PetService;
