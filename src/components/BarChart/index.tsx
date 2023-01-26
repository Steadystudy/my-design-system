import { axisBottom, axisLeft, max, scaleBand, scaleLinear, select } from 'd3';
import { useRef } from 'react';
import movie from './movie.json';
import { useEffect } from 'react';
import { colors } from '../../constants/colors';

interface BarChartProps {
  svgWidth: number;
  svgHeight: number;
}

const BarChart = ({ svgWidth = 800, svgHeight = 400 }: BarChartProps) => {
  const svgRef = useRef<SVGSVGElement>();
  const margin = { top: 10, right: 50, bottom: 30, left: 50 };
  const width = svgWidth - margin.left - margin.right;
  const height = svgHeight - margin.top - margin.bottom;

  const names = movie.reduce((acc, cur) => {
    acc.push(cur.name);
    //혹시나 중복이 있을 수 있으니 set 활용
    const set = new Set(acc);
    return Array.from(set);
  }, []);

  const xScale = scaleBand()
    .domain(names)
    .range([margin.left, width - margin.right])
    .paddingInner(0.2);

  const yScale = scaleLinear()
    .domain([0, max(movie, (d) => d.value)])
    .range([height - margin.bottom, margin.top]);

  const xAxis = axisBottom(xScale);
  const yAxis = axisLeft(yScale);

  useEffect(() => {
    const svg = select(svgRef.current);
    const chart = svg.append('g').attr('transform', `translate(${margin.left},${margin.top})`);
    chart
      .append('g')
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(xAxis);

    chart.append('g').attr('transform', `translate(${margin.left}, 0)`).call(yAxis);

    chart
      .append('g')
      .selectAll('rect')
      .data(movie)
      .join('rect')
      .attr('x', (d) => xScale(d.name))
      .attr('y', (d) => yScale(d.value))
      .attr('width', xScale.bandwidth())
      .attr('height', (d) => yScale(0) - yScale(d.value))
      .attr('fill', (_, i) => colors[i % colors.length]);
  }, []);

  return <svg ref={svgRef} style={{ width: svgWidth, height: svgHeight }}></svg>;
};

export default BarChart;
