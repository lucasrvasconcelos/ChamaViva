import session from 'express-session';

async function mysession (req, res, next) {
    if(req.session.user){
        
    }else{
        // res.redirect("/new")
    }

    next()
}

export default mysession;