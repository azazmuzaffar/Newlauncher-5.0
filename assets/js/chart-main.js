var options = {
  xaxis: {
    categories: [
      "Nov 19",
      "Des 19",
      "Jan 20",
      "Feb 20",
      "Mar 20",
      "Apr 20",
      "May 20",
      "Jun 20",
      "Jul 20",
      "Aug 20",
      "Sep 20",
      "Okt 20",
      "Nov 20",
      "Des 20",
      "Jan 21",
      "Feb 21",
      "Mar 21",
      "Apr 21",
      "May 21",
      "Jun 21",
      "Jul 21",
      "Aug 21",
      "Sep 21",
      "Okt 21",
    ],
  },
  series: [
    {
      name: "&nbspLanded",
      data: [600, 900, 1400, 156, 261, 458, 563, 680, 785, 887, 955, 1057, 1056, 1061, 1058, 1063, 1060, 1066, 1500, 1720, 1820, 30, 1120, 20],
    },
    {
      name: "&nbspExec Condo",
      data: [400, 700, 420, 66, 71, 88, 73, 50, 95, 107, 110, 105, 206, 208, 322, 430, 435, 580, 610, 715, 854, 960, 1000, 1100],
    },
    {
      name: "&nbspNon Landed",
      data: [50, 250, 301, 56, 61, 58, 63, 80, 85, 87, 90, 105, 106, 108, 222, 230, 235, 280, 310, 315, 354, 360, 450, 520],
    },
  ],
  colors: ["#5A1879", "#9255A2", "#DBAAE8"],
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 800,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "60",
          },
        },
        legend: {
          position: "bottom",
          itemMargin: {
            vertical: 10,
            horizontal: 8,
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "45",
      borderRadius: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "left",
    fontSize: "14px",
    offsetY: 0,
    itemMargin: {
      vertical: 20,
      horizontal: 8,
    },
    markers: {
      width: 11,
      height: 11,
    },
  },
  //   All roltip settings
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options_2 = {
  xaxis: {
    categories: [
      "Nov 19",
      "Des 19",
      "Jan 20",
      "Feb 20",
      "Mar 20",
      "Apr 20",
      "May 20",
      "Jun 20",
      "Jul 20",
      "Aug 20",
      "Sep 20",
      "Okt 20",
      "Nov 20",
      "Des 20",
      "Jan 21",
      "Feb 21",
      "Mar 21",
      "Apr 21",
      "May 21",
      "Jun 21",
      "Jul 21",
      "Aug 21",
      "Sep 21",
      "Okt 21",
    ],
  },

  series: [
    {
      name: "&nbspLanded",
      data: [50, 250, 301, 56, 61, 58, 63, 80, 85, 87, 90, 105, 106, 108, 222, 230, 235, 280, 310, 315, 354, 360, 450, 520],
    },
    {
      name: "&nbspExec Condo",
      data: [400, 700, 420, 66, 71, 88, 73, 50, 95, 107, 110, 105, 206, 208, 322, 430, 435, 580, 610, 715, 854, 960, 1000, 1100],
    },
    {
      name: "&nbspNon Landed",
      data: [600, 900, 1400, 156, 261, 458, 563, 680, 785, 887, 955, 1057, 1056, 1061, 1058, 1063, 1060, 1066, 1500, 1720, 1820, 30, 1120, 20],
    },
  ],
  colors: ["#5A1879", "#9255A2", "#DBAAE8"],
  chart: {
    type: "bar",
    height: 350,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 576,
      options: {
        chart: {
          width: 800,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "60",
          },
        },
        legend: {
          position: "bottom",
          itemMargin: {
            vertical: 10,
            horizontal: 8,
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "45",
      borderRadius: 5,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: true,
    position: "bottom",
    horizontalAlign: "left",
    fontSize: "14px",
    offsetY: 0,
    itemMargin: {
      vertical: 20,
      horizontal: 8,
    },
    markers: {
      width: 11,
      height: 11,
    },
  },
  //   All roltip settings
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var chart2 = new ApexCharts(document.querySelector("#chart-2"), options_2);
chart2.render();
