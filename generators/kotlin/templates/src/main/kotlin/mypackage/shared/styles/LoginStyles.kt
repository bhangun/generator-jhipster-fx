package <%= packageName %>.shared.styles

import javafx.scene.paint.Color
import javafx.scene.text.FontWeight
import tornadofx.Stylesheet
import tornadofx.box
import tornadofx.cssclass
import tornadofx.px

class LoginStyles : Stylesheet() {
    companion object {
        val loginStyle by cssclass()
    }

    init {
        s(loginStyle) {
            padding = box(15.px)
            vgap = 7.px
            hgap = 10.px
            baseColor = Color.BLACK
        }
    }
}