import * as React from "react";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from "recharts";

import { IData } from "../../actions/";
import "./graph-style.css";

interface IProps {
  data: IData[];
  title?: string;
}

const RadarGraph: React.SFC<IProps> = (props: IProps) => {
  // const { data, title } = props;

  const data = [
    { subject: "Math", A: 120, B: 110, fullMark: 150 },
    { subject: "Chinese", A: 98, B: 130, fullMark: 150 },
    { subject: "English", A: 86, B: 130, fullMark: 150 },
    { subject: "Geography", A: 99, B: 100, fullMark: 150 },
    { subject: "Physics", A: 85, B: 90, fullMark: 150 },
    { subject: "History", A: 65, B: 85, fullMark: 150 }
  ];

  return (
    <React.Fragment>
      {/* <h3>{title ? title : "Radar Graph"}</h3> */}
      <RadarChart
        cx={300}
        cy={250}
        outerRadius={150}
        width={600}
        height={500}
        data={data.slice()}
      >
        <PolarGrid />
        <PolarAngleAxis
          dataKey="subject"
          tick={true}
          tickFormatter={angleTickFormatter}
        />
        <PolarRadiusAxis tickFormatter={radiusTickFormatter} />
        <Radar dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    </React.Fragment>
  );
};

const angleTickFormatter = (e: any) => {
  // tslint:disable-next-line:no-console
  console.log(e, "angle");
  return <div className="custom-tick">{e}</div>;
};

const radiusTickFormatter = (e: any) => {
  // tslint:disable-next-line:no-console
  console.log(e, "radius");
  return <div className="custom-tick">{e}</div>;
};

export default RadarGraph;
