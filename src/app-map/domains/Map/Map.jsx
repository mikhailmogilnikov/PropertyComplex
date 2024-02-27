/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */

import { useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import { observer } from "mobx-react-lite";
import { useWindowSize } from "react-use";
import { useStore } from "@/platform/providers/StoreProvider/store";

import SvgComponent from "@/app-map/svgs/SvgComponent";
import useD3 from "@/app-map/hooks/useD3";

export const Map = observer(() => {
  const svgRef = useRef(null);
  const { theme, resolvedTheme } = useTheme();
  const { databaseStore } = useStore();
  const { width, height } = useWindowSize();

  const { isInitMap } = useD3({ svgRef, theme, resolvedTheme, databaseStore });
  const visibility = useMemo(
    () => (isInitMap ? "visible" : "invisible"),
    [isInitMap]
  );

  return (
    <div className="w-full h-[100dvh] cursor-grab">
      <SvgComponent
        svgRef={svgRef}
        className={`${visibility}`}
        width={width}
        height={height}
      />
    </div>
  );
});
