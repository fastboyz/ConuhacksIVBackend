import * as vision from '@google-cloud/vision';

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file

var callClient = (image) => {
  client
    .labelDetection(image)
    .then(results => {
      const labels = results[0].labelAnnotations;

      console.log('Labels:');
      labels.forEach(label => console.log(label.description));
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
}

export { callClient };