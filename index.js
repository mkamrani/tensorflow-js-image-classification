
async function predict() {
  console.log('Loading mobilenet...');
  // Load the pre-trained model
  let net = await mobilenet.load();

  // Make a prediction through the model on our image.
  let images = document.getElementsByTagName('img');
  for (var i = 0; i < images.length; i++) {
    const result = await net.classify(images[i]);
    console.log(images[i].src, result);
    document.getElementById(`img${i+1}_class`).innerText = result[0].className;
    document.getElementById(`img${i+1}_prob`).innerText = result[0].probability;
  }
}
