// import api from './../api'
// import cookie from 'js-cookie'

export default {
  state: {
    account: '',
  },
  mutations: {
    // userSet(state, data){
    //   if(data['target']){
    //     state[data['target']] = data.data || ''
    //   }
    // }
  },
  actions: {
    // login({commit}, params){
    //   return api.post('/order/updateorderstatus', params).then(res => {
    //     commit('userSet', {
    //       target: 'account',
    //       data: res.data
    //     })
    //     cookie.set('CXC_ticketId', res.data.ticketId, { expires: 30 });
    //     return Promise.reject(res)
    //   }, res => {
    //     return Promise.reject(res)
    //   })
    // },
    // sendPhoneCode(params){
    //   return api.post('/users/securitycode', params)
    // },
  }
}