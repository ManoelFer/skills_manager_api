import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Skill from 'App/Models/Skill'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method

    const uniqueKey = 'technology_name'


    await Skill.updateOrCreateMany(uniqueKey, [
      {
        technology_name: "Javascript",
        description: "Linguagem de programação"
      },
      {
        technology_name: "AdonisJS",
        description: "Framework para programação de APIs"
      },
      {
        technology_name: "ReactJS",
        description: "Framework para programação web"
      },
      {
        technology_name: "React Native",
        description: "Framework para programação mobile"
      },
      {
        technology_name: "MySQL",
        description: "Banco de Dados"
      }
    ])
  }
}
