class Database {
  constructor() {
    this.db = {
      resource: undefined
    };
  }
  setResource(resource) {
    this.db.resource = resource;
  }
  getResource() {
    return this.db.resource;
  }
}

module.exports = Database;
