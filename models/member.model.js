const Sequelize = require("sequelize");

const Members = sequelize.define(
  "members",

  {
    member_id: {
      autoIncrement: true,
      type: Sequelize.INT,
      allowNull: false,
      primaryKey: true,
    },
    member_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    member_email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    member_phonenumber: {
      type: Sequelize.INT,
      allowNull: false,

      sequelize,
      tableName: "members",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "member_id" }],
        },
      ],
    },
  }
);

export default Members;
