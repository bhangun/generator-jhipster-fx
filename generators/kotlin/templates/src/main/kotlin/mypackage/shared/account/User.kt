package com.example.demo.account

import javafx.beans.property.BooleanProperty
import javafx.beans.property.Property
import javafx.beans.property.StringProperty
import tornadofx.*
import java.time.Instant
import javax.json.JsonObject

class User(): JsonModel {

    var id by property<String>()
    fun idProperty() = getProperty(User::id)
    var login by property<String>()
    fun loginProperty() = getProperty(User::login)
    var firstName by property<String>()
    fun firstNameProperty() = getProperty(User::firstName)
    var lastName by property<String>()
    fun lastNameProperty() = getProperty(User::lastName)
    var email by property<String>()
    fun emailProperty() = getProperty(User::email)
    var imageUrl by property<String>()
    fun imageUrlProperty() = getProperty(User::imageUrl)
    var activated by property<Boolean>()
    fun activatedProperty() = getProperty(User::activated)
    var langKey by property<String>()
    fun langKeyProperty() = getProperty(User::langKey)
    var createdBy by property<String>()
    fun createdByProperty() = getProperty(User::createdBy)
    var createdDate by property<Instant>()
    fun createdDateProperty() = getProperty(User::createdDate)
    var lastModifiedBy by property<String>()
    fun lastModifiedByProperty() = getProperty(User::lastModifiedBy)
    var lastModifiedDate by property<Instant>()
    fun lastModifiedDateProperty() = getProperty(User::lastModifiedDate)
    var authorities by property<String>()
    fun authoritiesProperty() = getProperty(User::authorities)
    var password by property<String>()
    fun passwordProperty() = getProperty(User::password)

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

class UserModel : ItemViewModel<User>(User()) {
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
