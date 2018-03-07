package <%= packageName %>


import <%= packageName %>.shared.styles.Styles
import <%= packageName %>.shared.login.LoginView
import tornadofx.*


class MainApp : App(LoginView::class, Styles::class)