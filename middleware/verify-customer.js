
function verifyCustomer(req, res, next){
  
  req.username = "fred_flintstone"

  if( req.method.toLowerCase() === "get" ){
    next()
  } else {
    res.status(401).json({ status: "not allowed" })
  }
}

module.exports = verifyCustomer