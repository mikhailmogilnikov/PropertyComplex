/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */

import { useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import { observer } from "mobx-react-lite";
import { useMedia, useWindowSize } from "react-use";
import { useStore } from "@/platform/providers/StoreProvider/store";

import SvgComponent from "@/app-map/svgs/SvgComponent";
import useD3 from "@/app-map/hooks/useD3";

export const Map = observer(() => {
  const svgRef = useRef(null);
  const { theme, resolvedTheme } = useTheme();
  const { databaseStore } = useStore();
  const { width, height } = useWindowSize();
  const isMobile = useMedia('(max-width: 960px)');
  const deviceType = isMobile ? "mobile" : "desktop";

  const { isInitMap } = useD3({ svgRef, theme, resolvedTheme, databaseStore, deviceType });

  const visibility = useMemo(
    () => (isInitMap ? 'visible' : 'invisible'),
    [isInitMap],
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
