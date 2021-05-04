import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Users = sequelize.define(
  "user",
  {
    User_ID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    First_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    Last_name: {
      type: Sequelize.STRING(100),
      allowNull: false,
    },
    Email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    Password: {
      type: Sequelize.STRING(255),
      allowNull: false,
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
        fields: [{ name: "User_ID" }],
      },
    ],
  }
);

export default Users;
