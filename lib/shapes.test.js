const shapes = require('./lib/shapes.js');


describe('Triangle Rendering Test', () => {
    TextDecoderStream('Render Triangle With Color', () => {
        const triangle = new triangleTemplate();
        triangle.setColor("blue");
        expect(triangle.render()).toEqual(`<polygon points="150,30 50,170 250,170" fill="blue " />`);
    })
   
})



