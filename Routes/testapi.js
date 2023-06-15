const express = require('express')

const TestRouter = express.Router()

const test = require('../Controllers/testapi')

TestRouter.route('/').get(test)


module.exports = TestRouter;