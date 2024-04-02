<template>
      <h2>添加信息</h2>
    <div class="form">
        <div class="info">
            <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="联系电话" prop="region">
          <el-input v-model="formLabelAlign.region" />
        </el-form-item>
        <el-form-item label="密码" prop="type">
          <el-input v-model="formLabelAlign.type" />
        </el-form-item>
      </el-form>
        </div>

      <el-button  @click="saveContact" type="primary" plain>确认保存</el-button>
      <!-- <el-button :plain="true">确认保存</el-button> -->
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import { useContactStore } from '@/stores/contact'
  
  const labelPosition = ref('right')
  const formLabelAlign = reactive({
    name: '',
    region: '',
    type: '',
  })
  
  const store = useContactStore()
  
  const saveContact = () => {
    if (validateForm()) {
      const newContact = {
        id: generateUUID(),
        name: formLabelAlign.name,
        phone: formLabelAlign.region,
      }
  
      store.addContact(newContact)
  
      ElMessage({
        message: '添加成功',
        type: 'success',
      })
  
      resetForm()
    } else {
      ElMessage({
        message: '请填写完整的表单',
        type: 'error',
      })
    }
  }
  
  const validateForm = () => {
    return (
      formLabelAlign.name.trim() !== '' &&
      formLabelAlign.region.trim() !== '' &&
      formLabelAlign.type.trim() !== ''
    )
  }
  
  const resetForm = () => {
    formLabelAlign.name = ''
    formLabelAlign.region = ''
    formLabelAlign.type = ''
  }
  
  // 使用示例生成唯一的UUID
  const generateUUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
  </script>

  <style lang="scss" scoped>
  .form {
    margin: 5vh 20%;
    border: 3px solid rgb(99, 143, 176);
  box-shadow: 5px 5px 5px rgb(68, 76, 90);
    padding: 4vh;

  }
  .info {
    display: flex;
    justify-content: center;
    margin-left: 10%;
    flex-direction: column;
  }
  button {
    margin-left: 40%;
  }
  </style>