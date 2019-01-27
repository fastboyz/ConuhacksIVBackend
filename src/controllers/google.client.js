import * as vision from '@google-cloud/vision';
import fs from 'fs';

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file

var callClient = (image, res) => {
  // Get content from file
  var contents = fs.readFileSync("./src/objectBd.json");
  // Define to JSON type
  var items = JSON.parse(contents);

  client
    .labelDetection(image)
    .then(results => {
      var found = false;
      var labels = results[0].labelAnnotations;

      labels.forEach(label => {
        console.log(label.description);
        items.forEach(item => {
          if (item.material_synonyms != null){
            if (item.material_synonyms.toLowerCase().includes(label.description.toLowerCase())){
              if (!found) {
                found = true;
                console.log(`found: ${found}`)
                res.json(item);
              }
            }
          } 
        });
    });
  })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

export { callClient };