const createEvent = require('../handlers/createevent')
const validateEvent = require('../models/validateEvent.js')

module.exports = (req, res) => {
  validateEvent(req)
    .then(() => createEvent(req.body))
    .then(event => {
      if (!event) {
        throw new Error('There was a problem adding the event to the database')
      } else {
        res.redirect(`/event/${event.title}`)
      }
    })
    .catch((err) => {
      console.log(err)
      res.render('addevent', {
        err: err.message,
        input: req.body })
    })
}
