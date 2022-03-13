const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('check employee role', () => {
  const employee = new Employee('Blair', '1234', 'email@gmail.com')
  expect(employee.getRole()).toBe('Employee')
})

test('Employee class', () => {
    const employee = new Employee('Blair', '1234', 'email@gmail.com')
    expect(employee.name).toBe('Blair')
      expect(employee.id).toBe('1234')
      expect(employee.email).toBe('email@gmail.com')
});
