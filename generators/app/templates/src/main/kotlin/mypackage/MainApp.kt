package mypackage


import mypackage.shared.Styles
import mypackage.shared.login.LoginView
import tornadofx.*


class MainApp : App(LoginView::class, Styles::class)