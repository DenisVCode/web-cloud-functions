const EventDateFormatter = require('../libs/date').EventDateFormatter

var dates = {
  start: "2017-09-03T16:00:00.000Z",
  end: "2017-09-03T18:00:00.000Z"
}


describe("A EventDateFormatter for single event", function () {

  it("transform date string to string in format DD.MM.YYYY", function () {
    var formatter = new EventDateFormatter(dates)
    expect(formatter.getDate()).toBe("3.8.2017")
  })
});