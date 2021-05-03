const Sequelize = require("sequelize");

const Payment = sequelize.define(
  "payment",

  {
    member_id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    amount_paid: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    paid_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    issue_date: {
      type: Sequelize.DATE,
      allowNull: false,

      sequelize,
      tableName: "payment",
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
