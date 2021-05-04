import Bills from "../models/bill.model.js";

//Add a Bill
export async function captureBill(req, res) {
  try {
    let bill = await Bills.create(req.body);
    if (bill) {
      res.status(200).json({
        success: true,
        message: "Bill created successfully",
        data: bill,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Bill could not be created at this time",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//View a bill
export async function viewBill(req, res) {
  try {
    let aBill = await Bills.findAll({ where: { Bill_ID: req.params.id } });
    if (aBill) {
      res.json({
        success: true,
        message: "Bill record retrieved successfully",
        data: Abill,
      });
    } else {
      res.json({
        success: true,
        message: "No bill record found.",
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}
