import React from 'react';
import echarts from 'echarts';

export class Echart extends React.Component {
  constructor(props) {
    super(props);
    this.setPieOption = this.setPieOption.bind(this);
    this.initPie = this.initPie.bind(this);
  }

  initPie() {
    const { data } = this.props; //外部传入的data数据
    let myChart = echarts.init(this.refs.PieEcharts); //初始化echarts
    //我们要定义一个setPieOption函数将data传入option里面
    let options = this.setPieOption(data);
    //设置options
    myChart.setOption(options);
    window.addEventListener('resize', function () {
      myChart.resize();
    });
  }

  componentDidMount() {
    this.initPie();
  }

  componentDidUpdate() {
    this.initPie();
  }

  render() {
    return (
      <div className="pie-react">
        <div ref="PieEcharts" style={{ width: this.props.width, height: this.props.height }}></div>
      </div>
    );
  }

  setPieOption(data) {
    return {
      title: {
        text: '我是被修改的标题内容'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
      ]
    }

  }
}
