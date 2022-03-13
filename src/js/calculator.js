export default class Age {
  constructor(earthAge, gender, exercise, diet, healthCare) {
    this.earthAge = earthAge;
    this.gender = gender;
    this.exercise = exercise;
    this.diet = diet;
    this.healthCare = healthCare;
  }

  earthYears() {
    let earthAge =  this.earthAge();
    return earthYears;
    console.log(earthYears);
  }

  mercuryYears() {
    let mercuryAge = Math.round(this.earthYears() /.24);
    return mercuryAge;
  }



}