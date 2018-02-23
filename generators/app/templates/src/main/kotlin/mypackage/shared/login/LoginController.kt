package mypackage.shared.login

import com.example.demo.account.UserForm
import mypackage.shared.BaseController
import mypackage.shared.home.HomeWorkspace
import mypackage.shared.account.RegisterForm
import javafx.application.Platform
import javafx.beans.property.SimpleBooleanProperty
import javafx.beans.property.SimpleStringProperty
import tornadofx.*
import javax.json.JsonObject

class LoginController : Controller() {
    val base: BaseController by inject()
    val loginScreen: LoginView by inject()
    val home: HomeWorkspace by inject()
    val registerView: RegisterForm by inject()
    val userView: UserForm by inject()
    val api: Rest by inject()

    fun init() {
        with (config) {
            if (containsKey(TOKEN)) {
                showWorkbench()
            }else {
                showLogin("Please log in")
            }
        }
    }

    fun showLogin(message: String, shake: Boolean = false) {
        if (FX.primaryStage.scene.root != loginScreen.root) {
            FX.primaryStage.scene.root = loginScreen.root
            FX.primaryStage.sizeToScene()
            FX.primaryStage.centerOnScreen()
        }

        loginScreen.title = message

        Platform.runLater {
            loginScreen.username.requestFocus()
            if (shake) loginScreen.shakeStage()
        }
    }

    fun showWorkbench() {
        if (FX.primaryStage.scene.root != home.root) {
            FX.primaryStage.scene.root = home.root
            FX.primaryStage.sizeToScene()
            FX.primaryStage.centerOnScreen()
        }
    }

    fun showRegister(){
        //FX.primaryStage.scene.root = registerView.root
        FX.primaryStage.scene.root = userView.root
        FX.primaryStage.sizeToScene()
        FX.primaryStage.centerOnScreen()
    }

    fun showForgotPassword(){

    }

    fun authenticate(username: String, password: String, remember: Boolean): String{
        return base.api.post(base.API_USERS_AUTHENTICATE, LoginVM(username, password, remember).toJSON()).one().getJsonString("id_token").string
    }

    fun tryLogin(username: String, password: String, remember: Boolean) {
        var token=""
        runAsync {
             token=authenticate(username,password,remember)
        } ui {
            loginScreen.clear()
        } success {
            log.info("<<<<<"+token)
            base.setToken(token)
            with (config) {
                set(TOKEN to token)
                save()
            }
            showWorkbench()
        } fail {
            showLogin("Login failed. Please try again.", true)
        }
    }

    fun logout() {
        with (config) {
            remove(TOKEN)
            save()
        }
        showLogin("Log in as another user")
    }

    companion object {
        val TOKEN = "idtoken"
    }
}

class LoginVM(username: String, password: String, rememberMe: Boolean) : JsonModel{
    val usernameProperty = SimpleStringProperty(username)
    var username by usernameProperty

    val passwordProperty = SimpleStringProperty(password)
    var password by passwordProperty

    val rememberMeProperty = SimpleBooleanProperty(rememberMe)
    var rememberMe by rememberMeProperty


    override fun updateModel(json: JsonObject) {
        with(json) {
            username = string("username")
            password = string("password")
            rememberMe = true
        }
    }

    override fun toJSON(json: JsonBuilder) {
        with(json) {
            add("username", username)
            add("password", password)
            add("rememberMe",rememberMe)
        }
    }
}
