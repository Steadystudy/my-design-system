import { useEffect, useRef } from 'react';
import { geoMercator, geoPath, select, GeoProjection } from 'd3';
import korea from './topoKorea.json';
import world from './world.json';
import { feature } from 'topojson-client';
import { GeometryObject, Topology } from 'topojson-specification';
import { FeatureCollection, Feature } from 'geojson';
import { colors } from '../../constants/colors';

interface KoreaProps {
  svgWidth: number;
  svgHeight: number;
}

const Korea = ({ svgWidth = 1000, svgHeight = 800 }: KoreaProps) => {
  const svgRef = useRef<SVGSVGElement>();

  function getGeoJSONData() {
    const featureCollection = feature(
      korea as unknown as Topology,
      korea.objects['skorea_provinces_2018_geo'] as GeometryObject,
    ) as FeatureCollection;
    return featureCollection.features;
  }

  function getKoreaOutlineJSONData() {
    const featureCollection = feature(
      world as unknown as Topology,
      world.objects.countries as GeometryObject,
    ) as FeatureCollection;
    return featureCollection.features.find((a: Feature) => a.properties.name === 'South Korea');
  }

  function getProjectionAppliedScale() {
    const projection = geoMercator();
    const { width, height, refScale, refX, refY } = computeBounds(projection);

    const scale = Math.min(svgWidth / width, svgHeight / height) / 1.5;
    const viewWidth = width * scale;
    const viewHeight = height * scale;
    const x = (svgWidth - viewWidth) * 0.5;
    const y = (svgHeight - viewHeight) * 0.5;

    projection.scale(refScale * scale).translate([scale * refX + x, scale * refY + y]);

    return projection;
  }

  function computeBounds(projection: GeoProjection) {
    const outline = getKoreaOutlineJSONData();
    const bounds = geoPath(projection.fitWidth(svgWidth, outline)).bounds(outline);
    const height = Math.ceil(bounds[1][1] - bounds[0][1]);
    const width = Math.ceil(bounds[1][0] - bounds[0][0]);
    const t = projection.translate();
    return {
      width,
      height,
      aspectRatio: width / height,
      refScale: projection.scale(),
      refX: t[0],
      refY: t[1],
    };
  }

  useEffect(() => {
    const features = getGeoJSONData();
    const projection = getProjectionAppliedScale();
    const PathGenerator = geoPath(projection);
    select(svgRef.current)
      .selectAll('path')
      .data(features)
      .join('path')
      .attr('d', PathGenerator)
      .attr('stroke', 'black')
      .attr('fill', (_, i) => {
        return colors[i % colors.length];
      });
  }, []);

  return <svg ref={svgRef} style={{ width: svgWidth, height: svgHeight }}></svg>;
};

export default Korea;
