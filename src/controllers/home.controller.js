import { Router } from 'express';
import { callClient } from '.';
import fs from 'fs';
  

const router = Router();

router.post('/', (req, res) => {
  var imagePath = 'myImage.jpg'

  console.log(req.files.files);

  req.files.files.mv(imagePath, function(err) {
    if (err)
      return res.status(500).send(err);
  });

  callClient(imagePath);
  res.json({ message: 'blob' });
});

const homeController = router;
export { homeController };