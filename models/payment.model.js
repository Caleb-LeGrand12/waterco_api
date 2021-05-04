import Sequelize from "sequelize";
import { sequelize } from "../db/dbConnect.js";

const Payments = sequelize.define(
  "payment",

  {
    Payment_ID: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },

    Bill_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "billing",
        key: "BID",
      },
    },
    Amount_Paid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Total_Amount: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    Premise_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "premise",
        key: "Premise_ID",
      },
    },
  },
  {
    sequelize,
    tableName: "payment",
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "Payment_ID" }],
      },
      {
        name: "Bill_ID",
        using: "BTREE",
        fields: [{ name: "Bill_ID" }],
      },
      {
        name: "Premise_ID",
        using: "BTREE",
        fields: [{ name: "Premise_ID" }],
      },
    ],
  }
);

export default Payments;
