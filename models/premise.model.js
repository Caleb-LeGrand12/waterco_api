import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Premises = sequelize.define(
  "premise",
  {
    Premise_ID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    Member_ID: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "member",
        key: "Member_ID",
      },
    },
    Route_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "route",
        key: "Route_ID",
      },
    },
  },
  {
    sequelize,
    tableName: "premise",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "Premise_ID" }],
      },
      {
        name: "Member_ID",
        using: "BTREE",
        fields: [{ name: "Member_ID" }],
      },
      {
        name: "Route_ID",
        using: "BTREE",
        fields: [{ name: "Route_ID" }],
      },
    ],
  }
);
export default Premises;
