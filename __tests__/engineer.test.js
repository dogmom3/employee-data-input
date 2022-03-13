const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
  it('checks if getRole returns role', () => {
    const employee = new Engineer()
    expect(employee.getRole()).toBe(Engineer);
  });
});