try {
  require('dotenv').config();
  const express = require('express');
  const { body, validationResult } = require('express-validator');
  const app = express();
  const path = require('path');
  const cookieParser = require('cookie-parser');
  const cors = require('cors');
  const corsOptions = require('./config/corsOptions');
  const PORT = process.env.PORT || 3600;
  var bodyParser = require('body-parser');

  //middlewares

  // Validation middleware for ID
  const validateID = [
    body('memberId').isLength({ min: 6, max: 10 }).withMessage('ID should be between 6 and 10 characters'),
    body('memberId').isAlphanumeric().withMessage('ID should contain only alphanumeric characters'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json("member id is not valid");
      }
      next();
    }
  ];

  // Validation middleware for date
  const validateDate = [
    body('DateOfBirth').isDate().withMessage('Invalid date'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json("DateOfBirth is not valid");
      }
      next();
    }
  ];

  //Validation middleware for cellphone
  const validateCellphone = [
    body('cellNumber').matches(/^\d{10}$/).withMessage('Invalid cellphone number'),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json("cellNumber is not valid");
      }
      next();
    }
  ];


  app.use(cors(corsOptions));
  app.use(bodyParser.urlencoded());
  app.use(express.json());
  app.use(cookieParser());

  //routes
  app.post('/api/member', [
    validateID,
    validateCellphone,
    validateDate,
  ], (req, res) => {
    // If the request passes all validations,the request proceed with further logic
    res.json({ message: 'Registration successful' });
  });


  app.use("/api/member", require("./routes/memberRoutes"));
  app.use("/api/morbidity", require("./routes/morbidityRoutes"));
  app.use("/api/vaccination", require("./routes/vaccinationsRoutes"));
  app.use("/api/vaccine", require("./routes/vaccineRoute"));
  app.use("/api/upload", require("./routes/upload-router"));

  app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
      res.sendFile(path.join(__dirname, 'views', '404.html'));
    } else if (req.accepts('json')) {
      res.json({ message: '404 Not Found' });
    } else {
      res.type('txt').send('404 Not Found');
    }
  });

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
} catch (err) {
  console.error('Error starting server:', err);
}
