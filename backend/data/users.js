import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin User',
        email: 'admin@test.com',
        password: bcrypt.hashSync('1234', 10),
        isAdmin: true
    },
    {
        name: 'Test User One',
        email: 'testuserone@test.com',
        password: bcrypt.hashSync('1234', 10),
    },
    {
        name: 'Test User Two',
        email: 'testusertwo@test.com',
        password: bcrypt.hashSync('1234', 10),
    }
]

export default users