import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const user = await User.find(1)

    await user?.related('skills').attach([1])
    await user?.related('skills').attach([2])
    await user?.related('skills').attach([3])
    await user?.related('skills').attach([4])
    await user?.related('skills').attach([5])
  }
}
