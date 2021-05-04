import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Routes = sequelize.define(
  "route",
  {
    Route_ID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Route_name: {
      type: Sequelize.STRING(255),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "route",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "Route_ID" }],
      },
    ],
  }
);
export default Routes;
