const Intern = require('../lib/Intern');

describe('Intern class', () => {
  it('checks if getRole returns role', () => {
    const employee = new Intern()
    expect(employee.getRole()).toBe(Intern);
  });
});