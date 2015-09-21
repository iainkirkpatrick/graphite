console.log("running");

//ramda stuff that makes sense
var R = require('ramda');

//borrowed from http://www.toptal.com/d3-js/towards-reusable-d3-js-charts
// Using Mike Bostock's Towards Reusable Charts Pattern
function chart() {

  	// All options that should be accessible to caller
  	var width = 900;
  	var height = 200;
  	var barPadding = 1;
  	var fillColor = 'steelblue';

  	function barChart(selection){
        selection.each(function (data) {
        	var barSpacing = height / data.length;
        	var barHeight = barSpacing - barPadding;
        	var maxValue = d3.max(data);
        	var widthScale = width / maxValue;

            d3.select(this).append('svg')
                .attr('height', height)
                .attr('width', width)
                .selectAll('rect')
                .data(data)
            	.enter()
                .append('rect')
                .attr('y', function (d, i) { return i * barSpacing })
                .attr('height', barHeight)
                .attr('x', 0)
                .attr('width', function (d) { return d*widthScale})
                .style('fill', fillColor);
      	});
  	}
    //chart.type as a function? type can then be updated? imagine the transition possiblities...

  	barChart.width = function(value) {
      	if (!arguments.length) return margin;
      	width = value;
      	return barChart;
  	};

  	barChart.height = function(value) {
      	if (!arguments.length) return height;
      	height = value;
      	return barChart;
  	};

    barChart.barPadding = function(value) {
      	if (!arguments.length) return barPadding;
      	barPadding = value;
      	return barChart;
  	};

    barChart.fillColor = function(value) {
      	if (!arguments.length) return fillColor;
      	fillColor = value;
      	return barChart;
  	};

  	return barChart;
}

var milesRun = [2, 5, 4, 1, 2, 6, 5];
var highTemperatures = [77, 71, 82, 87, 84, 78, 80, 84, 86, 72, 71, 68, 75, 73, 80, 85, 86, 80];
var messiGoals = [1, 8, 17, 16, 38, 47, 53, 73, 60, 41, 58];

// an example of CMS-like DOM searching for attribute-defined graphs
d3.selectAll('.graph')
  .datum(messiGoals)
  .call(chart().fillColor('red').height(300));

//FUNCTION? traverse DOM, for each graph element, get the data and build the type of graph with config vars

//examples of code-based chart implementations
//initial config is stored as a var, then called with .call
//rcmoore's approach to updating config once defined http://bl.ocks.org/rcmoore38/9f2908455355c0589619
//which allows chart.width(newWidth), and have the appropriate transitions automatically take place (can beginning state just transition from nothing, which has no animation?)
var runningChart = chart().barPadding(5);
d3.select('#runningHistory')
  .datum(milesRun)
  .call(runningChart);

var weatherChart = chart().fillColor('coral');
d3.select('#weatherHistory')
  .datum(highTemperatures)
  .call(weatherChart);
