/* eslint-disable func-names */
/* eslint-disable react/no-this-in-sfc */

"use client";

import { useMemo, useRef } from "react";
import { useTheme } from "next-themes";
import { observer } from "mobx-react-lite";
import SvgComponent from "../svgs/SvgComponent";
import { useStore } from "@/platform/providers/StoreProvider/store";
import useD3 from "../hooks/useD3";



export const MapEntry = observer(() => {
  const svgRef = useRef(null);
  const { theme, resolvedTheme } = useTheme();
  const { databaseStore } = useStore();

  const {isInitMap} =  useD3({ svgRef, theme, resolvedTheme, databaseStore });
  const visibility = useMemo(() => isInitMap ? 'visible' : 'invisible', [isInitMap]);

  return (
    <div className="w-full h-[100dvh] cursor-grab bg-white">
       <SvgComponent svgRef={svgRef} className={`${visibility}`}/>
    </div>
  );
});
