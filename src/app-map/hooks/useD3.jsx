/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */

import { useEffect, useState } from "react";
import * as d3 from "d3";

const initConfig = {
  desktop: {
    scale: 0.75,
    translateX: 650,
    translateY: 150,
  },
  mobile: {
    scale: 0.55,
    translateX: 100,
    translateY: 100,
  }
};

const themeColors = {
  dark: {
    stroke: "#fff",
    text: "#fff",
    fill: "#000",
    hover: "rgba(255, 81, 3, 0.8)",
    mousedown: "rgba(255, 81, 3, 1)",
  },
  light: {
    stroke: "#000",
    text: "#000",
    fill: "#fff",
    hover: "rgba(255, 81, 3, 0.8)",
    mousedown: "rgba(255, 81, 3, 0.95)",
  },
};

const changeColor = (e, f, duration = 100) =>
  e.transition().duration(duration).ease(d3.easeLinear).attr("fill", f);

class MapClass {
  constructor({ svgRef, currentTheme, roomNames }) {
    this.svg = d3.select(svgRef.current);
    this.g = this.svg.select("g");
    this.colors = themeColors[currentTheme];
    this.roomNames = roomNames;
    this.rooms = this.g.selectAll("g").filter(function () {
      return roomNames.includes(this.getAttribute("class"));
    });
  }

  initDefaultColor() {
    this.svg.selectAll("path[fill]").attr("fill", this.colors.fill);
    this.svg.selectAll("path[stroke]").attr("stroke", this.colors.stroke);
    this.svg.selectAll("g[stroke]").attr("stroke", this.colors.stroke);
  }

  initSize() {
    this.svg
      .attr("width", window.innerWidth)
      .attr("height", window.innerHeight);
  }

  initZoom(config) {
    const manualTransform = d3.zoomIdentity
      .scale(config.scale)
      .translate(config.translateX, config.translateY);

    this.g.attr("transform", manualTransform);

    const zoomHandler = d3
      .zoom()
      .scaleExtent([0.1, 6])
      .on("zoom", (event) => {
        this.g.attr("transform", event.transform);
      });
    this.svg.call(zoomHandler);
    this.svg.call(zoomHandler.transform, manualTransform);
    this.svg.on("dblclick.zoom", null);
  }

  initFont() {
    this.g
      .attr("text-anchor", "middle")
      .attr("font-size", 20)
      .attr("font-weight", "600")
      .attr("font-family", "__Inter_a943a7")
      .attr("cursor", "pointer");
  }

  initRoomStyles() {
    this.rooms
      .append("text")
      .attr("fill", this.colors.text)
      .text(function () {
        return this.parentNode.getAttribute("class");
      })
      .each(function () {
        const path = d3.select(this.parentNode).select("path[fill]");

        // Получение размеров path
        const pathBoundingBox = path.node().getBBox();

        // Вычисление координат для текста (в центре path)
        const textX = pathBoundingBox.x + pathBoundingBox.width / 2;
        const textY = pathBoundingBox.y + pathBoundingBox.height / 2;

        d3.select(this).attr("x", textX).attr("y", textY).attr("dy", "0.35em");
      });
  }

  initEvents(roomClickEvent) {
    const { colors } = this;

    this.rooms
      .on("click", function () {
        roomClickEvent(this.getAttribute("class"));
      })
      .on("mouseover", function () {
        const path = d3.select(this).select("path[fill]");
        changeColor(path, colors.hover);
      })
      .on("mouseout", function () {
        const path = d3.select(this).select("path[fill]");
        changeColor(path, colors.fill);
      })
      .on("mousedown", function () {
        const path = d3.select(this).select("path[fill]");
        changeColor(changeColor(path, colors.mousedown), colors.hover);
      })
      .on("mouseup", function () {
        const path = d3.select(this).select("path[fill]");
        changeColor(path, "#fff");
      });
  }
}

const useD3 = ({ svgRef, theme, resolvedTheme, databaseStore, deviceType }) => {
  const [isInitMap, setIsInitMap] = useState(false);

  const roomClickEvent = (attrClassName) => {
    const room = databaseStore.getRooms().find((r) => r.name === attrClassName);
    console.log({ roomId: room.id });
  };

  useEffect(() => {
    if (!svgRef.current) return;
    const currentTheme = resolvedTheme === "dark" ? "dark" : "light";
    const roomNames = databaseStore.getRooms().map((i) => i.name);
    const map = new MapClass({ svgRef, currentTheme, roomNames, deviceType });

    if (!isInitMap) {
      map.initSize();
      map.initZoom(initConfig[deviceType]);
      setIsInitMap(true);
    }
    map.initFont();
    map.initDefaultColor();
    map.initRoomStyles();
    map.initEvents(roomClickEvent);
  }, [svgRef.current, theme, resolvedTheme, deviceType]);

  return { isInitMap };
};

export default useD3;
