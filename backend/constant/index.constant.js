const http_code = {
  ok: 200,
  error: 201,
  forbidden: 400,
  badrequest: 404,
  internalServerError: 500,
};

const port = {
  // server: process.env.PORT
  server: 3002,
};

const messages = {
  blank: "",
  useralresyexist: "User Already Exist",
  userdoesnotexist: "User does not Exist",
  usernotfound: "User Not Found",
  invalidpassword: "Invalid Password",
  internalservererror: "Internal Server Error",
  nodatafound: "No Data Found",
  badrequest: "Bad Request",
  conn: "Database connected...",
  welive: `we live on ${port.server}`,
  onlyextfilesupported: "Only jpg & png file supported",
  tokenmustrequired: "Token Must Required",
  invalidtoken: "Invalid Token",
  userunfollow: "User Unfollowed",
};

const db = {
  localdb: process.env.DB,
  livedb: "",
};

const path1 = {
  Basepath: `http://localhost:${port.server}`,
};

module.exports = {
  http_code,
  messages,
  db,
  port,
  path1,
};
