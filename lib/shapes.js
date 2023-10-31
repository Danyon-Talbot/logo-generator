const containerWidth = 300; // sets width of all containers
const containerHeight = 200; // sets height of all containers




class Circle {
    // Takes user inputs and assigns them to the corresponding variables in this render
    constructor(shapeColor, textColor, textContent) {
      this.shapeColor = shapeColor;
      this.textColor = textColor;
      this.textContent = textContent;
    }
  
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${containerWidth}" height="${containerHeight}">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
</svg>`;
    }
  }
  

class Triangle {
    // Takes user inputs and assigns them to the corresponding variables in this render
    constructor(shapeColor, textColor, textContent) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.textContent = textContent;
    }
  
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${containerWidth}" height="${containerHeight}">
<polygon points="150,30 50,170 250,170" fill="${this.shapeColor}" />
<text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
</svg>`;
    }
  }
  
class Square {
    // Takes user inputs and assigns them to the corresponding variables in this render
    constructor(shapeColor, textColor, textContent) {
    this.shapeColor = shapeColor;
    this.textColor = textColor;
    this.textContent = textContent;
    }
  
    render() {
        const squareSize = 150; // Sets Square lenght/width

        // Centres the square in the screen
        const x = 75; // Sets x coordinate
        const y = 25; // Sets y coordinate
        
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${containerWidth}" height="${containerHeight}">
<rect x="${x}" y="${y}" width="${squareSize}" height="${squareSize}" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>
</svg>`;
    }
  }
  
  module.exports = { Circle, Triangle, Square };
  

