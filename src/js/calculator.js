export class Age {
  constructor(age, expectancy) {
    this.age = age;
    this.expectancy = expectancy;
  }

  ageInSeconds() {
    const ageInSeconds = this.age * 365 * 24 * 60 * 60;
    return ageInSeconds;
  }

  lifeExpectancy() {
    const userLifeExpectancy = this.expectancy - this.age;
    return Math.ceil(userLifeExpectancy);
  }

  ageMercury() {
    const mercuryAge = this.age / 0.24;
    return Math.floor(mercuryAge);
  }

  lifeExpectancyMercury() {
    const mercuryExpectancy = this.expectancy / 0.24;
    return Math.ceil(mercuryExpectancy - this.ageMercury());
  }




}