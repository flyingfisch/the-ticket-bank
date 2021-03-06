const db = require('../dbConnection.js')

module.exports = (body) => {
  let { title, shortdesc, longdesc, venue, location, startdatetime, enddatetime, minage, ticketsavailable, ticketname, additionalinfo, maxallocation } = body
  let startdate = startdatetime.split(' ')[0]
  let starttime = startdatetime.split(' ')[1]
  let enddate = enddatetime.split(' ')[0]
  let endtime = enddatetime.split(' ')[1]

  const sql = `INSERT INTO events (title, short_desc, long_desc, venue, location, event_date, start_time, end_date, end_time, min_age, tkts_available, tkt_name, info, max_allocation) VALUES ($1, $2, $3, $4, $5, to_date($6,'DD-MM-YYYY'), $7, to_date($8,'DD-MM-YYYY'), $9, $10, $11, $12, $13, $14) RETURNING title;`

  return db.query(sql, [title, shortdesc, longdesc, venue, location, startdate, starttime, enddate, endtime, minage, ticketsavailable, ticketname, additionalinfo, maxallocation])
}
