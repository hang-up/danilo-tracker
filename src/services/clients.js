const ClientsService = {
  getAllClients() {
    return JSON.parse(window.localStorage.getItem('users'));
  },
};

export { ClientsService };
