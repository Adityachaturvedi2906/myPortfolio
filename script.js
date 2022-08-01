// var letters = '0123456ABCDEF';
// var colors = '#';

// function getRandomColors (){

// 	for(var i = 0; i<6; i++){
// 		colors += letter[Math.floor(Math.random() *16)];
// 	}
// 	return colors;
// }

// console.log(getRandomColors());




var xValues = ["HTML", "CSS", "JavaScript", "Java", "MySQL", "C++", "Illustrator", "Photoshop"];
var yValues = [95, 92, 80, 80, 75, 80, 80, 75];
var barColors = ["red", "green","blue","orange","brown", "yellow", "black", "pink"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "My Skills"
    }
  }
});