const Sequelize = require("sequelize");

const Bills = sequelize.define(
  "bills",

  {
    bill_id: {
      autoIncrement: true,
      type: Sequelize.INT,
      allowNull: false,
      primaryKey: true,
    },
    premise_id: {
      type: Sequelize.INT,
      allowNull: false,
    },
    tarrif_id: {
      type: Sequelize.STRING(255),
      allowNull: false,

      sequelize,
      tableName: "bills",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "bill_id" }],
        },
      ],
    },
  }
);

export default Bills;
