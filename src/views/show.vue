<template>
    		<el-backtop
			:right="35"
			:bottom="30" />
    <div class="contain">
        <div class="show">
        <el-carousel :interval="4000" type="card" height="200px">
          <el-carousel-item v-for="item in 4" :key="item">
            <img :src="`src/assets/show${item}.jpg`" alt="">
            <h3 text="2xl" justify="center">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
    </div>
    <div class="what">
        <h2>什么是碳足迹？</h2>
        <br>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;碳足迹定义为排放到大气中的温室气体总量，例如二氧化碳 （CO2）、甲烷 （CH4）、一氧化二氮 （N2O）、氢氟碳化物 （HFCs），以当量吨数表示 CO2。
          <p></p>
          它与个人、社区、组织、流程、产品或服务或事件等的活动有关。因此，个人碳足迹可以称为我们个人行为（如交通、家庭活动、衣服和食物）产生的温室气体总量。
          <p></p>产品的碳足迹衡量的是其生命周期中的温室气体排放总量——从原材料提取和生产到消费者的最终使用，包括回收或处置。
          <p></p>
          一个国家的碳足迹考虑了能源和材料利用总量、工厂和其他碳封存的温室气体排放，以及进出口过程中的间接和直接排放。</p>
      </div>
    </div>
    <div class="vehicle">
        <div id="chart"></div>
    </div>


    <div class="body">
      <!-- <div class="back">
          <button @click="back"></button>
      </div> -->
  <div class="content">
      <div :style="content1" class="content-l">
          <ul class="nav">
              <li><a href="#">⭐Brief &nbsp;&nbsp; introduction</a></li>
              <li><a href="#">🌙Photo☀</a></li>
          </ul>
          <h2 :style="titleStyle">Carbonfootprint</h2>
          <br>
          <span :style="subtitleStyle"> A carbon footprint is defined as the total amount of greenhouse gases emitted into the atmosphere, such as carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), hydrofluorocarbons (HFCs), expressed in equivalent tons of CO2. It is associated with the activities of an individual, a community, an organisation, a process, a product or service, or an event, among other things. Individual carbon footprint can thus be termed as the total amount of greenhouse gases produced by our personal actions such as transportation, household activities, clothing and food. 🌸</span>
          <div :style="circleStyle" class="circle"></div>
          <img :style="imageStyle" src="@/assets/person.jpg" alt="">
          <button :style="buttonStyle" @click="toggleContent"></button>
      </div>
  </div>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { ref, computed } from 'vue';
