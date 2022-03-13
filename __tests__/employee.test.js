const Employee = require('../lib/Employee');

test('check employee role', () => {
  const employee = new Employee('Blair', '1234', 'email@gmail.com')
  expect(employee.getRole()).toBe('Employee')
})

test('Employee class', () => {
    const employee = new Employee('Blair', '1234', 'email@gmail.com')
    expect(employee.name).toBe('name')
      expect(employee.id).toBe('id')
      expect(employee.email).toBe('email')
});
