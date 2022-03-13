const Employee = require('../lib/Employee');

describe('Employee class', () => {
  it('checks if getRole returns role', () => {
    const employee = new Employee()
    expect(employee.getRole()).toBe(Employee);
  });
});