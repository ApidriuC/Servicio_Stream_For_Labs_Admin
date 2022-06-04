import { Router } from 'express';
import AdminRouter from './admin.route';

const router = Router();
const prefix: string = '/api';

router.use(`${prefix}/admin`, AdminRouter);

export default router;
