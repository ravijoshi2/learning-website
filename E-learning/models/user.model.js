const db = require('../utils/db');

const TBL_USERS = 'user_profile';
module.exports = {
    all() {
      return db.load(`select * from ${TBL_USERS}`);
    },
  
    async single(id) {
      const rows = await db.load(`select * from ${TBL_USERS} where id = ${id}`);
      if (rows.length === 0)
        return null;
  
      return rows[0];
    },
  
    async singleByUserName(username) {
      const rows = await db.load(`select * from ${TBL_USERS} where UserName = '${username}'`);
      if (rows.length === 0)
        return null;
      return rows[0];
    },
    add(entity) {
      return db.add(entity, TBL_USERS)
    },
    editName(Username, fullName) {
      const condition = { Username: Username };
      const entity = {FullName: fullName}
      // var sql = `UPDATE ${TBL_USERS} SET FullName = '${fullName}' WHERE UserName = '${Username}'`
      return db.patch(entity, condition, TBL_USERS);
    },
    changePassword(Username, NewPassword) {
      const condition = { Username: Username };
      const entity = {password: NewPassword}
      // var sql = `UPDATE ${TBL_USERS} SET FullName = '${fullName}' WHERE UserName = '${Username}'`
      return db.patch(entity, condition, TBL_USERS);
    }
  };