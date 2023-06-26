const inquirer = require('inquirer');
const { validateColor } = require('./index');
const index = require('./index');

jest.mock('inquirer');

describe('SVG-LOGO-MAKER', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Text Input', () => {
    it('should generate a logo with valid text input', async () => {
      const answers = {
        text: 'ABC',
        textColor: 'red',
        shape: 'circle',
        shapeColor: 'blue',
      };

      inquirer.prompt.mockResolvedValueOnce(answers);

      await index.generateLogo();

      expect(inquirer.prompt).toHaveBeenCalledTimes(1);
      expect(inquirer.prompt).toHaveBeenCalledWith(expect.any(Array));
      expect(console.log).toHaveBeenCalledWith('Generated logo.svg');
    });

    it('should display an error message for invalid text input', async () => {
      const answers = {
        text: 'ABCD',
        textColor: 'red',
        shape: 'circle',
        shapeColor: 'blue',
      };

      inquirer.prompt.mockResolvedValueOnce(answers);

      await index.generateLogo();

      expect(inquirer.prompt).toHaveBeenCalledTimes(1);
      expect(inquirer.prompt).toHaveBeenCalledWith(expect.any(Array));
      expect(console.log).toHaveBeenCalledWith('Please enter exactly three characters.');
    });
  });

  describe('validateColor', () => {
    it('should return true for valid color names', () => {
      const validColors = ['red', 'blue', 'green', 'yellow', 'purple'];
      validColors.forEach((color) => {
        expect(validateColor(color)).toBe(true);
      });
    });

    it('should return true for valid hexadecimal color codes', () => {
      const validHexColors = ['#FF0000', '#00FF00', '#0000FF', '#123456', '#abcdef'];
      validHexColors.forEach((color) => {
        expect(validateColor(color)).toBe(true);
      });
    });

    it('should return false for invalid color values', () => {
      const invalidColors = ['invalid', '123456', '#', '#123', 'rgb(255, 0, 0)'];
      invalidColors.forEach((color) => {
        expect(validateColor(color)).toBe(false);
      });
    });
  });
});