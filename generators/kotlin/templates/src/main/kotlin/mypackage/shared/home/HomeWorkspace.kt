package <%= packageName %>.shared.home

import javafx.scene.control.Menu
import <%= packageName %>.shared.login.LoginController
import <%= packageName %>.shared.login.LoginView
import tornadofx.*


class HomeWorkspace : Workspace("<%= baseName %>") {
    val homeController : HomeController by inject()
    override fun onDock() {
        primaryStage.width = 1024.0
        primaryStage.height = 768.0
    }

    override fun onRefresh() {
       // customerTable.asyncItems { customerController.listCustomers() }
    }
    init {
        menubar {
            menu("File") {
                item("Dashboard").action {
                    dock(homeController.dashboard())
                }
                item("New").action {
                    log.info("Opening text file")
                    dock(homeController.newEntity(), true)
                }
                separator()
                item("Close all").action {
                    workspace.dock(EmptyView(),true)
                }
                separator()
                openWindowMenuItemsAtfer()
            }
            menu("Entities") {
                item("New").action {
                    log.info("Opening text file")
                    dock(homeController.newEntity(), true)
                }
                separator()
                item("Close all").action {
                    workspace.dock(EmptyView(),true)
                }
                separator()
                openWindowMenuItemsAtfer()
            }
            menu("Administration"){
                item("User Management").action {
                    dock(homeController.userManagement(), true)
                }
                item("Metric").action {
                    dock(homeController.metric(), true)
                }
                item("Health").action {
                    dock(homeController.health(), true)
                }
                item("Configuration").action {
                    dock(homeController.configuration(), true)
                }
            }
            menu("Language") {
                item("About...")
            }
            menu("Account") {
                item("Logout").action {
                    this@HomeWorkspace.replaceWith(LoginView::class,
                        transition = ViewTransition.FadeThrough(1.seconds))

                    with (config) {
                        remove(LoginController.TOKEN)
                        save()
                    }
                }
            }
            
        }

       dock(homeController.dashboard(),true)
        add(RestProgressBar::class)

        with(bottomDrawer) {
            item( "Logs") {
                textarea {
                    addClass("consola")

                }

            }
        }
    }

    /**
     * this extension method allows binding the open document's fragment to menu
     */
    private fun Menu.openWindowMenuItemsAtfer() {
        /*editorController.editorModelList.onChange { dvm ->
            dvm.next()
            if (dvm.wasAdded()) {
                dvm.addedSubList.forEach { x ->
                    val item = MenuItem(x.title)
                    item.action {
                        workspace.dock(x, true)
                    }
                    items.add(item)
                }
            } else if (dvm.wasRemoved()) {
                dvm.removed.forEach { x ->
                    workspace.viewStack.remove(x)
                    x.close()
                    println(workspace.dockedComponent)
                    val morituri = items.takeLast(items.size - 2).filter { item -> item.text.equals(x.title) }
                    items.removeAll(morituri)
                }
            }
        }*/
    }

}


class EmptyView : View() {
    //val controller: EditorController by inject()
    override val root = label("---------------")
}