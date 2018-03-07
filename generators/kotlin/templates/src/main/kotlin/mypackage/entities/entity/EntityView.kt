package <%= packageName %>.shared.account

import de.jensd.fx.glyphs.fontawesome.FontAwesomeIcon.*
import de.jensd.fx.glyphs.fontawesome.FontAwesomeIconView
import org.controlsfx.control.Notifications
import tornadofx.*

class EntityFragment : Fragment("Entity View") {
    val entityView : EntityList by inject()

    override val root = borderpane()
    init{
        log.info("new entity fragment")
        with(root) {
            center = entityView.root
        }
    }
}

class EntityFragmentModel : ItemViewModel<EntityFragment>() {
    val root = bind(EntityFragment::root)
}

class EntityForm : View("Register User") {
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
                    val entity = model.item
                    Notifications.create()
                            .title("Entity saved!")
                            .text("${entity.firstName} and ${entity.email}")
                            .owner(this)
                            .showInformation()
                }
            }
            enableWhen(model.valid)
        }
    }
}

class EntityList : View() {
    val entity: EntityController by inject()

    override val root = pane {
        tableview(entity.getAllEntity()) {
            column("ID", Entity::idProperty)
            column("Username", Entity::loginProperty)
            column("First Name", Entity::firstNameProperty)
            column("Last Name", Entity::lastNameProperty)
            column("Email", Entity::emailProperty)
            column("Activated", Entity::activatedProperty)
            column("Authorities", Entity::authoritiesProperty).contentWidth(padding = 100.0)
        }
    }
}

