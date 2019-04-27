import React from 'react'
import '../../../../../node_modules/react-vis/dist/style.css';
import {
  Crosshair,
  HorizontalGridLines,
  MarkSeries,
  VerticalGridLines,
  XAxis,
  XYPlot,
  YAxis,
} from 'react-vis';

const DATA = [
  {x: 1, y: 4, size: 9},
  {x: 1, y: 5, size: 18},
  {x: 1, y: 10, size: 5},
  {x: 1, y: 11, size: 29},
  {x: 1, y: 13.9, size: 5},
  {x: 1, y: 14, size: 8},
  {x: 1.5, y: 11.8, size: 25},
  {x: 1.7, y: 9, size: 30},
  {x: 2, y: 5, size: 11},
  {x: 2.1, y: 11.8, size: 28},
  {x: 2.4, y: 7.9, size: 14},
  {x: 2.4, y: 13.5, size: 20},
  {x: 2.7, y: 13.7, size: 14},
  {x: 2.9, y: 7.7, size: 26},
  {x: 3, y: 5.4, size: 6}
].map((d, id) => ({...d, id}));


// magic numbers chosen for design
const sizeRange = [5, 13];
const width = 300;
const height = 300;

class WritingGraph extends React.Component {
    state = {
      selectedPointId: null,
    };
  
    render() {
      const {crosshairValues, selectedPointId } = this.state;
  
      return (
        <div>
          <XYPlot
            onMouseLeave={() =>
              this.setState({selectedPointId: null, crosshairValues: null})
            }
            width={width}
            height={height}
          >
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <MarkSeries
              className="mark-series-example"
              colorType="literal"
              data={DATA}
              onNearestXY={(value, {index}) =>
                this.setState({
                  selectedPointId: index,
                  crosshairValues: [value]
                })
              }
              getColor={({id}) =>
                selectedPointId === id ? '#FF9833' : '#12939A'
              }
              sizeRange={sizeRange}
            />
            {crosshairValues && <Crosshair values={crosshairValues} />}
          </XYPlot>
        </div>
      );
    }
  }

export default WritingGraph;