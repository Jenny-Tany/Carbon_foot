import { createRouter, createWebHistory } from 'vue-router'
import addContact from "@/components/addContact.vue"
import contactList from "@/components/contactList.vue"
import person from "@/components/person.vue"
import TodoView from '../views/TodoView.vue'

import HomeView from "@/views/HomeView.vue"
import Show from "@/views/show.vue"
import adovocate from "@/views/adovocate.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'show',
      component: Show
    },
    {
      path: '/adovocate',
      name: 'adovocate',
      component: adovocate
    },
    {
      path: '/todolist',
      component: TodoView
    },
    {
      path: '/addContact',
      name: 'add',
      component: addContact
    },
    {
      path: '/contactList',
      name: 'list',
      component: contactList
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },


  ]
})

export default router
