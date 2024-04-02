import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', () => {
  // state
  const contacts = ref([
      { id: 1, name: '张三', phone: '1234567890' },
      { id: 2, name: '李四', phone: '0987654321' },
      { id: 3, name: '王五', phone: '9876543210' },
      { id: 4, name: '熊二', phone: '1236512310' },
      { id: 5, name: '翠花', phone: '2323543210' },
      { id: 6, name: '🐻大', phone: '934343210' },
      { id: 7, name: '小🍉', phone: '934343210' },
      { id: 8, name: '王兄', phone: '9876543210' },
      { id: 9, name: '🐒兄', phone: '9876543210' },
      { id: 10, name: '李一', phone: '9876543210' },
      { id: 11, name: '李二', phone: '9876543210' },
      { id: 12, name: '李三', phone: '9876543210' },
  ])
  // const count = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }
  // computed
  const totalContacts = computed(()=> contacts.value.length)

  // methods
  function editContact(contactId) {
    const contact = contacts.value.find((c) => c.id === contactId);
    // 执行相应的编辑逻辑
    console.log('Editing contact:', contact);
  }

  function deleteContact(id) {
    const index = contacts.value.findIndex(person => person.id === id);
    if (index !== -1) {
      contacts.value.splice(index, 1);
    }
  }
  function addContact(contact) {
    contacts.value.push(contact);
  }

  return { contacts, totalContacts, editContact, deleteContact, addContact };
})
