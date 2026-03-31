const { body, validateResult } = require("express-validator");

function validate (req, res, next) {
    const errors = validateResult(req);
    if (errors.length > 0) {
        return res.status(400).json({ errors: errors });
    }
    next();
}

const registerValidationRules = [
  body("userName")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  body("email").isEmail().withMessage("Email is not valid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters long"),
    validate
];

module.exports = {
    registerValidationRules
}
