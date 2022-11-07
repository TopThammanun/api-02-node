function auth(req, res, next) {
    const Token = req.header('Authorization');
    console.log(Token);
    if (!Token)
        return res.send({
            msg: 'Access denied',
        });

    const token = Token.split(' ')[1];

    if (!token)
        return res.send({
            msg: 'invalid token',
        });

    if (token !== process.env.ACCESS_TOKEN)
        return res.send({
            msg: 'invalid token',
        });

    next();
}

module.exports = auth;