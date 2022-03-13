const Employee = require('../lib/Employee');

describe('Employee class', () => {
  
  it('checks if getRole returns role', () => {
    const employee = new Employee('role');
    expect(employee.role()).toBe(Employee);
  });
});