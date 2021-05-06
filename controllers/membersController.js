import Members from "../models/member.model.js";
import bcrypt from "bcryptjs";

//Add a Member
export async function addMember(req, res) {
  try {
    // const hashedPasssword = await bcrypt.hash(req.body.password, 10);
    let member = await Members.create(req.body);
    if (member) {
      res.status(200).json({
        success: true,
        message: "Member created successfully",
        data: member,
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Member could not be created at this time",
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

//View a member
export async function viewMember(req, res) {
  try {
    let allmembers = await Members.findAll({
      where: { Member_ID: req.params.id },
    });
    if (allmembers) {
      res.json({
        success: true,
        message: "Member records retrieved successfully",
        data: allmembers,
      });
    } else {
      res.json({
        success: true,
        message: "No Member records found.",
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

//Update member record
export async function updateMember(req, res) {
  try {
    let updatemember = await Members.update(req.body, {
      where: { Member_ID: req.params.id },
    });
    if (updatemember) {
      res.json({
        success: true,
        message: "Member updated successfully",
        data: updatemember,
      });
    } else {
      res.json({
        status: true,
        message: "Member not found!!",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oops Something's wrong...",
    });
  }
}

//Delete a member
export async function deleteMember(req, res) {
  try {
    let deletemember = await Members.destroy({
      where: { Member_ID: req.params.id },
    });
    if (deletemember) {
      res.json({
        success: true,
        message: "Member deleted successfully",
      });
    } else {
      res.json({
        success: true,
        message: "Sorry Member not found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Oops!! Something's wrong",
    });
  }
}
