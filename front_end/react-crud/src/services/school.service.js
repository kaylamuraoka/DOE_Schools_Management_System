import http from "./../http-common";

class SchoolDataService {
  getAll() {
    return http.get("/schools");
  }

  get(id) {
    return http.get(`/schools/${id}`);
  }

  create(data) {
    return http.get("/schools", data);
  }

  update(id, data) {
    return http.put(`schools/${id}`, data);
  }

  delete(id) {
    return http.delete(`/schools/${id}`);
  }

  deleteAll() {
    return http.delete(`/schools`);
  }

  findByName(name) {
    return http.get(`/schools?name=${name}`);
  }
}
export default new SchoolDataService();
