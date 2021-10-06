import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        name: 'John',
        email: 'john@example.com',
        password: 'password',
      },
      {
        name: 'Jane',
        email: 'jane@example.com',
        password: 'password',
      },
      {
        name: 'Victor',
        email: 'victor@example.com',
        password: 'password',
      },
      {
        name: 'Taylor',
        email: 'taylor@example.com',
        password: 'password',
      },
      {
        name: 'Evan',
        email: 'evan@example.com',
        password: 'password',
      },
      {
        name: 'Alexandre',
        email: 'alexandre@example.com',
        password: 'password',
      },
    ])
  }
}
