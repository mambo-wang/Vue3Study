<script setup>
import { onMounted , ref} from 'vue'
import * as echarts from 'echarts'
let myChart = ref(null)
let greetings = ref(null)
onMounted(() => {
  console.log(echarts)
  myChart.value = echarts.init(greetings.value)

      // 使用刚指定的配置项和数据显示图表。
      myChart.value.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
})
</script>

<template>
  <div id="count">
      <button @click="count++">{{ count }}</button>
  </div>

  <div class="greetings" ref="greetings">
    home
  </div>

</template>

<style scoped>
.count{
  width: 100px;
  height: 10px;
}
.greetings{
  width: 1000px;
  height: 600px;
  border: red solid 1px;
}
</style>
