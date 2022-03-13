const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

test('check intern role', () => {
  const intern = new Intern('Blair', '1234', 'email@gmail.com')
  expect(intern.getRole()).toBe('Intern')
})

test('Intern class', () => {
    const intern = new Intern('Blair', '1234', 'email@gmail.com', 'UNC')
    expect(intern.name).toBe('Blair')
      expect(intern.id).toBe('1234')
      expect(intern.email).toBe('email@gmail.com')
      expect(intern.school).toBe('UNC')
});
