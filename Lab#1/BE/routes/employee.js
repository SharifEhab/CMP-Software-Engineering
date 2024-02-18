const express = require('express') //import express from 'express'
const router = express.Router() //router object of express

const {
  createEmployee,
  deleteEmployee,
  getEmployees,
} = require('../controllers/employee')

router.route('/').get(getEmployees).post(createEmployee)

router.route('/:id').delete(deleteEmployee)

module.exports = router //export router object
