//[using promises] - wrapper for all our req, res functions
const asynchandler = (reqHandler) => (req, res, next) => {
    Promise.resolve(reqHandler(req, res, next)).catch(err =>next(err))
}


//[using try catch] - it is just a wrapper function for all our req, res functions
const asyncHandler = (fnc) => { async(req, res, next) => {
    try{
        await fnc(req, res, next);

    }
    catch(err){
        res.send(err.code).json({
            suceess: false,
            message: err.message
        })

    }
}

}


export {asyncHandler};