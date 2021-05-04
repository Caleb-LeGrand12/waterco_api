import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import Members from "../models/member.model.js";

dotenv.config();

//Add a Member - Register
export async function addMember(req, res) {
  try {
    bcrypt.hash(req.body.Password, 10).then(async (hash) => {
      let userObj = {
        Email: req.body.Email,
        Password: hash,
        FirstName: req.body.First_name,
        LastName: req.body.Last_name,
      };
      let member = await Members.create(userObj);
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
    });
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
    let aMember = await Members.findAll({
      where: { Member_ID: req.params.id },
    });
    if (aMember) {
      res.json({
        success: true,
        message: "Member record retrieved successfully",
        data: aMember,
      });
    } else {
      res.json({
        success: true,
        message: "No Member record found.",
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
    let updatedMember = await Members.update(req.body, {
      where: { Member_ID: req.params.id },
    });
    if (updatedMember) {
      res.json({
        success: true,
        message: "Member records updated successfully",
        data: updatedMember,
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

//Delete a member
export async function deleteMember(req, res) {
  try {
    let memberToDelete = await Members.findAll({
      where: { Member_ID: req.params.id },
    });
    if (memberToDelete) {
      let deletedMember = await Members.destroy({
        where: { Member_ID: req.params.id },
      });
      if (deletedMember) {
        res.json({
          success: true,
          message: "Member records deleted successfully",
        });
      } else {
        res.json({
          success: true,
          message: "No Member records found.",
        });
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

// member login
export async function signIn(req, res) {
  try {
    let member = await Members.findOne({
      where: { Email: req.body.Member_email },
    });
    if (!member) {
      return res.status(401).json({
        status: failed,
        message: "Authentication Failed: Member with email address not found.",
      });
    }
    bcrypt
      .compare(req.body.Member_password, member.Password)
      .then((response) => {
        if (!response) {
          return res.status(401).json({
            status: failed,
            message: "Authentication Failed: Incorrect password.",
          });
        }
        // let authToken = jwt.sign({ Email: user.Email, UserID: user.UserID },
        //     process.env.AUTH_KEY, { expiresIn: "1h" });
        return res.status(200).json({
          status: true,
          message: "User authentication successful",
          member: {
            FirstName: user.First_name,
            LastName: user.Last_name,
            Email: user.Member_email,
            MemberID: user.User_ID,
          },
          // token: authToken,
          expiresIn: 3600,
        });
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}

//Update member password
export async function updateMemberPass(req, res) {
  try {
    bcrypt.hash(req.body.Member_password, 10).then(async (hash) => {
      let memberObj = {
        Member_password: hash,
      };
      let member = await Members.update(memberObj, {
        where: { Member_ID: req.params.id },
      });
      if (member) {
        res.status(200).json({
          success: true,
          message: "User password updated successfully",
          data: user,
        });
      } else {
        res.status(200).json({
          success: true,
          message: "User password could not be updated at this time",
        });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Oopss! Something is wrong...",
    });
  }
}
