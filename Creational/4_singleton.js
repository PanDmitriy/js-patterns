class Database {
  constructor(data) {
    if (Database.exists) {
      return Database.instance;
    }
    Database.instance = this;
    Database.exists = true;
    this.data = data;
  }
  getData() {
    return this.data;
  }
}

const mongo = new Database({ nameBD: 'Mongo', array: [1,2,3,4]});
console.log(mongo.getData());

const mySQL = new Database( 'MySQL' );
console.log(mySQL.getData())