import { onMounted } from 'vue';
onMounted(() => {
  const chartElement = document.getElementById('chart');
  if (!chartElement) {
    console.error("Element with ID 'title' not found.");
    return;
  }
const myChart1 = echarts.init(document.getElementById('chart'));
const pathSymbols = {
  plane:
    'path://M1.112,32.559l2.998,1.205l-2.882,2.268l-2.215-0.012L1.112,32.559z M37.803,23.96 c0.158-0.838,0.5-1.509,0.961-1.904c-0.096-0.037-0.205-0.071-0.344-0.071c-0.777-0.005-2.068-0.009-3.047-0.009 c-0.633,0-1.217,0.066-1.754,0.18l2.199,1.804H37.803z M39.738,23.036c-0.111,0-0.377,0.325-0.537,0.924h1.076 C40.115,23.361,39.854,23.036,39.738,23.036z M39.934,39.867c-0.166,0-0.674,0.705-0.674,1.986s0.506,1.986,0.674,1.986 s0.672-0.705,0.672-1.986S40.102,39.867,39.934,39.867z M38.963,38.889c-0.098-0.038-0.209-0.07-0.348-0.073 c-0.082,0-0.174,0-0.268-0.001l-7.127,4.671c0.879,0.821,2.42,1.417,4.348,1.417c0.979,0,2.27-0.006,3.047-0.01 c0.139,0,0.25-0.034,0.348-0.072c-0.646-0.555-1.07-1.643-1.07-2.967C37.891,40.529,38.316,39.441,38.963,38.889z M32.713,23.96 l-12.37-10.116l-4.693-0.004c0,0,4,8.222,4.827,10.121H32.713z M59.311,32.374c-0.248,2.104-5.305,3.172-8.018,3.172H39.629 l-25.325,16.61L9.607,52.16c0,0,6.687-8.479,7.95-10.207c1.17-1.6,3.019-3.699,3.027-6.407h-2.138 c-5.839,0-13.816-3.789-18.472-5.583c-2.818-1.085-2.396-4.04-0.031-4.04h0.039l-3.299-11.371h3.617c0,0,4.352,5.696,5.846,7.5 c2,2.416,4.503,3.678,8.228,3.87h30.727c2.17,0,4.311,0.417,6.252,1.046c3.49,1.175,5.863,2.7,7.199,4.027 C59.145,31.584,59.352,32.025,59.311,32.374z M22.069,30.408c0-0.815-0.661-1.475-1.469-1.475c-0.812,0-1.471,0.66-1.471,1.475 s0.658,1.475,1.471,1.475C21.408,31.883,22.069,31.224,22.069,30.408z M27.06,30.408c0-0.815-0.656-1.478-1.466-1.478 c-0.812,0-1.471,0.662-1.471,1.478s0.658,1.477,1.471,1.477C26.404,31.885,27.06,31.224,27.06,30.408z M32.055,30.408 c0-0.815-0.66-1.475-1.469-1.475c-0.808,0-1.466,0.66-1.466,1.475s0.658,1.475,1.466,1.475 C31.398,31.883,32.055,31.224,32.055,30.408z M37.049,30.408c0-0.815-0.658-1.478-1.467-1.478c-0.812,0-1.469,0.662-1.469,1.478 s0.656,1.477,1.469,1.477C36.389,31.885,37.049,31.224,37.049,30.408z M42.039,30.408c0-0.815-0.656-1.478-1.465-1.478 c-0.811,0-1.469,0.662-1.469,1.478s0.658,1.477,1.469,1.477C41.383,31.885,42.039,31.224,42.039,30.408z M55.479,30.565 c-0.701-0.436-1.568-0.896-2.627-1.347c-0.613,0.289-1.551,0.476-2.73,0.476c-1.527,0-1.639,2.263,0.164,2.316 C52.389,32.074,54.627,31.373,55.479,30.565z',
  train:
    'path://M67.335,33.596L67.335,33.596c-0.002-1.39-1.153-3.183-3.328-4.218h-9.096v-2.07h5.371 c-4.939-2.07-11.199-4.141-14.89-4.141H19.72v12.421v5.176h38.373c4.033,0,8.457-1.035,9.142-5.176h-0.027 c0.076-0.367,0.129-0.751,0.129-1.165L67.335,33.596L67.335,33.596z M27.999,30.413h-3.105v-4.141h3.105V30.413z M35.245,30.413 h-3.104v-4.141h3.104V30.413z M42.491,30.413h-3.104v-4.141h3.104V30.413z M49.736,30.413h-3.104v-4.141h3.104V30.413z  M14.544,40.764c1.143,0,2.07-0.927,2.07-2.07V35.59V25.237c0-1.145-0.928-2.07-2.07-2.07H-9.265c-1.143,0-2.068,0.926-2.068,2.07 v10.351v3.105c0,1.144,0.926,2.07,2.068,2.07H14.544L14.544,40.764z M8.333,26.272h3.105v4.141H8.333V26.272z M1.087,26.272h3.105 v4.141H1.087V26.272z M-6.159,26.272h3.105v4.141h-3.105V26.272z M-9.265,41.798h69.352v1.035H-9.265V41.798z',
  ship: 'path://M16.678,17.086h9.854l-2.703,5.912c5.596,2.428,11.155,5.575,16.711,8.607c3.387,1.847,6.967,3.75,10.541,5.375 v-6.16l-4.197-2.763v-5.318L33.064,12.197h-11.48L20.43,15.24h-4.533l-1.266,3.286l0.781,0.345L16.678,17.086z M49.6,31.84 l0.047,1.273L27.438,20.998l0.799-1.734L49.6,31.84z M33.031,15.1l12.889,8.82l0.027,0.769L32.551,16.1L33.031,15.1z M22.377,14.045 h9.846l-1.539,3.365l-2.287-1.498h1.371l0.721-1.352h-2.023l-0.553,1.037l-0.541-0.357h-0.34l0.359-0.684h-2.025l-0.361,0.684 h-3.473L22.377,14.045z M23.695,20.678l-0.004,0.004h0.004V20.678z M24.828,18.199h-2.031l-0.719,1.358h2.029L24.828,18.199z  M40.385,34.227c-12.85-7.009-25.729-14.667-38.971-12.527c1.26,8.809,9.08,16.201,8.213,24.328 c-0.553,4.062-3.111,0.828-3.303,7.137c15.799,0,32.379,0,48.166,0l0.066-4.195l1.477-7.23 C50.842,39.812,45.393,36.961,40.385,34.227z M13.99,35.954c-1.213,0-2.195-1.353-2.195-3.035c0-1.665,0.98-3.017,2.195-3.017 c1.219,0,2.195,1.352,2.195,3.017C16.186,34.604,15.213,35.954,13.99,35.954z M23.691,20.682h-2.02l-0.588,1.351h2.023 L23.691,20.682z M19.697,18.199l-0.721,1.358h2.025l0.727-1.358H19.697z',
  car: 'path://M49.592,40.883c-0.053,0.354-0.139,0.697-0.268,0.963c-0.232,0.475-0.455,0.519-1.334,0.475 c-1.135-0.053-2.764,0-4.484,0.068c0,0.476,0.018,0.697,0.018,0.697c0.111,1.299,0.697,1.342,0.931,1.342h3.7 c0.326,0,0.628,0,0.861-0.154c0.301-0.196,0.43-0.772,0.543-1.78c0.017-0.146,0.025-0.336,0.033-0.56v-0.01 c0-0.068,0.008-0.154,0.008-0.25V41.58l0,0C49.6,41.348,49.6,41.09,49.592,40.883L49.592,40.883z M6.057,40.883 c0.053,0.354,0.137,0.697,0.268,0.963c0.23,0.475,0.455,0.519,1.334,0.475c1.137-0.053,2.762,0,4.484,0.068 c0,0.476-0.018,0.697-0.018,0.697c-0.111,1.299-0.697,1.342-0.93,1.342h-3.7c-0.328,0-0.602,0-0.861-0.154 c-0.309-0.18-0.43-0.772-0.541-1.78c-0.018-0.146-0.027-0.336-0.035-0.56v-0.01c0-0.068-0.008-0.154-0.008-0.25V41.58l0,0 C6.057,41.348,6.057,41.09,6.057,40.883L6.057,40.883z M49.867,32.766c0-2.642-0.344-5.224-0.482-5.507 c-0.104-0.207-0.766-0.749-2.271-1.773c-1.522-1.042-1.487-0.887-1.766-1.566c0.25-0.078,0.492-0.224,0.639-0.241 c0.326-0.034,0.345,0.274,1.023,0.274c0.68,0,2.152-0.18,2.453-0.48c0.301-0.303,0.396-0.405,0.396-0.672 c0-0.268-0.156-0.818-0.447-1.146c-0.293-0.327-1.541-0.49-2.273-0.585c-0.729-0.095-0.834,0-1.022,0.121 c-0.304,0.189-0.32,1.919-0.32,1.919l-0.713,0.018c-0.465-1.146-1.11-3.452-2.117-5.269c-1.103-1.979-2.256-2.599-2.737-2.754 c-0.474-0.146-0.904-0.249-4.131-0.576c-3.298-0.344-5.922-0.388-8.262-0.388c-2.342,0-4.967,0.052-8.264,0.388 c-3.229,0.336-3.66,0.43-4.133,0.576s-1.633,0.775-2.736,2.754c-1.006,1.816-1.652,4.123-2.117,5.269L9.87,23.109 c0,0-0.008-1.729-0.318-1.919c-0.189-0.121-0.293-0.225-1.023-0.121c-0.732,0.104-1.98,0.258-2.273,0.585 c-0.293,0.327-0.447,0.878-0.447,1.146c0,0.267,0.094,0.379,0.396,0.672c0.301,0.301,1.773,0.48,2.453,0.48 c0.68,0,0.697-0.309,1.023-0.274c0.146,0.018,0.396,0.163,0.637,0.241c-0.283,0.68-0.24,0.524-1.764,1.566 c-1.506,1.033-2.178,1.566-2.271,1.773c-0.139,0.283-0.482,2.865-0.482,5.508s0.189,5.02,0.189,5.86c0,0.354,0,0.976,0.076,1.565 c0.053,0.354,0.129,0.697,0.268,0.966c0.232,0.473,0.447,0.516,1.334,0.473c1.137-0.051,2.779,0,4.477,0.07 c1.135,0.043,2.297,0.086,3.33,0.11c2.582,0.051,1.826-0.379,2.928-0.36c1.102,0.016,5.447,0.196,9.424,0.196 c3.976,0,8.332-0.182,9.423-0.196c1.102-0.019,0.346,0.411,2.926,0.36c1.033-0.018,2.195-0.067,3.332-0.11 c1.695-0.062,3.348-0.121,4.477-0.07c0.886,0.043,1.103,0,1.332-0.473c0.132-0.269,0.218-0.611,0.269-0.966 c0.086-0.592,0.078-1.213,0.078-1.565C49.678,37.793,49.867,35.408,49.867,32.766L49.867,32.766z M13.219,19.735 c0.412-0.964,1.652-2.9,2.256-3.244c0.145-0.087,1.426-0.491,4.637-0.706c2.953-0.198,6.217-0.276,7.73-0.276 c1.513,0,4.777,0.078,7.729,0.276c3.201,0.215,4.502,0.611,4.639,0.706c0.775,0.533,1.842,2.28,2.256,3.244 c0.412,0.965,0.965,2.858,0.861,3.116c-0.104,0.258,0.104,0.388-1.291,0.275c-1.387-0.103-10.088-0.216-14.185-0.216 c-4.088,0-12.789,0.113-14.184,0.216c-1.395,0.104-1.188-0.018-1.291-0.275C12.254,22.593,12.805,20.708,13.219,19.735 L13.219,19.735z M16.385,30.511c-0.619,0.155-0.988,0.491-1.764,0.482c-0.775,0-2.867-0.353-3.314-0.371 c-0.447-0.017-0.842,0.302-1.076,0.362c-0.23,0.06-0.688-0.104-1.377-0.318c-0.688-0.216-1.092-0.155-1.316-1.094 c-0.232-0.93,0-2.264,0-2.264c1.488-0.068,2.928,0.069,5.621,0.826c2.693,0.758,4.191,2.213,4.191,2.213 S17.004,30.357,16.385,30.511L16.385,30.511z M36.629,37.293c-1.23,0.164-6.386,0.207-8.794,0.207c-2.412,0-7.566-0.051-8.799-0.207 c-1.256-0.164-2.891-1.67-1.764-2.865c1.523-1.627,1.24-1.576,4.701-2.023C24.967,32.018,27.239,32,27.834,32 c0.584,0,2.865,0.025,5.859,0.404c3.461,0.447,3.178,0.396,4.699,2.022C39.521,35.623,37.887,37.129,36.629,37.293L36.629,37.293z  M48.129,29.582c-0.232,0.93-0.629,0.878-1.318,1.093c-0.688,0.216-1.145,0.371-1.377,0.319c-0.231-0.053-0.627-0.371-1.074-0.361 c-0.448,0.018-2.539,0.37-3.313,0.37c-0.772,0-1.146-0.328-1.764-0.481c-0.621-0.154-0.966-0.154-0.966-0.154 s1.49-1.464,4.191-2.213c2.693-0.758,4.131-0.895,5.621-0.826C48.129,27.309,48.361,28.643,48.129,29.582L48.129,29.582z'
};
const labelSetting = {
  show: true,
  position: 'right',
  offset: [10, 0],
  fontSize: 16
};
  myChart1.setOption({
    title: {
    text: '世界的交通选择情况'
  },
  legend: {
    data: ['2022', '2023']
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    containLabel: true,
    left: 20
  },
  yAxis: {
    data: [ 'ship', 'plane', 'train', 'car'],
    inverse: true,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      margin: 30,
      fontSize: 14
    },
    axisPointer: {
      label: {
        show: true,
        margin: 30
      }
    }
  },
  xAxis: {
    splitLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    axisLine: { show: false }
  },
  series: [
    {
      name: '2022',
      type: 'pictorialBar',
      label: labelSetting,
      symbolRepeat: true,
      symbolSize: ['80%', '60%'],
      barCategoryGap: '40%',
      data: [
        {
          value: 21,
          symbol: pathSymbols.ship
        },
        {
          value: 66,
          symbol: pathSymbols.plane
        },
        {
          value: 78,
          symbol: pathSymbols.train
        },
        {
          value: 123,
          symbol: pathSymbols.car
        }
      ]
    },
    {
      name: '2023',
      type: 'pictorialBar',
      barGap: '10%',
      label: labelSetting,
      symbolRepeat: true,
      symbolSize: ['80%', '60%'],
      data: [
        {
          value: 29,
          symbol: pathSymbols.ship
        },
        {
          value: 73,
          symbol: pathSymbols.plane
        },
        {
          value: 91,
          symbol: pathSymbols.train
        },
        {
          value: 95,
          symbol: pathSymbols.car
        }
      ]
    }
  ]
  })
})

  const index = ref(0);
  const toggleContent = () => {
    index.value++;
  };
  
  const titleStyle = computed(() => {
    if (index.value % 2 === 1) {
      return {
        transform: 'translate(-180px, 0)',
        width: '50%'
      };
    } else {
      return {
        transform: 'translateY(-2vh)',
        width: '80%'
      };
    }
  });
  const content1 = computed(() => {
    if (index.value % 2 === 1) {
      return {
        width: '1999%'
      };
    } else {
      return {
        width: '950%'
      };
    }
  });
  
  const subtitleStyle = computed(() => {
    if (index.value % 2 === 1) {
      return {
        transform: 'translate(-180px, 10px)',
        width: '50%',
        font: "400 25px 'Gochi Hand'",
        lineHeight: '1.5'
      };
    } else {
      return {
        transform: 'translateY(0)',
        width: '80%',
        font: "100 20px 'Gochi Hand'",
        lineHeight: '2'
      };
    }
  });
  
  const buttonStyle = computed(() => {
    if (index.value % 2 === 1) {
      return {
        width: '18vw',
        height: '6vh',
        top: '20%',
        backgroundPositionX: '70px',
        transform: 'rotate(180deg)'
      };
    } else {
      return {
        width: '150px',
        height: '50px',
        top: '85%',
        backgroundPositionX: '0',
        transform: 'rotate(0deg)'
      };
    }
  });
  
  const circleStyle = computed(() => {
    if (index.value % 2 === 1) {
      return {
        width: '400px',
        height: '400px',
        left: '72%',
        top: '50%',
        border: '23px #ffffff dashed'
      };
    } else {
      return {
        width: '800px',
        height: '800px',
        left: '-440px',
        bottom: '-440px',
        border: '43px #fff dashed'
      };
    }
  });
  
  const imageStyle = computed(() => {
    if (index.value % 2 === 1) {
      return {
        bottom: '0px'
      };
    } else {
      return {
        bottom: '-500px'
      };
    }
  });
  
