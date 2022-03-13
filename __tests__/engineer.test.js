const { TestWatcher } = require('jest');
const Engineer = require('../lib/Engineer');

test('check engineer role', () => {
  const engineer = new Engineer('Blair', '1234', 'email@gmail.com', 'dogmom3')
  expect(engineer.getRole()).toBe('Engineer')
})

test('engineer class', () => {
    const engineer = new Engineer('Blair', '1234', 'email@gmail.com', 'dogmom3')
    expect(engineer.name).toBe('Blair')
      expect(engineer.id).toBe('1234')
      expect(engineer.email).toBe('email@gmail.com')
      expect(engineer.gitHub).toBe('dogmom3')
});
