// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class AuthorsController {
  public async index() {
    return User.all()
  }
}
