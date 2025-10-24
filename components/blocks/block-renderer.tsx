"use client";

import { AnalysisBlock } from "@/@types/analysis-blocks";
import { getBlockComponent, ComponentVersion } from "./registry";

type Props = {
  blocks: AnalysisBlock[];
  version?: ComponentVersion;
};

/**
 * Block Renderer
 * Renders a list of analysis blocks using the component registry
 */
export default function BlockRenderer({ blocks, version = "v1" }: Props) {
  return (
    <div className="space-y-2">
      {blocks.map((block, index) => {
        const Component = getBlockComponent(block.type, version);

        if (!Component) {
          console.warn(`No component found for block type: ${block.type}`);
          return null;
        }

        return <Component key={index} {...block} />;
      })}
    </div>
  );
}
