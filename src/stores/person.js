import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePersonStore = defineStore('person', () => {
  // state
  const info = ref({
    name: '153',
    phone: '12',
    password: '33'
  })

  // getters
  const fullName = () => info.value.name

  // mutations
  function updateName(newName) {
    info.value.name = newName
  }

  function updatePhone(newPhone) {
    info.value.phone = newPhone
  }

  function updatePassword(newPassword) {
    info.value.password = newPassword
  }

  return {
    info,
    fullName,
    updateName,
    updatePhone,
    updatePassword,
  }
})