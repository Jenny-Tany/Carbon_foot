<template>
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
          <h2 :style="titleStyle">Blue coast</h2>
          <br>
          <span :style="subtitleStyle"> 海洋，地球科学名词，是地球上最广阔的水体的总称。地球表面被各大陆地分隔为彼此相通的广大水域称为海洋，海洋的中心部分称作洋，边缘部分称作海，彼此沟通组成统一的水体.地球上海洋总面积约为3.6亿平方千米，约占地球表面积的71%，平均水深约3795米。海洋中含有十三亿五千多万立方千米的水，约占地球上总水量的97%，而可用于人类饮用只占2%。🌸</span>
          <div :style="circleStyle" class="circle"></div>
          <img :style="imageStyle" src="@/assets/person.jpg" alt="">
          <button :style="buttonStyle" @click="toggleContent"></button>
      </div>
  </div>
  </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
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