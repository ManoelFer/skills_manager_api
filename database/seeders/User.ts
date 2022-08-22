import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'


export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const uniqueKey = 'email'


    await User.updateOrCreateMany(uniqueKey, [{ name: "Manoel Fernandes Neto", email: "manoel@gmail.com", password: "secret123", salary: 200 }])
  }
}
