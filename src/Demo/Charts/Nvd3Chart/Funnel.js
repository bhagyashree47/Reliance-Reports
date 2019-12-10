
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';
import data from './funneldata.json';

const tooltipRender = (({ point = {} }) => (point.category));

export default class Funnel extends React.Component {
    render() {

        return (
            <div>

                <Chart style={{ margin: '0 auto', width: 500 ,height :500}} >
                    <ChartTitle text="Shift of Sentiments" />
                    <ChartSeries>
                        <ChartSeriesItem
                            type="funnel"
                            data={data}
                            categoryField="Shift_Of_Sentiment"
                            field="Total_Sentiments"

                        >
                            <ChartSeriesLabels color="black" background="none" format="N0" />
                        </ChartSeriesItem>
                    </ChartSeries>
                    <ChartTooltip render={tooltipRender} />
                    <ChartLegend visible={true} />
                </Chart>
            </div>
        );
    }
}
