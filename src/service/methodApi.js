
import { REACT_BASE_URL } from "@env"
import { getDataStore } from './asyncStorage'

const baseApi = `${REACT_BASE_URL}/adm`

let token = getDataStore("token")



// getDataStore("token").then(result => console.log("hahaha token", result))

console.log("haha token", token)

const headers = {
  "Authorization": `Bearer ${token && token}`,
  Accept: 'application/json',
  'Content-Type': 'application/json'
}
const headerImg = {
  "Authorization": `Bearer ${token && token}`,
}


export const methodPostImage = async ({ endpoint, data }) => {
  return await fetch(
    `${baseApi}${endpoint}`,
    {
      method: 'POST',
      headers: headerImg,
      body: data
    }
  )
    .then(res => res.json())
    .catch(err => {
      // alert('error Method check method POST Image')
      console.error(err)
    })
}

export const methodPost = async ({ endpoint, data }) => {
  return await fetch(
    `${baseApi}${endpoint}`,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    }
  )
    .then(res => res.json())
    .catch(err => {
      // alert('error Method check method POST')
      console.error(err)
    })
}

export const methodGET = async function ({ endpoint }) {
  return await fetch(
    `${baseApi}${endpoint}`,
    {
      method: 'GET',
      headers: headers,
    }
  )
    .then(res => res.json())
    .catch(err => {
      // alert('error Method check method GET')
      console.error(err)
    })
}