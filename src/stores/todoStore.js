import { defineStore } from "pinia";
import { getTodoAPI } from "../apis/todo";
import { ref } from "vue";

export const useTodoStore = defineStore('todo', () => {
    // state
    const todoList = ref([])
    // action
    const getTodo = async () => {
        const res = await getTodoAPI()
        console.log(res);
        todoList.value = res.result
    }
    return {
        todoList,
        getTodo
    }
})