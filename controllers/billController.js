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
    let aBill = Bills.findAll({ where: { Bill_id: req.params.id } });
    if (aBill) {
      res.json({
        success: true,
        message: "Bill record retrieved successfully",
        data: aBill,
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

export async function viewAllBills(req, res) {
  try {
    let allBills = await Bills.findAll();
    if (allBills) {
      res.json({
        success: true,
        message: "Bill records retrieved successfully",
        data: allBills,
      });
    } else {
      res.json({
        success: true,
        message: "Bill records Not found.",
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
