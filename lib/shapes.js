module.exports = {
    generateCircle: function (shapeColor) {
      return `<circle cx="150" cy="100" r="50" fill="${shapeColor}" />`;
    },
  
    generateTriangle: function (shapeColor) {
      return `<polygon points="150,50 100,150 200,150" fill="${shapeColor}" />`;
    },
  
    generateSquare: function (shapeColor) {
      return `<rect x="100" y="50" width="100" height="100" fill="${shapeColor}" />`;
    },
  };