import { sequelize } from "../db/dbConnect.js";
import Sequelize from "sequelize";

const Bills = sequelize.define(
  "bill",

  {
    Bill_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Premise_ID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "premise",
        key: "Premise_ID",
      },
    },
    Member_ID: {
      type: Sequelize.STRING(255),
      allowNull: false,
      references: {
        model: "member",
        key: "Member_ID",
      },

      sequelize,
      tableName: "bill",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "Bill_id" }],
        },
        // ibfk : innodb foreign key
        {
          name: "bills_ibfk_1",
          using: "BTREE",
          fields: [{ name: "Premise_ID" }],
        },
        {
          name: "bills_ibfk_2",
          using: "BTREE",
          fields: [{ name: "Member_ID" }],
        },
      ],
    },
  }
);

export default Bills;
