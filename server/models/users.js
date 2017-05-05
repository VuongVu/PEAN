module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    username: {
      type: DataTypes.STRING(30)
    },
    password: {
      type: DataTypes.STRING(30)
    }
  }, {
    timestamps: false
  });

  return Users;
};