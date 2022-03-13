const Manager = require('../lib/Manager');

describe('Manager class', () => {
  it('checks if getRole returns role', () => {
    const employee = new Manager()
    expect(employee.getRole()).toBe(Manager);
  });
});