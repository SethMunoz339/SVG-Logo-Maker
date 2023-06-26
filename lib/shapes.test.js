const { generateCircle, generateTriangle, generateSquare } = require('./shapes');

describe('Shape Generation', () => {
    
        it('should generate Circle SVG', () => {
            const expectedSvg = `<circle cx="150" cy="100" r="50" fill="#ff0000" />`;
            const generatedSvg = generateCircle('#ff0000');
            expect(generatedSvg).toBe(expectedSvg);
        });

        it('should generate Triangle SVG', () => {
            const expectedSvg = `<polygon points="150,50 100,150 200,150" fill="#0000ff" />`;
            const generatedSvg = generateTriangle('#0000ff');
            expect(generatedSvg).toBe(expectedSvg);
        });

        it('should generate Square SVG', () => {
            const expectedSvg = `<rect x="100" y="50" width="100" height="100" fill="#ff00ff" />`;
            const generatedSvg = generateSquare('#ff00ff');
            expect(generatedSvg).toBe(expectedSvg);
        });

        it('should generate Circle SVG with default color if shape color is blank', () => {
            const expectedSvg = `<circle cx="150" cy="100" r="50" fill="#000000" />`;
            const generatedSvg = generateCircle('');
            expect(generatedSvg).toBe(expectedSvg);
        });

        it('should generate Triangle SVG with default color if shape color is blank', () => {
            const expectedSvg = `<polygon points="150,50 100,150 200,150" fill="#000000" />`;
            const generatedSvg = generateTriangle('');
            expect(generatedSvg).toBe(expectedSvg);
        });

        it('should generate Square SVG with default color if shape color is blank', () => {
            const expectedSvg = `<rect x="100" y="50" width="100" height="100" fill="#000000" />`;
            const generatedSvg = generateSquare('');
            expect(generatedSvg).toBe(expectedSvg);
        });

        it('should generate Circle SVG', () => {
            const shapeColor = 'red';
            const expectedSvg = `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
            const generatedSvg = generateCircle(shapeColor);
            expect(generatedSvg).toBe(expectedSvg);
        });

        it('should generate Triangle SVG', () => {
            const shapeColor = 'blue';
            const expectedSvg = `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
            const generatedSvg = generateTriangle(shapeColor);
            expect(generatedSvg).toBe(expectedSvg);
        });

        it('should generate Square SVG', () => {
            const shapeColor = '#ff00ff';
            const expectedSvg = `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
            const generatedSvg = generateSquare(shapeColor);
            expect(generatedSvg).toBe(expectedSvg);
        });
    });