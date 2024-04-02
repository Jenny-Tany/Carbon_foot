<template>
  		<el-backtop
			:right="35"
			:bottom="30" />
    <div class="contain">
        <div class="des">
        <div id="title"></div>
    </div>
    <div class="show">
        <div id="forest"></div>
    </div>
    <div class="effort">
      <div class="card">
        <img :src="pics[0]" alt="">
        <p>{{ des[0].data }}</p>
      </div>
      <div class="card">
        <p>{{ des[1].data }}</p>
        <img :src="pics[1]" alt="">
      </div>
      <div class="card">
        <img :src="pics[2]" alt="">
        <p>{{ des[2].data }}</p>
      </div>
      <div class="card">
        <p>{{ des[3].data }}</p>
        <img :src="pics[3]" alt="">
      </div>
      <div class="card">
        <img :src="pics[4]" alt="">
        <p>{{ des[4].data }}</p>
      </div>
    </div>
    </div>



</template>

<script setup>
import * as echarts from 'echarts';
import { onMounted } from 'vue';
const pics = ['src/assets/effort1.png', 'src/assets/effort2.png', 'src/assets/effort3.png', 'src/assets/effort4.png', 'src/assets/effort5.png']
const des = [
  {id: 1, data:'2017年，习近平总书记在新年贺词中发出“每条河流要有‘河长’了”的号令。近年来，湖南省在全国率先构建“五级河长体系”，首创总河长令，形成了党政同责、河长领治、部门联治、流域共治、全民同治的良好态势。2019年，浏阳河入选全国第一批17个示范河湖名单。从脍炙人口的“美丽河”到一河碧水润民生的“幸福河”，浏阳河依托“河湖长制”谱就出“两山”理念之下的新时代治水欢歌。'},
  {id: 2, data:'“促进经济社会发展全面绿色转型，建设人与自然和谐共生的现代化。”党的十九届五中全会再次为推进生态文明建设注入动力。“绿水青山就是金山银山理念”指引中国经济社会绿色变革。在祖国的西南边陲云南，一个个推进绿色发展、筑牢西南生态安全屏障、守好绿水青山的故事正在上演。环境的改善，带来了人水和谐。记者漫步抚仙湖边，云山苍苍，碧波茫茫，海鸥盘旋，水鸟啼鸣。来自各地的游人在拍照，蓝天白云下的抚仙湖，人与自然和谐共生的美景被定格在人们的镜头中。'},
  {id: 3, data:'近年来，云南省采取开展声环境功能区划分和调整、积极推进噪声监测能力建设、严格环评审批、加强行政执法监督检查、扎实做好“绿色护考”工作、加大噪声投诉督办力度等有效措施，加强噪声污染防治，并取得积极进展。云南省生态环境厅副厅长兰骏介绍，通过全省各级各有关部门共同努力，全省声环境总体良好。2023年，16个州（市）政府所在地城市区域声环境等效声级值为47.5分贝；交通声环境等效声级值为60.1分贝；功能区声环境质量昼夜达标率平均为96.7%，均呈持续好转态势。'},
  {id: 4, data:'新疆维吾尔自治区伊犁哈萨克自治州近日召开生态环境保护重点工作推进及伊犁河谷大气环境整治调度会，听取工作汇报，分析当前形势，对下一步工作进行再动员、再部署，全力推动生态环保督察整改和大气污染防治工作取得新突破。会议通报了伊犁州生态环境保护重点工作推进及伊犁河谷大气环境整治相关情况；伊犁州相关部门及部门县市就第一生态环境监察专员办公室反馈问题落实情况作表态发言。'},
  {id: 5, data:'在因地制宜科学选择治理模式方面，以生态化、资源化、可持续为导向，根据村庄地形地貌、人口聚集程度、排水去向和区域水环境质量改善需求等，因地制宜科学合理选择治理模式和技术。优先选择低成本、低能耗、易维护、高效率的农村生活污水治理技术工艺，防止建设和运行维护成本过高导致治理设施难以持续稳定运行。在完善设施建设及管护机制方面，建立有关职能部门、运维主管部门、乡镇（街道）、运维单位、村（社区）委员会、村民等共同参与建设和管护的机制。'},

]
onMounted(() => {
  const chartElement = document.getElementById('title');
  if (!chartElement) {
    console.error("Element with ID 'title' not found.");
    return;
  }
  // 字体动画
const myChart1 = echarts.init(document.getElementById('title'));
myChart1.setOption({
  graphic: {
    elements: [
      {
        type: 'text',
        left: 'center',
        top: 'center',
        style: {
          text: '我们一直在努力~~',
          fontSize: 80,
          fontWeight: 'bold',
          lineDash: [0, 200],
          lineDashOffset: 0,
          fill: 'transparent',
          stroke: '#000',
          lineWidth: 1,
        },
        keyframeAnimation: {
          duration: 3000,
          loop: true,
          keyframes: [
            {
              percent: 0.7,
              style: {
                fill: 'transparent',
                lineDashOffset: 200,
                lineDash: [200, 0],
              },
            },
            {
              percent: 0.6,
              style: {
                fill: 'transparent',
              },
            },
            {
              percent: 0.8,
              style: {
                fill: '#76a93a',
              },
            },
            {
              percent: 0.9, // New keyframe
              style: {
                fill: '#76a93a',
              },
            },
            {
              percent: 1,
              style: {
                fill: '#76a93a',
              },
            },
          ],
        },
      },
    ],
  },
});

// 树林
const treeDataURI =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA2CAYAAADUOvnEAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5tJREFUeNrcWE1oE0EUnp0kbWyUpCiNYEpCFSpIMdpLRTD15s2ePHixnj00N4/GoyfTg2fbiwdvvagHC1UQ66GQUIQKKgn1UAqSSFua38b3prPJZDs7s5ufKn0w7CaZ2W/fe9/73kyMRqNB3Nrj1zdn4RJ6du9T2u1a2iHYSxjP4d41oOHGQwAIwSUHIyh8/RA8XeiXh0kLGFoaXiTecw/hoTG4ZCSAaFkY0+BpsZceLtiAoV2FkepZSDk5EpppczBvpuuQCqx0YnkYcVVoqQYMyeCG+lFdaGkXeVOFNu4aEBalOBk6sbQrQF7gSdK5JXjuHXuYVIVyr0TZ0FjKDeCs6km7JYMUdrWAUVmZUBtmRnVPK+x6nIR2xomH06R35ggwJPeofWphr/W5UjPIxq8B2bKgE8C4HVHWvg+2gZjXj19PkdFztY7bk9TDCH/g6oafDPpaoMvZIRI5WyMB/0Hv++HkpTKE0kM+A+h20cPAfN4GuRyp9G+LMTW+z8rCLI8b46XO9zRcYZTde/j0AZm8WGb3Y2F9KLlE2nqYkjFLJAsDOl/lea0q55mqxXcL7YBc++bsCPMe8mUyU2ZIpnCoblca6TZA/ga2Co8PGg7UGUlEDd0ueptglbrRZLLE7poti6pCaWUo2pu1oaYI1CF9b9cCZPO3F8ikJQ/rPpQT5YETht26ss+uCIL2Y8vHwJGpA96GI5mjOlaKhowUy6BcNcgIhDviTGWCGFaqEuufWz4pgcbCh+w0gEOyOjTlTtYYlIWPYWKEsLDzOs+nhzaO1KEpd+MXpOoTUgKiNyhdy5aSMPNVqxtSsJFgza5EWA4zKtCJ2OGbLn0JSLu8+SL4G86p1Fpr7ABXdGFF/UTD4rfmFYFw4G9VAJ9SM3aF8l3yok4/J6IV9sDVb36ynmtJ2M5+CwxTYBdKNMBaocKGV2nYgkz6r+cHBP30MzAfi4Sy+BebSoPIOi8PW1PpCCvr/KOD4k9Zu0WSH0Y0+SxJ2awp/nlwKtcGyHOJ8vNHtRJzhPlsHr8MogtlVtwUU0tSM1x58upSKbfJnSKUR07GVMKkDNfXpzpv0RTHy3nZMVx5IOWdZIaPabGFvfpwpjnvfmJHXLaEvZUTseu/TeLc+xgAPhEAb/PbjO6PBaOTf6LQRh/dERde23zxLtOXbaKNhfq2L/1fAOPHDUhOpIf5485h7l+GNHHiSYPKE3Myz9sFxoJuAyazvwIMAItferha5LTqAAAAAElFTkSuQmCC';
const beginYear = 2016;
const endYear = 2050;
const lineCount = 10;
const myChart2 = echarts.init(document.getElementById('forest'));
myChart2.setOption({
  color: ['#e54035'],
  xAxis: {
    axisLine: { show: false },
    axisLabel: { show: false },
    axisTick: { show: false },
    splitLine: { show: false },
    name: beginYear + '',
    nameLocation: 'middle',
    nameGap: 40,
    nameTextStyle: {
      color: 'green',
      fontSize: 30,
      fontFamily: 'Arial'
    },
    min: -2800,
    max: 2800
  },
  yAxis: {
    data: makeCategoryData(),
    show: false
  },
  grid: {
    top: 'center',
    height: 280
  },
  series: [
    {
      name: 'all',
      type: 'pictorialBar',
      symbol: 'image://' + treeDataURI,
      symbolSize: [30, 55],
      symbolRepeat: true,
      data: makeSeriesData(beginYear),
      animationEasing: 'elasticOut'
    },
    {
      name: 'all',
      type: 'pictorialBar',
      symbol: 'image://' + treeDataURI,
      symbolSize: [30, 55],
      symbolRepeat: true,
      data: makeSeriesData(beginYear, true),
      animationEasing: 'elasticOut'
    }
  ]
})
// Make fake data.
function makeCategoryData() {
  var categoryData = [];
  for (var i = 0; i < lineCount; i++) {
    categoryData.push(i + 'a');
  }
  return categoryData;
}
function makeSeriesData(year, negative) {
  // make a fake value just for demo.
  const r = (year - beginYear + 1) * 10;
  const seriesData = [];
  for (let i = 0; i < lineCount; i++) {
    let sign = negative ? -1 * (i % 3 ? 0.9 : 1) : 1 * ((i + 1) % 3 ? 0.9 : 1);
    seriesData.push({
      value:
        sign *
        (year <= beginYear + 1
          ? Math.abs(i - lineCount / 2 + 0.5) < lineCount / 5
            ? 5
            : 0
          : (lineCount - Math.abs(i - lineCount / 2 + 0.5)) * r),
      symbolOffset: i % 2 ? ['50%', 0] : undefined
    });
  }
  return seriesData;
}
// Set dynamic data.
var currentYear = beginYear;
setInterval(function () {
  currentYear++;
  if (currentYear > endYear) {
    currentYear = beginYear;
  }
  myChart2.setOption({
    xAxis: {
      name: currentYear
    },
    series: [
      {
        data: makeSeriesData(currentYear)
      },
      {
        data: makeSeriesData(currentYear, true)
      }
    ]
  });
}, 800);
})
</script>

<style lang="scss" scoped>
.effort {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%; 
  border-radius: 10px;
  border: 4px solid rgb(41, 115, 69);
  box-shadow: 8px 8px 8px rgb(97, 132, 152);
  margin: 2vh 0;
  padding: 2vh;
  p {
    width: 50%;
    padding: 15px;
    font-size: 20px;
  } 
  img {
    width: 400px;
    height: 250px;
    border-radius: 10px;
  }
}
.contain {
    background-color: rgb(141, 207, 113, .8);
}
.des {
    margin: -30px auto;
    width: 800px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
}
#title {
    width: 100%;
    height: 100%;
}
#forest {
    width: 800px;
    height: 500px;
}
.show {
    display: flex;
    justify-content: center;
    align-items: center;  
    margin-top: -5vh;
}
</style>