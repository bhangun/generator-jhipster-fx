package mypackage.shared.account


import mypackage.shared.Styles.Companion.loginScreen
import javafx.scene.control.PasswordField
import javafx.scene.control.TextField
import javafx.scene.layout.GridPane
import tornadofx.*

class RegisterForm : View() {
    override val root = GridPane()
   // val registerController: RegisterController by inject()
    var username: TextField by singleAssign()
    var email: TextField by singleAssign()
    var password: PasswordField by singleAssign()
    var confirm: PasswordField by singleAssign()

    init {
        title = "Please log in"

        with (root) {
            addClass(loginScreen)

            row("Username") {
                username = textfield()
            }

            row("Email") {
                email = textfield()
            }

            row("Password") {
                password = passwordfield()
            }

            row("Confirm Password") {
                confirm = passwordfield()
            }

            row {
                button("Submit") {
                    isDefaultButton = true
                    setOnAction {
                    }
                }
            }

        }
    }

    fun clear() {
        username.clear()
        password.clear()
    }
}