</script>

<style lang="scss" scoped>
.contain {
    padding: 5vh 0 2vh 0;
    background-color: rgba(158, 212, 104, 0.6);
}
.show {
    margin: 10vh 10vh;
    img {
		width: 99%;
		height: 98%;
        border: 3px solid rgb(81, 233, 104,.7);
        box-shadow: 17px 17px 17px rgb(135, 219, 135);
	}
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
:deep(.el-carousel__container) {
    height: 300px !important;
}
.vehicle {
    margin-top: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
#chart {
    width: 800px;
    height: 400px;
}
.what {
    margin: 0 auto;
    margin-bottom: 10vh;
    max-width: 75vw;
    font-size: 24px;
    p {
      padding: 3px;
      font-size: 22px;
    }
}

// blue
@import url('https://fonts.googleapis.com/css?family=Gochi+Hand');
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      list-style: none;
      text-decoration: none;
      transition:  all 520ms cubic-bezier(0.000, 1.650, 0.635, 0.785);
  }
  button {
      cursor: pointer;
  }
  .back {
      position: relative;
      top: -46%;
      left: 5%;
      button{
          transform: rotate(180deg);
          width: 7vw;
          height: 5vh;
          border-radius: 10px;
          // background-color: #0025507a !important;
      }
  } 
  
  .body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
      background-image: linear-gradient(to bottom right,
          #bce9fd,
          #99c0f9);
  }
  
  .content {
      display: flex;
      width: 86vw;
      height: 84vh;
      border: 30px #6AA8EC solid;
      border-radius: 10px;
      position: relative;
      margin-top: -5vh;
  }
  
  
  .content-l,
  .content-r {
      position: relative;
      transform-origin: center;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
  }
  
  .content-l {
      background-color: #6AA8EC;
      flex-direction: column;
      color: #fff;
      span {
          font-size: 30px !important;
      }
  }
  
  
  .content-l img {
      position: absolute;
      right: 20px;
      width: 19vw;
      bottom: -500px;
      transform: rotateY(180deg);
  }
  
  .nav {
      display: flex;
      width: 95%;
      height: 6vh;
      justify-content: center;
      position: absolute;
      top: 0px;
      li {
          position: relative;
          width: 40%;
          height: 100%;
          text-align: center;
          border-right: 1px dashed #000;
          font: 100 28px 'Gochi Hand';
          a {
              display: block;
              width: 100%;
              height: 100%;
              line-height: 6vh;
              color: #fff;
          }
      }
  }
  
  .nav li:hover a {
      color: #6AA8EC;
      background-color: #ffffff;
  }
  
  .nav li:nth-child(4) {
      border: none;
  }
  
  
  .content-l {
      h2 {
          font: 320 50px '';
          font-family: 'Fredoka One', sans-serif;
          position: relative;
      }
      span {
          color: #0c4888;
          font: 100 20px 'Gochi Hand';
          line-height: 2;
          transition: .3s;
      }
  }
    .content-l h2 {
      margin-top: 3vh;
      margin-left: -8vh;
    }
  .content-l h2,
  .content-l span {
      z-index: 999;
      width: 80%;
      transform: translateY(-6px);
  }
  
  .content-l button, button {
      width: 130px;
      height: 50px;
      border: #ffffffc0 solid 3px;
      background-color: #0a3f777a;
      border-radius: 3px;
      position: absolute;
      right: 40px;
      top: 80%;
      background-image: url(src/assets/button.png);
      background-size: contain;
      background-repeat: no-repeat;
  }
  
   button:hover {
      background-color: #ffffff7a;
  }
  
  .circle {
      width: 800px;
      height: 800px;
      position: absolute;
      bottom: -440px;
      left: -440px;
      border-radius: 50%;
      border: 43px #fff dashed;
      animation: rotate 100s infinite linear;
  }
  @keyframes rotate {
      from {
          transform: rotate(0deg);
      }
  
      to {
          transform: rotate(360deg);
      }
  }
</style>