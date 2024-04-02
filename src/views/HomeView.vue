<script setup>
import { ref, computed } from "vue"
import { toRefs } from '@vue/reactivity';
import { useContactStore } from "@/stores/contact";
import { Search } from '@element-plus/icons-vue'
import {
  Delete,
} from '@element-plus/icons-vue'
const input1 = ref('')
const store = useContactStore()
const { contacts, editContact, deleteContact } = toRefs(store)

const filteredContacts = computed(() => {
  return contacts.value.filter(contact => {
    return contact.name.toLowerCase().includes(input1.value.toLowerCase()) ||
           contact.phone.includes(input1.value)
  })
})

</script>

<template>
  <el-input
    v-model="input1"
    class="w-50 m-2"
    size="large"
    placeholder="Please Input"
    :prefix-icon="Search"
  />

  <div class="total">共有{{ store.totalContacts }}位联系人</div>

  <div class="list">
    <div v-for="person in filteredContacts" :key="person.id" class="card">
      <div class="info">
        <p>{{ person.name }}</p>
        <p>{{ person.phone }}</p>
      </div>
      <div class="button">
        <!-- <button @click="editContact(person.id)">Edit</button> -->
        <el-button @click="deleteContact(person.id)" type="danger" plain>Delete</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.total {
  padding: 20px;
}
.card {
  width: 200px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 3px solid rgb(99, 143, 176);
  box-shadow: 5px 5px 5px rgb(68, 76, 90);
  margin: 3vh;
}
el-button {
  padding: 5px !important;
}
</style>