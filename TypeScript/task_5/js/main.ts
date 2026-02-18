/**
 * Interface for Major Credits
 * @property credits
 * @property brand
 */
export interface MajorCredits {
  credits: number;
  brand: "MajorCredits";
}

/**
 * Interface for Minor Credits
 * @property credits
 * @property brand
 */
export interface MinorCredits {
  credits: number;
  brand: "MinorCredits";
}

/**
 * Sums the credits of two MajorCredits subjects
 * @param subject1 - First major subject
 * @param subject2 - Second major subject
 * @returns A MajorCredits object with the summed value
 */
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  };
}

/**
 * Sums the credits of two MinorCredits subjects
 * @param subject1 - First minor subject
 * @param subject2 - Second minor subject
 * @returns A MinorCredits object with the summed value
 */
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
  };
}
