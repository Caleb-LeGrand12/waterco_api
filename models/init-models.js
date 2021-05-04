// var DataTypes = require("sequelize").DataTypes;
// var _bill = require("./bill.model");
// var _member = require("./member.model");
// var _payment = require("./payment.model");
// var _premise = require("./premise.model");
// var _route = require("./routes.model");
// var _user = require("./user.model");

// function initModels(sequelize) {
//   var bill = _bill(sequelize, DataTypes);
//   var member = _member(sequelize, DataTypes);
//   var payment = _payment(sequelize, DataTypes);
//   var premise = _premise(sequelize, DataTypes);
//   var route = _route(sequelize, DataTypes);
//   var user = _user(sequelize, DataTypes);

//   bill.belongsTo(bill, { as: "Premise", foreignKey: "Premise_ID" });
//   bill.hasMany(bill, { as: "bills", foreignKey: "Premise_ID" });
//   payment.belongsTo(bill, { as: "Bill_idS", foreignKey: "Bill_id" });
//   bill.hasMany(payment, { as: "payments", foreignKey: "Bill_id" });
//   premise.belongsTo(member, { as: "Member", foreignKey: "Member_ID" });
//   member.belongsTo(premise, { as: "premises", foreignKey: "Member_ID" });
//   payment.belongsTo(premise, { as: "Premise", foreignKey: "Premise_ID" });
//   premise.hasMany(payment, { as: "payments", foreignKey: "Premise_ID" });
//   premise.belongsTo(route, { as: "RID_route", foreignKey: "Route_ID" });

//   return {
//     bill,
//     customer,
//     payment,
//     premise,
//     route,
//     user,
//   };
// }
// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
