import React from "react";
import {
  ComposableMap,
  ZoomableGlobe,
  Geographies,
  Geography,
} from "react-simple-maps";

const mapStyles = {
  width: "100vw",
  height: "90vh",
};

const Map = ({ Content, clickHandler, changeCenter }) => {
  return (
    <div>
      <ComposableMap
        width={500}
        height={500}
        projection="orthographic"
        projectionConfig={{ scale: 220 }}
        style={mapStyles}
      >
        <ZoomableGlobe center={[20, 30]}>
          <circle
            cx={250}
            cy={250}
            r={220}
            fill="transparent"
            stroke="#1a1a1a"
            strokeWidth="0.5"
          />
          <Geographies
            disableOptimization
            geography="https://unpkg.com/world-atlas@2.0.2/countries-110m.json"
          >
            {(geos, proj) =>
              geos.map((geo, i) => (
                <Geography
                  key={geo.id}
                  geography={geo}
                  projection={proj}
                  onClick={() => {
                    clickHandler((prev) => {
                      return {
                        ...prev,
                        cname: `${geo.properties.name}`,
                      };
                    });
                  }}
                  onMouseEnter={() => {
                    Content(`${geo.properties.name}`);
                  }}
                  style={{
                    default: {
                      outline: "none",
                      fill: "#1a1a1a",
                    },
                    hover: {
                      outline: "none",
                      fill: "#2e2e2e",
                    },
                    pressed: {
                      outline: "none",
                      fill: "#2e2e2e",
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGlobe>
      </ComposableMap>
    </div>
  );
};

export default Map;
