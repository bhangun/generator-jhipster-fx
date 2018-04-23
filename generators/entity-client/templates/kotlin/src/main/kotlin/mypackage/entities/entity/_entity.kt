package <%= packageName %>.shared.account

import javafx.beans.property.BooleanProperty
import javafx.beans.property.Property
import javafx.beans.property.StringProperty
import tornadofx.*
import java.time.Instant
import javax.json.JsonObject

class Entity(): JsonModel {

    var id by property<String>()
    fun idProperty() = getProperty(Entity::id)
    var login by property<String>()
    fun loginProperty() = getProperty(Entity::login)
    var firstName by property<String>()
    fun firstNameProperty() = getProperty(Entity::firstName)
    var lastName by property<String>()
    fun lastNameProperty() = getProperty(Entity::lastName)
    var email by property<String>()
    fun emailProperty() = getProperty(Entity::email)
    var imageUrl by property<String>()
    fun imageUrlProperty() = getProperty(Entity::imageUrl)
    var activated by property<Boolean>()
    fun activatedProperty() = getProperty(Entity::activated)
    var langKey by property<String>()
    fun langKeyProperty() = getProperty(Entity::langKey)
    var createdBy by property<String>()
    fun createdByProperty() = getProperty(Entity::createdBy)
    var createdDate by property<Instant>()
    fun createdDateProperty() = getProperty(Entity::createdDate)
    var lastModifiedBy by property<String>()
    fun lastModifiedByProperty() = getProperty(Entity::lastModifiedBy)
    var lastModifiedDate by property<Instant>()
    fun lastModifiedDateProperty() = getProperty(Entity::lastModifiedDate)
    var authorities by property<String>()
    fun authoritiesProperty() = getProperty(Entity::authorities)
    var password by property<String>()
    fun passwordProperty() = getProperty(Entity::password)

    override fun updateModel(json: JsonObject) {
        with(json) {
            id =  int("id").toString()
            login = string("login")
            firstName = string("firstName")
            lastName = string("lastName")
            email= string("email")
            imageUrl = string("imageUrl")
            activated = boolean("activated")
            langKey = string("langKey")
            authorities = jsonArray("authorities").toString()
            createdBy = string("createdBy")
            createdDate = if (string("createdDate")!=null) Instant.parse(string("createdDate").toString()) else Instant.now()
            lastModifiedBy = string("lastModifiedBy")
            lastModifiedDate = if (string("lastModifiedDate")!=null) Instant.parse(string("lastModifiedDate").toString()) else Instant.now()
        }
    }

    override fun toJSON(json: JsonBuilder) {
        with(json) {
            add("id",id)
            add("login",login)
            add("firstName",firstName)
            add("lastName",lastName)
            add("email",email)
            add("imageUrl",imageUrl)
            add("activated",activated)
            add("langKey",langKey)
            add("authorities",authorities)
            add("createdBy",createdBy)
            add("createdDate",createdDate.toString())
            add("lastModifiedBy",lastModifiedBy)
            add("lastModifiedDate",lastModifiedDate.toString())
        }
    }
}

class EntityModel : ItemViewModel<Entity>(Entity()) {
    var id : StringProperty = bind { item?.idProperty() }
    var login : StringProperty = bind { item?.loginProperty() }
    var firstName : StringProperty = bind { item?.firstNameProperty() }
    var lastName : StringProperty = bind { item?.lastNameProperty() }
    val email: StringProperty = bind { item?.emailProperty() }
    var imageUrl : StringProperty = bind { item?.imageUrlProperty() }
    var activated : BooleanProperty = bind { item?.activatedProperty() }
    var langKey : StringProperty = bind { item?.langKeyProperty() }
    var authorities : StringProperty = bind { item?.authoritiesProperty() }
    var createdBy : StringProperty = bind { item?.createdByProperty() }
    var createdDate : Property<Instant> = bind { item?.createdDateProperty() }
    var lastModifiedBy : StringProperty = bind { item?.lastModifiedByProperty() }
    var lastModifiedDate : Property<Instant> = bind { item?.lastModifiedDateProperty() }
}
