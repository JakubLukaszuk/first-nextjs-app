import {NextApiRequest, NextApiResponse} from 'next';
import jws from 'jsonwebtoken'

export default function (req: NextApiRequest, res: NextApiResponse)
{
    const KEY = 'KEY'
    if(!req.body){
        res.statusCode = 404
        res.end(Error);
        return
    }

    const {username, password} = req.body

    res.json({
        token: jws.sign({
            username,
            admin: username == 'admin'
        }, KEY)
    })
}