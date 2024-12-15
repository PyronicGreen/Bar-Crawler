const con = require("./db_connect")

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS Event (
    EventID INT NOT NULL AUTO_INCREMENT,
    Eventname VARCHAR(100) NOT NULL,
    EventDescription VARCHAR(255) NOT NULL,
    EventCost DECIMAL(5,0),
    EventType VARCHAR(20),
    RSVPList VARCHAR(30),
    CONSTRAINT userPK PRIMARY KEY(eventID)
  );`

  await con.query(sql)
}

createTable()

// EVENT Example:
const event = {
  Eventname: "The Happiest Happy Hour",
  EventDescription: "Cheap beer and whiskey"
}


// CREATE an Event
async function create(event) {
  let sql = `
    INSERT INTO Event (Eventname, EventDescription, EventCost)
    VALUES("${event.Eventname}", "${event.EventDescription}", "${event.EventCost}")
  `  
  await con.query(sql)
  let newUser = await login(user)
  return newUser //issue fixed from class: removed [0] since login function returns this already
}

//D for Delete - delete event
async function deleteEvent(event) {
  let sql = `
    DELETE from Event
    WHERE Eventname="${event.Eventname}"
  `
  await con.query(sql)
}

// CRUD functions will go here 
//R for READ -- get all events
async function getAllEvents() {
  let sql = `SELECT * FROM Event;`
  return await con.query(sql)
}

module.exports ={ getAllEvents, create, deleteEvent }