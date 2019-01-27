import { Router } from 'express';
import { callClient } from '.'


const router = Router();

router.post('/', (req, res) => {
  callClient();
  res.json({ message: 'blob' });
});

const homeController = router;
export { homeController };