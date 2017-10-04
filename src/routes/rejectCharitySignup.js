const fetchEmailFromRandString = require('../database/sql-queries/fetchEmailFromRandString')
const sendEmailCharityRejected = require('../models/sendEmailCharityRejected')
const setCharityVerifiedFalse = require('../database/sql-queries/setCharityVerifiedFalse')

module.exports = (req, res) => {
  let reqRandomString = req.params.userinfo
  fetchEmailFromRandString(reqRandomString)
    .then((rows) => {
      let email = rows[0].email
      if (email) {
        setCharityVerifiedFalse(email).then((email) => sendEmailCharityRejected(email))
      } else {
        return Promise.reject(new Error('There was a problem with your request'))
      }
    })
    .then(() => {
      res.render('adminRejectsCharity')
    })
    .catch(err => console.log(err))
}
