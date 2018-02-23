package mypackage.shared.account


import mypackage.shared.login.LoginController
import tornadofx.Controller

class RegisterController : Controller() {
    val registerView: RegisterForm by inject()
val loginController: LoginController by inject()
    init{

    }
}