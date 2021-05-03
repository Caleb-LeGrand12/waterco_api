import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Members = sequelize.define(
  "member",

  {
    Member_ID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    First_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    Last_name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    Member_email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    Member_password: {
      type: Sequelize.INTEGER,
      allowNull: false,

      sequelize,
      tableName: "member",
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
