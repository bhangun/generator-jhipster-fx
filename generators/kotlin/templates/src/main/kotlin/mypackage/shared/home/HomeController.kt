package <%= packageName %>.shared.home


import <%= packageName %>.shared.account.UserFragment
import <%= packageName %>.shared.administration.ConfigurationFragment
import <%= packageName %>.shared.administration.HealthFragment
import <%= packageName %>.shared.administration.MetricFragment
import <%= packageName %>.shared.dashboard.DashboardFragment
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
