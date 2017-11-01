class Driver {
  constructor (name, startDate) {
    this.name = name;
    this.startDate = new Date(startDate);
  }

  yearsExperienceFromBeginningOf(endYear) {
    let startYear = new Date(this.startDate.getFullYear() + 1, 0, 1).getFullYear();
    return endYear - startYear;
  };
};

class Route {
  constructor (beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  };

  blocksTravelled() {
    const eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];

    const verticalDistance = Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical);

    const horizontalDistance = Math.abs(eastWest.indexOf(this.beginningLocation.horizontal) - eastWest.indexOf(this.endingLocation.horizontal));

    return verticalDistance + horizontalDistance;
  };

  estimatedTime(peak) {
    const blocks = this.blocksTravelled();

    switch (peak) {
      case true:
        return blocks / 2;
      default:
        return blocks / 3;
    };
  };
};
