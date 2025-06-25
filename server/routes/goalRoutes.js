import {Router} from 'express';

const router = Router();

router.get('/', (req, res)=>{
    res.json([
        {id:1, title:"Learn React", description:"Complete React basics and projects"},
        {id:2, title:"Build Portfolio", description:"Design and Deploy personal website"},
    ])
})

export default router;