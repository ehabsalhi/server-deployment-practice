module.exports = (err ,req , res , next) =>{
     console.log("fahed");
     res.status(500).json({
          code:500,
          message : `Server Error ${err.message}`
     })
}