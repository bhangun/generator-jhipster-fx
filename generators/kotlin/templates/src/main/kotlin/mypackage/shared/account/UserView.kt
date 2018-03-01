package mypackage.shared.account

import com.example.demo.account.User
import mypackage.shared.BaseController
import javafx.collections.FXCollections
import javafx.collections.ObservableList
import tornadofx.*

class UserView : View() {
    val base: BaseController by inject()
    var test = FXCollections.observableArrayList<String>()

    fun createUsers(users: User){

    }

    fun getUsers(): ObservableList<User> {
         return  base.api.get(base.API_USERS).list().toModel()
    }

    fun updateUsers(users: User){

    }

    fun deleteUser(login: String){
      //  base.api.put(base.API_USER,"$login")
    }

    override val root = pane {
        tableview(getUsers()) {
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
