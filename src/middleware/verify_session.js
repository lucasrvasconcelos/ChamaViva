import session from 'express-session';

async function mysession (req, res, next) {
    if(req.session.user){
        next()
    }else{
        res.redirect("/new")
    }

    
}

export default mysession;