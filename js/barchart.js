var barChartData = {
  labels : ["InDesign","Illustrator","Photoshop","JavaScript","CSS","HTML"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data : [60, 70, 85, 80, 95, 95]
    }
  ]
};

var canvas = document.getElementById("graph").getContext("2d");
var barChart = new Chart(canvas).HorizontalBar(barChartData, {
  responsive: true,
  barShowStroke: false,
  tooltipTemplate: "<%= value %>"+"%",
});

barChart.datasets[0].bars[0].fillColor = "rgba(34,224,110,.6)"; //bar 6
barChart.datasets[0].bars[0].highlightFill = "rgba(34,224,110,.4)"; //bar 6
barChart.datasets[0].bars[1].fillColor = "rgba(41,201,150,.6)"; //bar 5
barChart.datasets[0].bars[1].highlightFill = "rgba(41,201,150,.4)"; //bar 5
barChart.datasets[0].bars[2].fillColor = "rgba(43,211,205,.6)"; //bar 4
barChart.datasets[0].bars[2].highlightFill = "rgba(43,211,205,.4)"; //bar 4
barChart.datasets[0].bars[3].fillColor = "rgba(48,156,188,.6)"; //bar 3
barChart.datasets[0].bars[3].highlightFill = "rgba(48,156,188,.4)"; //bar 3
barChart.datasets[0].bars[4].fillColor = "rgba(43,129,211,.6)"; //bar 2
barChart.datasets[0].bars[4].highlightFill = "rgba(43,129,211,.4)"; //bar 2
barChart.datasets[0].bars[5].fillColor = "rgba(41,80,201,.6)"; //bar 1
barChart.datasets[0].bars[5].highlightFill = "rgba(41,80,201,.4)"; //bar 1
barChart.update();
