// shapes.js
class Circle {
    constructor(shapeColor, textColor, textContent) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.textContent = textContent;
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
        </svg>`;
    }
  }
  
  class Triangle {
    constructor(shapeColor, textColor, textContent) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.textContent = textContent;
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <polygon points="150,30 50,170 250,170" fill="${this.shapeColor}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
        </svg>`;
    }
  }
  
  class Square {
    constructor(shapeColor, textColor, textContent) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.textContent = textContent;
    }
  
    render() {
      return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
        </svg>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  

