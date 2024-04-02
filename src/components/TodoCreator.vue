<script setup>
import { reactive } from "vue"

const emit = defineEmits(["create-todo"])
// 使用ref就是.value  使用reactive就是对象.属性
const todoState = reactive({
  todo: "",
  invalid: null,
  errMsg: "",
})
const createTodo = () => {
  todoState.invalid = null;
  if (todoState.todo !== "") {
    emit("create-todo", todoState.todo)
    todoState.todo = "";
    return;
  }
  todoState.invalid = true;
  todoState.errMsg = "Todo value cannot be empty";
}
</script>

<template>
    <div class="input-wrap" :class="{ 'input-err ': todoState.invalid }">
        <input type="text" v-model="todoState.todo">
        <!-- 传给父组件TodoView -->
        <button @click="createTodo()">Create</button>
    </div>
    <p v-show="todoState.invalid" class="err-msg">{{ todoState.errMsg }}</p>
</template>

<style lang="scss" scoped>
button {
  cursor: pointer;
}
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: 2px solid #41b080;
  margin-left: -2vh;
  margin-right: 3vh;
  border-radius: 10px;
  &.input-err {
    border-color: red;
    box-shadow: 2px 2px 2px rgb(241, 108, 108);
    border-radius: 10px;
  }

  &:focus-within {
    box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 0.1),
      0 -2px 4px -2px rgb(0 0 0 / 0.1);
  }
  input {
    width: 100%;
    padding: 8px 6px;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 8px 16px;
    border: none;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  text-align: center;
  color: red;
}
</style>