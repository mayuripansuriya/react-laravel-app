import Login from './modules/login'
import Register from './modules/register'
import Profile from './modules/profile'
import EditProfile from './modules/editProfile'

const routes = [
  {
    path: "/",
    component: Login,
    exact: true
  },
  {
    path: "/login",
    component: Login,
  },,
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/user/:id",
    component: Profile
  },
  {
    path: "/user/edit/:id",
    component: EditProfile
  }
]

export default routes