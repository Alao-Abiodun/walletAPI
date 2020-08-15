import express from 'express';
const router = express.Router();

import UserCtrl from '../controller/user.controller';

import auth from '../middleware/auth';
import validateInfo from '../middleware/validInfo';

router.post('/users/register', validateInfo, UserCtrl.signInUser);
router.post('/users/login', auth, UserCtrl.LoginUser);

export default router;

