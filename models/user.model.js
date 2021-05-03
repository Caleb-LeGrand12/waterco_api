import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Users = sequelize.define(
  "user",
  {
    UserID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    FirstName: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    LastName: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    Email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    Password: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "user",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "UserID" }],
      },
    ],
  }
);

export default Users;
