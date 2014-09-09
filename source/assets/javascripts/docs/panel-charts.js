$(function () {

  // panel 1
  if ($('#panel-charts').length > 0){

    maximum_value = (parseInt(Math.max.apply(null, messages_chart_data.values[0].data) / 100) + 1) * 100 || 1

    chart = new Highcharts.Chart({
      chart: { renderTo: 'panel-charts', type: 'column' },
      title: {
        text: '',
      },
      colors: [
        {
          linearGradient: [0,300,0,0],
          stops:[
            [0, 'rgb(189, 170, 56)'],
            [1, 'rgb(155, 131, 23)']
          ]
        },
        {
          linearGradient: [0,300,0,0],
          stops:[
            [0, '#b95451'],
            [1, '#aa4643']
          ]
        }
      ],
      xAxis: {
        categories: messages_chart_data.categories,
        title: {
          text: messages_chart_data.xAxisTitle,
        }
      },
      yAxis: {
        title: {
          text: messages_chart_data.yAxisTitle,
        },
        min: 0,
        max: maximum_value,
        tickInterval: maximum_value / 10
      },
      tooltip: {
        formatter: function() {
            return "<strong>" + this.x + "</strong><br>" + this.series.name + ": " + Highcharts.numberFormat(this.y, 0, ",", ".")
        }
      },
      plotOptions: {
        column: {
          pointPadding: 0.2,
          borderWidth: 0
        }
      },
      credits: {
        text: 'Painel da Revenda',
        href: '',
        style: {
          display: 'none'
        }
      },
      series: messages_chart_data.values
    })
  }


  var e, t;
  $("#panel-charts-client").length > 0 && (t = (parseInt(Math.max.apply(null, accounts_chart_data.values[0].data) / 10) + 1) * 10 || 1, e = new Highcharts.Chart({
      chart: {
          renderTo: "panel-charts-client",
          type: "column",
          width: $("#panel-charts").width()
      },
      title: {
          text: "",
      },
      colors: [
      {
          linearGradient: [0,300,0,0],
          stops:[
            [0, 'rgb(189, 170, 56)'],
            [1, 'rgb(155, 131, 23)']
          ]
        },
        {
          linearGradient: [0,300,0,0],
          stops:[
            [0, '#b95451'],
            [1, '#aa4643']
          ]
        },
        {
          linearGradient: [0,300,0,0],
          stops:[
            [0, '#89a54e'],
            [1, '#89a54e']
          ]
        }
      ],
      xAxis: {
          categories: accounts_chart_data.categories,
          title: {
              text: accounts_chart_data.xAxisTitle,
          }
      },
      yAxis: {
          title: {
              text: accounts_chart_data.yAxisTitle,
          },
          min: 0,
          max: t,
          tickInterval: t / 10
      },
      tooltip: {
          formatter: function() {
              return "<strong>" + this.x + "</strong><br>" + this.series.name + ": " + Highcharts.numberFormat(this.y, 0, ",", ".")
          }
      },
      plotOptions: {
          column: {
              stacking: "normal",
              dataLabels: {
                  enabled: !0
              },
              pointPadding: .2,
              borderWidth: 0
          }
      },
      credits: {
          text: "Painel da Revenda",
          href: "",
          style: {
              display: "none"
          }
      },
      series: accounts_chart_data.values
  }));


  $("#usage_chart").length > 0 && (t = (parseInt(Math.max.apply(null, usage_chart_data.values[0].data) / 100) + 1) * 100 || 1, e = new Highcharts.Chart({
      chart: {
          renderTo: "usage_chart",
          type: "column"
      },
      title: {
          text: "",
          style: {
              color: "#2a2a2a"
          }
      },
      colors: [
        {
          linearGradient: [0,300,0,0],
          stops:[
            [0, 'rgb(189, 170, 56)'],
            [1, 'rgb(155, 131, 23)']
          ]
        },
        {
          linearGradient: [0,300,0,0],
          stops:[
            [0, '#b95451'],
            [1, '#aa4643']
          ]
        }
      ],
      xAxis: {
          categories: usage_chart_data.categories,
          title: {
              text: usage_chart_data.xAxisTitle,
              style: {
                  color: "#2a2a2a"
              }
          }
      },
      yAxis: {
          title: {
              text: usage_chart_data.yAxisTitle,
              style: {
                  color: "#2a2a2a"
              }
          },
          min: 0,
          max: t,
          tickInterval: t / 10
      },
      tooltip: {
          formatter: function() {
              return "<strong>" + this.x + "</strong><br>" + this.series.name + ": " + Highcharts.numberFormat(this.y, 0, ",", ".")
          }
      },
      plotOptions: {
          column: {
              pointPadding: .2,
              borderWidth: 0
          }
      },
      credits: {
          text: "Locaweb",
          href: "",
          style: {
              display: "none"
          }
      },
      series: usage_chart_data.values
  }));


  $("#messages_chart").length > 0 && (t = (parseInt(Math.max.apply(null, messages_chart_data.values[0].data) / 100) + 1) * 100 || 1, e = new Highcharts.Chart({
      chart: {
          renderTo: "messages_chart",
          type: "column",
          width: $("#usage_chart").width()
      },
      title: {
          text: "",
          style: {
              color: "#2a2a2a"
          }
      },
      colors: [
      {
          linearGradient: [0,300,0,0],
          stops:[
            [0, 'rgb(189, 170, 56)'],
            [1, 'rgb(155, 131, 23)']
          ]
        },
        {
          linearGradient: [0,300,0,0],
          stops:[
            [0, '#b95451'],
            [1, '#aa4643']
          ]
        },
        {
          linearGradient: [0,300,0,0],
          stops:[
            [0, '#89a54e'],
            [1, '#89a54e']
          ]
        }
      ],
      xAxis: {
          categories: messages_chart_data.categories,
          title: {
              text: messages_chart_data.xAxisTitle,
          }
      },
      yAxis: {
          title: {
              text: messages_chart_data.yAxisTitle,
          },
          min: 0,
          max: t,
          tickInterval: t / 10
      },
      tooltip: {
          formatter: function() {
              return "<strong>" + this.x + "</strong><br>" + this.series.name + ": " + Highcharts.numberFormat(this.y, 0, ",", ".")
          }
      },
      plotOptions: {
          column: {
              pointPadding: .2,
              borderWidth: 0
          }
      },
      credits: {
          text: "Locaweb",
          href: "",
          style: {
              display: "none"
          }
      },
      series: messages_chart_data.values
  }));



  $("#chart").length > 0 && (t = (parseInt(Math.max.apply(null, chart_data.values) / 100) + 1) * 100 || 1, e = new Highcharts.Chart({
      chart: {
          renderTo: "chart",
          type: "column"
      },
      title: {
          text: chart_data.title,
          style: {
              color: "#2a2a2a"
          }
      },
      colors: [{
          linearGradient: [0, 300, 0, 0],
          stops: [
              [0, "rgb(189, 170, 56)"],
              [1, "rgb(155, 131, 23)"]
          ]
      }],
      xAxis: {
          categories: chart_data.categories
      },
      yAxis: {
          title: {
              text: chart_data.yAxisTitle,
              style: {
                  color: "#2a2a2a"
              }
          },
          min: 0,
          max: t,
          tickInterval: t / 10
      },
      tooltip: {
          formatter: function() {
              return "<strong>" + this.x + "</strong><br>" + this.series.name + ": " + Highcharts.numberFormat(this.y, 0, ",", ".")
          }
      },
      plotOptions: {
          column: {
              pointPadding: .2,
              borderWidth: 0
          }
      },
      credits: {
          text: "Painel da Revenda",
          href: "",
          style: {
              display: "none"
          }
      },
      series: [{
          name: chart_data.legend,
          data: chart_data.values
      }]
  }));


  //New Client
  $('#panel-charts-2-new').highcharts({
    chart: {
      type: 'column'
    },
    title: {
      text: 'Setembro/2014'
    },
    xAxis: {
      categories: ['Joana', 'Marcela', 'Patricia', 'Diego']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Envios'
      }
    },
    credits: {
      text: 'Painel da Revenda',
      href: '',
      style: {
        display: 'none'
      }
    },
    colors: ['#bdaa38', '#aa4643 ','#89a54e'],
    series: [{
      name: 'Total de envios contratados',
      data: [0, 0, 0, 0]
    }]
  });

});
