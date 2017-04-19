// TODO: change production settings


module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './musichistory.db'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './musichistory.db',
    },
    useNullAsDefault: true
  }

};
