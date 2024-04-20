AmCharts.makeChart("map", {
	"type": "map",
	"pathToImages": "http://www.amcharts.com/lib/3/images/",
	"addClassNames": true,
	"fontSize": 15,
	"color": "#FFFFFF",
	"projection": "mercator",
	"backgroundAlpha": 0,
	// "backgroundImage": "background.jpg",

	"dataProvider": {
		"map": "chinaLow",
		"getAreasFromMap": true,
		"images": [
			{
				"top": 40,
				"left": 60,
				"width": 80,
				"height": 42,
				"pixelMapperLogo": true,
				"imageURL": "http://pixelmap.amcharts.com/static/img/logo.svg",
				"url": "http://www.amcharts.com"
			},
			{
				"selectable": true,
				"longitude": 103.4554,
				"latitude": 46.0312,
				"label": "",
				"labelPosition": "right",
				"labelColor": "rgba(75,216,181,0.8)",
				"labelRollOverColor": "#56f8d0",
				"labelFontSize": 15
			}
		],
		"areas": [
			{
				"id": "CN-11",
				"title": "Beijing北京",
				"color": "rgba(181,193,196)",
				"img": "header/image/logo.png"
				
			},
			{
				"id": "CN-15",
				"title": "Nei Mongol内蒙古",
				"color": "rgba(181,193,196)"
			}
		]
	},
	"balloon": {
		"horizontalPadding": 15,
		"borderAlpha": 0,
		"borderThickness": 1,
		"verticalPadding": 15
	},
	"areasSettings": {
		"color": "rgba(181,193,196,1)",
		"outlineColor": "rgba(64,28,28,1)",
		"rollOverOutlineColor": "rgba(64,28,28,1)",
		"rollOverBrightness": 20,
		"selectedBrightness": 20,
		"selectable": true,
		"unlistedAreasAlpha": 0,
		"unlistedAreasOutlineAlpha": 0
	},
	"imagesSettings": {
		"alpha": 1,
		"color": "rgba(181,193,196,1)",
		"outlineAlpha": 0,
		"rollOverOutlineAlpha": 0,
		"outlineColor": "rgba(64,28,28,1)",
		"rollOverBrightness": 20,
		"selectedBrightness": 20,
		"selectable": true
	},
	"linesSettings": {
		"color": "rgba(181,193,196,1)",
		"selectable": true,
		"rollOverBrightness": 20,
		"selectedBrightness": 20
	},
	"zoomControl": {
		"zoomControlEnabled": true,
		"homeButtonEnabled": false,
		"panControlEnabled": false,
		"right": 38,
		"bottom": 30,
		"minZoomLevel": 0.25,
		"gridHeight": 100,
		"gridAlpha": 0.1,
		"gridBackgroundAlpha": 0,
		"gridColor": "#FFFFFF",
		"draggerAlpha": 1,
		"buttonCornerRadius": 2
	}
});