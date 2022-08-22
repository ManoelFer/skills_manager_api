
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class AuthController {
    public async login({ request, auth, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
        let user

        // Lookup user manually
        try {
            user = await User.query().where('email', email).firstOrFail()
        } catch (error) {
            console.log('error', error)
            response.unauthorized({ message: 'Invalid credentials' })
        }

        try {
            const token = await auth.use('api').attempt(email, password)

            return response.status(200).json({ token: token.token, user: user.serialize() })
        } catch (error) {
            return response.unauthorized({ message: 'Invalid credentials' })
        }
    }
}
