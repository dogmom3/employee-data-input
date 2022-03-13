const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

test('check manager role', () => {
  const manager = new Manager('Blair', '1234', 'email@gmail.com')
  expect(manager.getRole()).toBe('Manager')
})

test('Manager class', () => {
    const manager = new Manager('Blair', '1234', 'email@gmail.com')
    expect(manager.name).toBe('Blair')
      expect(manager.id).toBe('1234')
      expect(manager.email).toBe('email@gmail.com')
});
