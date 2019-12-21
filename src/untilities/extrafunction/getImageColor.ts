export interface getImageColorProps {
  r: number,
  g: number,
  b: number
}

export function getImageColor(imgEl: HTMLImageElement): getImageColorProps {

  var blockSize = 5,  // only visit every 5 pixels
    defaultRGB: getImageColorProps = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = <HTMLCanvasElement>document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = 0,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    count = 0;

  if (!context) {
    return defaultRGB;
  }


  height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
    console.log("kesini")
  } catch (e) {
    /* security error, img on diff domain */
    console.log("ke catch", e)
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];

  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count + 0.5);
  rgb.g = ~~(rgb.g / count + 0.5);
  rgb.b = ~~(rgb.b / count + 0.5);
  console.log(rgb)
  return rgb;
}