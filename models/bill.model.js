const Sequelize = require("sequelize");

const Bills = sequelize.define(
  "bills",

  {
    Bill_id: {
      autoIncrement: true,
      type: Sequelize.INT,
      allowNull: false,
      primaryKey: true,
    },
    Premise_ID: {
      type: Sequelize.INT,
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
      tableName: "bills",
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "Bill_ID" }],
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
          fields: [{ name: "User_ID" }],
        },
      ],
    },
  }
);

export default Bills;
