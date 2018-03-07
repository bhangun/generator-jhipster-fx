package <%= packageName %>.shared.account


import <%= packageName %>.shared.login.LoginController
import tornadofx.Controller

class RegisterController : Controller() {
    val registerView: RegisterView by inject()
val loginController: LoginController by inject()
    init{

    }
}