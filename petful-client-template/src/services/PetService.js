import config from "../config";

const PetService = {
  getPets() {
    let error;
    return fetch(`${config.API_ENDPOINT}/pets`, {
      method: "GET",
      headers: {},
    })
      .then((res) => {
        if (!res.ok) {
          error = { code: res.status };
        }
        return res.json();
      })
      .then((data) => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }
        return data;
      });
  },
  deletePet(type) {
    let error;
    return fetch(`${config.API_ENDPOINT}/pets/${type}`, {
      method: "DELETE",
      headers: {},
    }).then((data) => {
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }
      return data;
    });
  },
};

export default PetService;
