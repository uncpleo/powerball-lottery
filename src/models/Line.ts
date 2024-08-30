export class Line {
    mainNumbers: number[];
    powerballNumber: number;
  
    constructor(mainNumbers: number[], powerballNumber: number) {
      if (mainNumbers.length !== 5) {
        throw new Error("A line must have exactly 5 main numbers.");
      }
      if (powerballNumber < 1 || powerballNumber > 26) {
        throw new Error("Powerball number must be between 1 and 26.");
      }
      this.mainNumbers = mainNumbers;
      this.powerballNumber = powerballNumber;
    }
  
    isValid(): boolean {
      return (
        this.mainNumbers.length === 5 &&
        this.mainNumbers.every(num => num >= 1 && num <= 69) &&
        this.powerballNumber >= 1 &&
        this.powerballNumber <= 26
      );
    }
  }
  