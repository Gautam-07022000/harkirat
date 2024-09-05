define([
    "require",
    "exports",
    "knockout",
    "ojs/ojbootstrap",
    "text!./chartData.json",
    "ojs/ojcontext",
    "ojs/ojarraydataprovider",
    "ojs/ojknockout",
    "ojs/ojchart",
     "ojs/ojformlayout",
  ], (require, exports, ko, ojbootstrap_1, data, Context, ArrayDataProvider, jko, jchart) => {
    "use strict";
  
    function PageModel() {
        this.dataProvider = new ArrayDataProvider(JSON.parse(data), {
            keyAttributes: 'id'
        });
      this.constantLineY = {
        referenceObjects: [
          {
            text: "Median",
            type: "line",
            value: 100,
            color: "#969395",
            // displayInLegend: "on",
            displayInLegend: "off",
            lineWidth: 3,
            location: "front",
            shortDesc: "Median Line",
          },
        ],
      };
  
      this.constantAreaY = {
        referenceObjects: [
          {
            text: "Below Range",
            type: "area",
            low: 60,
            high: 80,
            color: "rgba(224, 228, 130, 0.42)",
            // displayInLegend: "on",
            displayInLegend: "off",
            location: "back",
            shortDesc: "Below Range",
          },
        ],
      };
  
      this.constantAreaY2 = {
        referenceObjects: [
          {
            text: "In Range",
            type: "area",
            low: 90,
            high: 110,
            color: "rgba(160,206,236,0.5)",
            // displayInLegend: "on",
            displayInLegend: "off",
            location: "back",
            shortDesc: "In Range",
          },
        ],
      };

    }
  
    PageModel.prototype.addChartData = function (arg1) {

      var yearsConverter = {
          format: function(value) {
            if(value <= 1)
              return value + " year";
              return value + " years";
          },
          parse: function(value) {
              return parseFloat(value.replace(" years", ""));
          },
          getHint: function() {
              return "";
          }
      };

      var percentConverter = {
          format: function(value) {
              return value + "%";
          },
          parse: function(value) {
              return parseFloat(value);
          },
          getHint: function() {
              return "";
          }
      };

      console.log("Inside addChartData");
  
      ojbootstrap_1.whenDocumentReady().then(() => {
        const chart = document.getElementById("bubbleChart");
  
        chart.setProperty('yAxis', {
          //title : "Compa-Ratio",
          referenceObjects: [
            ...this.constantLineY.referenceObjects,
            ...this.constantAreaY.referenceObjects,
            ...this.constantAreaY2.referenceObjects,
          ],
          tickLabel: {
                    converter: percentConverter
                },
                min : 60
        });
  
        chart.setProperty('xAxis', {
          //title : "Tenure",
          tickLabel: {
                    converter: yearsConverter
                },
        });
  
      });
  
      return "done";
    };
  
    return PageModel;
  });