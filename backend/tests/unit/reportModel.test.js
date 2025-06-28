const Report = require('../../models/report');

describe('Report Model', () => {
  test('should create a report instance', () => {
    const report = new Report({
      name: 'Sristi',
      location: 'Bhubaneswar',
      message: 'Help needed!',
    });
    expect(report.name).toBe('Sristi');
  });
});
