exports.circleTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

  <circle cx="150" cy="100" r="100" fill="{{shapeColor}}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="{{textColor}}">{{textContent}}</text>

</svg>`;

exports.triangleTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

  <polygon points="150,50 100,150 200,150" fill="{{shapeColor}}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="{{textColor}}">{{textContent}}</text>

</svg>`;

exports.squareTemplate = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">

  <rect x="100" y="100" width="100" height="100" fill="{{shapeColor}}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="{{textColor}}">{{textContent}}</text>

</svg>`;

