<script setup>
import { usePersonStore } from '@/stores/person'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const personStore = usePersonStore()
const dialogVisible = ref(false)
const carbonFootprint = ref(0)
const labelPosition = ref('right')
const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})

const open2 = () => {
  
  if (validateForm()) {
    personStore.updateName(formLabelAlign.name)
    personStore.updatePhone(formLabelAlign.region)
    personStore.updatePassword(formLabelAlign.type)

    dialogVisible.value = true
    // 计算碳排放量
    carbonFootprint.value =
      parseFloat(formLabelAlign.name)*0.785 +
      parseFloat(formLabelAlign.region)*0.785 +
      parseFloat(formLabelAlign.type)*0.275

    ElMessage({
      message: '保存成功',
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
</script>

<template>
  <div class="bg">
    <div class="contain">
    <div class="show">
      <p>一天用电量：{{ personStore.info.name }} 度</p>
      <p>一天自驾里程：{{ personStore.info.phone }} km</p>
      <p>飞机公里数：{{ personStore.info.password }} km</p>
    </div>
    <div class="edit">
      <h3>填写个人碳排放量</h3>
      <!-- <el-radio-group v-model="labelPosition" label="label position">
        <el-radio-button label="left">Left</el-radio-button>
        <el-radio-button label="right">Right</el-radio-button>
        <el-radio-button label="top">Top</el-radio-button>
      </el-radio-group> -->
      <div style="margin: 20px" />
      <el-form
        :label-position="labelPosition"
        label-width="100px"
        :model="formLabelAlign"
        style="max-width: 460px"
      >
        <el-form-item label="一天用电量(度)" prop="name">
          <el-input v-model="formLabelAlign.name" />
        </el-form-item>
        <el-form-item label="一天自驾里程(kg)" prop="region">
          <el-input v-model="formLabelAlign.region" />
        </el-form-item>
        <el-form-item label="飞机公里数(kg)" prop="type">
          <el-input v-model="formLabelAlign.type" />
        </el-form-item>
      </el-form>
      <el-button :plain="true" @click="open2" type="success" plain>计算我的碳足迹</el-button>
      <!-- 弹出框 -->
  <el-dialog
    v-model="dialogVisible"
    title="碳足迹"
    width="30%"
  >
    <span>你当天的所产生的碳足迹为：{{ carbonFootprint.toFixed(2) }} kg</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">确定</el-button>
      </span>
    </template>
  </el-dialog>
    </div>
  </div>
  </div>

</template>

<style lang="scss" scoped>
.contain {
  display: flex;
  flex-direction: column;
  width: 80%;
}
.bg {
  width: 100%;
  background: url(@/assets/person1.png);
  height: 100vh;
}
.show {
  width: 80%;
  border: 1px solid rgb(154, 151, 123);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 40px;
  margin-left: 21%;
  padding: 10px 0;
  border: 3px solid rgb(99, 143, 176);
  box-shadow: 5px 5px 5px rgb(68, 76, 90);
  border-radius: 12px;

  p {
    padding: 6px 50px;
  }
}

.edit {
  width: 35%;
  padding: 5vh 22vh;
  border: 5px solid rgb(99, 143, 176);
  box-shadow: 8px 8px 8px rgb(68, 76, 90);
  border-radius: 12px;
  // background-color: rgba(151, 163, 204, 0.5);
  h3 {
    padding-bottom: 20px;
  }
  margin-left: 30%;
}

button {
  margin-left: 40%;
}
:deep(.el-form-item__label) {
  width: 130px !important;
  color: white;
  font-size: 15px;
}
</style>