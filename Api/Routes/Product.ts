import { Router } from 'express';
import { AuthRegister } from '../Controllers/Product';

const router = Router();

router.get("/register", AuthRegister);


export { router };