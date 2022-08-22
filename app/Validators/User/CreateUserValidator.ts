//DOCUMENTATION: https://docs.adonisjs.com/reference/validator/rules/exists

import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MessagesCustom from '../MessagesCustom'

export default class CreateUserValidator extends MessagesCustom {
  constructor(protected ctx: HttpContextContract) {
    super()
  }

  public schema = schema.create({
    name: schema.string({ trim: true }, [
      rules.minLength(3),
      rules.alpha({
        allow: ['space', 'underscore', 'dash'],
      }),
    ]),
    email: schema.string({ trim: true }, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email', caseInsensitive: true }),
    ]),
    password: schema.string({}, [rules.minLength(6)])
  })
}
