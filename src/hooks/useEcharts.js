import echarts from "./config";
import { ref, watch, watchEffect, onBeforeUnmount } from "vue";
// ref对象比较好
const useEcharts = (echartsRef) => {
  const options = ref({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["expense", "price"],
      // selectedMode: false,
    },
    xAxis: {
      type: "category",
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "expense",
        type: "bar",
        emphasis: {
          focus: "self",
        },
        data: [20, 30, 30, 40, 50, 60],
      },
      {
        name: "price",
        type: "bar",
        barGap: "-100%",
        emphasis: {
          focus: "self",
        },
        data: [5, 20, 20, 10, 10, 20],
      },
    ],
  });

  let echartInstance = null;

  // 监听echarts的Ref对象变化，因为hooks执行时，没有ref对象
  watch([echartsRef, options], ([nextRef, nextOptions]) => {
    // 判断echartInstance实例对象是否存在,目的是为了复用echarts对象
    if (nextRef) {
      echartInstance = echarts.getInstanceByDom(nextRef);
      if (!echartInstance) {
        echartInstance = echarts.init(nextRef, undefined, { renderer: "svg" });
      }
      // 设置设置配置项
      echartInstance.setOption(nextOptions);
    }
  });

  const setEchartSize = () => {
    echartInstance.resize({ animation: { duration: 300 } });
  };

  watchEffect((cleanUpEffect) => {
    window.addEventListener("resize", setEchartSize, false);

    // 当你在执行下一次副作用函数之前，清除上一次未完成的副作用操作
    // 相当于竞赛一样
    cleanUpEffect(() => {
      window.removeEventListener("resize", setEchartSize);
    });
  });

  const setEchartOptions = (value) => {
    options.value = Object.assign({}, options.value, value);
  };

  // 销毁实例对象
  onBeforeUnmount(() => echartInstance.dispose());

  return {
    setEchartOptions,
  };
};

export default useEcharts;
