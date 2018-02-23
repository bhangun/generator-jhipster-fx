package com.example.demo.account

import de.jensd.fx.glyphs.fontawesome.FontAwesomeIcon.*
import de.jensd.fx.glyphs.fontawesome.FontAwesomeIconView
import javafx.beans.property.BooleanProperty
import javafx.beans.property.Property
import javafx.beans.property.StringProperty
import org.controlsfx.control.Notifications
import tornadofx.*
import java.time.LocalDate

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
                            .title("Customer saved!")
                            .text("${user.firstName} and ${user.email}")
                            .owner(this)
                            .showInformation()
                }
            }
            enableWhen(model.valid)
        }
    }

}

