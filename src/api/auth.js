import Vue from 'vue';

async function login(data) {
  const res = await Vue.axios({
    method: 'POST',
    url: '/v1/login',
    data,
  });

  return res.data
}

async function introspect(data) {
  const res = await Vue.axios({
    method: 'GET',
    url: '/v1/introspect',
    data,
  });

  return res.data
}

export default {
  login,
  introspect,
}
