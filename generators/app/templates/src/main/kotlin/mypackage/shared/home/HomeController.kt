package mypackage.shared.home


import com.example.demo.account.UserFragment
import mypackage.shared.administration.ConfigurationFragment
import mypackage.shared.administration.HealthFragment
import mypackage.shared.administration.MetricFragment
import mypackage.shared.dashboard.DashboardFragment
import tornadofx.*

class HomeController : Controller() {

    init{

    }

    fun dashboard(): DashboardFragment {
        return DashboardFragment()
    }

    fun newEntity(): UserFragment {
        return UserFragment()
    }

    fun userManagement(): UserFragment {
        return UserFragment()
    }

    fun metric(): MetricFragment {
        return MetricFragment()
    }
    fun health(): HealthFragment {
        return HealthFragment()
    }
    fun configuration(): ConfigurationFragment {
        return ConfigurationFragment()
    }
}
