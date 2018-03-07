package <%= packageName %>.shared.account

import javafx.collections.ObservableList
import <%= packageName %>.shared.BaseController
import tornadofx.*

class EntityController : Controller() {
    val base: BaseController by inject()

    /**
     * GET getAccount
     */
    var API_ACCOUNT= base.BASE_URI+"account"

    /**
     * POST saveAccount
     */
    var API_ACCOUNT_SAVE= base.BASE_URI+"account"

    /**
     * POST changePassword
     */
    var API_ACCOUNT_CHANGE_PASSWORD= base.BASE_URI+"account/change-password"

    /**
     * POST finishPasswordReset
     */
    var API_ACCOUNT_RESET_FINISH= base.BASE_URI+"account/reset-password/finish"

    /**
     * POST requestPasswordReset
     */
    var API_ACCOUNT_RESET_INIT= base.BASE_URI+"account/reset-password/init"

    /**
     * GET activateAccount
     */
    var API_ACTIVATE= base.BASE_URI+"activate"

    /**
     * POST registerAccount
     */
    var API_REGISTER = base.BASE_URI+"register"

    /**
     * GET getActiveProfiles
     */
    var API_PROFILE_INFO = base.BASE_URI+"profile-info"

    /**
     * POST authorize
     * GET isAuthenticated
     */
    var API_USERS_AUTHENTICATE = base.BASE_URI+"authenticate"

    /**
     * GET getAllUsers
     * POST createUser
     * PUT updateUser
     * DELETE deleteUser
     */
    var API_ENTITIES = base.BASE_URI+"users"

    /**
     * GET getAuthorities
     */
    var API_USERS_AUTHORITIES = base.BASE_URI+"users/authorities"

    /**
     * GET getUser
     * DELETE deleteUser
     */
    var API_ENTITY= base.BASE_URI+"users/"//{login}


    fun createUsers(users: Entity){
        base.api.post(API_ENTITIES,users)
    }

    fun getAllEntity(): ObservableList<Entity> {
        return  base.api.get(API_ENTITIES).list().toModel()
    }

    fun getUsers(user : User): ObservableList<Entity> {
        return  base.api.get(API_ENTITIES).list().toModel()
    }

    fun updateUsers(users: User){
        base.api.put(API_ENTITIES,users)
    }

    fun deleteUser(login: String){
        base.api.put(API_ENTITY+"$login")
    }
}


