require(["require", "exports", "knockout", "ojs/ojbootstrap", "text!../cookbook/dataVisualizations/chart/resources/basicCoordData.json", "ojs/ojarraydataprovider", "ojs/ojknockout", "ojs/ojchart", "ojs/ojformlayout", "ojs/ojcore", "ojs/ojvalidation"], function (require, exports, ko, ojbootstrap_1, data, ArrayDataProvider) {
    "use strict";

    class ChartModel {
        constructor() {
            /* Parse chart data */
            const parsedData = JSON.parse(data);

           

            /* chart data */
            this.dataProvider = new ArrayDataProvider(parsedData, {
                keyAttributes: 'id'
            });

            /* reference objects for Y axis */
            this.constantLineY = {
                referenceObjects: [
                    {
                        text: "Median",
                        type: "line",
                        value: 100,
                        color: "#ad1f7e",
                        displayInLegend: "off",
                        lineWidth: 3,
                        location: "front",
                        shortDesc: "Median",
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
                        color: "rgba(160,206,236,0.5)",
                        displayInLegend: "on",
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
                        color: "rgba(163, 166, 99, 0.8)",
                        displayInLegend: "on",
                        location: "back",
                        shortDesc: "In Range",
                    },
                ],
            };

          this.seriesColors = {
            'High Performers': '#fc0335',  // Example color for Series 1
            'Series 2': '#33FF57',  // Example color for Series 2
            'Series 3': '#3357FF',  // Example color for Series 3
            'Series 4': '#F0F033'   // Example color for Series 4
        };
            /* Custom Converters */
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
          
          
          
            var yearsConverter = {
                format: function(value) {
                    return value + " years";
                },
                parse: function(value) {
                    return parseFloat(value.replace(" years", ""));
                },
                getHint: function() {
                    return "";
                }
            };

            /* Set up Y-axis with min value and percentage converter */
          
            this.yAxisData = ko.observable({
                referenceObjects: [
                    ...this.constantLineY.referenceObjects,
                    ...this.constantAreaY.referenceObjects,
                    ...this.constantAreaY2.referenceObjects,
                ],
                tickLabel: {
                    converter: percentConverter
                },
                min: 60  // Set the minimum value for the Y-axis
            });
          

            /* Set up X-axis with years converter */
            this.xAxisData = ko.observable({
                tickLabel: {
                    converter: yearsConverter
                }
            });
          this.seriesData = ko.observable([
            { id: 'High Performers', name: 'High Performers', color: this.seriesColors['High Performers'] },
            { id: 'Series 2', name: 'Series 2', color: this.seriesColors['Series 2'] },
            { id: 'Series 3', name: 'Series 3', color: this.seriesColors['Series 3'] },
            { id: 'Series 4', name: 'Series 4', color: this.seriesColors['Series 4'] }
        ]);

        }
    }

    /* Apply Bindings */
    (0, ojbootstrap_1.whenDocumentReady)().then(() => {
        ko.applyBindings(new ChartModel(), document.getElementById("chart-container"));
    });
});
