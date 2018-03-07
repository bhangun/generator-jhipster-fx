package <%= packageName %>.shared.account

import de.jensd.fx.glyphs.fontawesome.FontAwesomeIcon.*
import de.jensd.fx.glyphs.fontawesome.FontAwesomeIconView
import org.controlsfx.control.Notifications
import tornadofx.*

class UserFragment : Fragment("Entity View") {
    val userView : UserList by inject()

    override val root = borderpane()
    init{
        log.info("new entity fragment")
        with(root) {
            center = userView.root
        }
    }
}

class UserFragmentModel : ItemViewModel<UserFragment>() {
    val root = bind(UserFragment::root)
}

class UserForm : View("Register User") {
    val model : UserModel by inject()

    override val root = form {
        fieldset("User Information", FontAwesomeIconView(USER)) {
            field("First Name") {
                textfield(model.firstName).required()
            }
            field("Last Name") {
                passwordfield(model.lastName)
            }
            field("Login") {
                passwordfield(model.login)
            }
            field("Email") {
                textfield(model.email).required()
            }
            field("Image URL") {
                passwordfield(model.imageUrl)
            }
            field() {
                checkbox("Activated")
            }
            field("Authorities") {
                //combobox {  }(model.authorities)
            }
        }
        button("Save") {
            action {
                model.commit {
                    val user = model.item
                    Notifications.create()
                            .title("User saved!")
                            .text("${user.firstName} and ${user.email}")
                            .owner(this)
                            .showInformation()
                }
            }
            enableWhen(model.valid)
        }
    }
}

class UserList : View() {
    val user: UserController by inject()

    override val root = pane {
        tableview(user.getAllUsers()) {
            column("ID", User::idProperty)
            column("Username", User::loginProperty)
            column("First Name", User::firstNameProperty)
            column("Last Name", User::lastNameProperty)
            column("Email", User::emailProperty)
            column("Activated", User::activatedProperty)
            column("Authorities", User::authoritiesProperty).contentWidth(padding = 100.0)
        }
    }
}

