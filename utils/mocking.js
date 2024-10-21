// utils/mocking.js
import bcrypt from 'bcrypt';

export function generateMockUsers(count) {
  const users = [];
  for (let i = 0; i < count; i++) {
    const user = {
      username: `user${i}`,
      password: bcrypt.hashSync('coder123', 10),
      role: i % 2 === 0 ? 'user' : 'admin',
      pets: []
    };
    users.push(user);
  }
  return users;
}