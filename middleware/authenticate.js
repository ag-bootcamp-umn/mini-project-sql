
function authenticate(req, res, next){
  const isLoggedIn = true

  if( isLoggedIn ){
    next()
  } else {
    res.status(401).json({ status: "Ravens still beat the Texans." })
  }
}


module.exports = authenticate