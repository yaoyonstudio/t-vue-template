import { getValue, setValue, clearStorage } from '../libs/Utils'

export default {
  data() {
    return {
      isLogin: getValue('token') ? true : false,
      user: {
        // user info
        username: getValue('username') || '',
        token: getValue('token') || '',
      },
    }
  },
  methods: {
    doLogin(username, token) {
      this.isLogin = true
      this.user = {
        username,
        token,
      }
      setValue('username', username)
      setValue('token', token)
    },
    doLogout() {
      clearStorage()
      this.isLogin = false
      this.user = {
        username: '',
        token: '',
      }
    },
  },
}