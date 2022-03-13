const employee = require('../lib/Employee');

describe('Employee class', () => {
  it('checks if getID returns id', () => {
    const employee = new Employee('')
    expect(employee.getID()).toBe(Employee);
  });
});