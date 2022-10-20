import Vue from 'vue';

const BASE_URL = '/v1/user'

async function getAllUser(params) {
  const res = await Vue.axios({
    method: 'GET',
    url: BASE_URL,
    params,
  });

  return res.data
}

async function editUser(data) {
  const res = await Vue.axios({
    method: 'POST',
    url: BASE_URL,
    data,
  });

  return res.data
}

async function deleteUser(id) {
  const res = await Vue.axios({
    method: 'DELETE',
    url: `${BASE_URL}/${id}`,
  });

  return res.data
}

export default {
  getAllUser,
  editUser,
  deleteUser,
}
