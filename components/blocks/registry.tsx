/**
 * Block Component Registry
 * Central registry for all block components with versioning support
 */

import { BlockType } from "@/@types/analysis-blocks";
import { ComponentType } from "react";

// V1 Components
import HeadingBlock from "./v1/heading-block";
import ParagraphBlock from "./v1/paragraph-block";
import ListBlock from "./v1/list-block";
import TableBlock from "./v1/table-block";
import ChartBlock from "./v1/chart-block";
import MetricCardBlock from "./v1/metric-card-block";
import ComparisonBlock from "./v1/comparison-block";
import CalloutBlock from "./v1/callout-block";
import DividerBlock from "./v1/divider-block";

/**
 * Block component registry by version
 */
export const blockRegistry = {
  v1: {
    heading: HeadingBlock,
    paragraph: ParagraphBlock,
    list: ListBlock,
    table: TableBlock,
    chart: ChartBlock,
    "metric-card": MetricCardBlock,
    comparison: ComparisonBlock,
    callout: CalloutBlock,
    divider: DividerBlock
    // image: ImageBlock, // TODO: Implement later
  }
  // v2: { ... } // Future versions
} as const;

export type ComponentVersion = keyof typeof blockRegistry;

/**
 * Get block component by type and version
 */
export function getBlockComponent(
  type: BlockType,
  version: ComponentVersion = "v1"
): ComponentType<any> | null {
  const versionRegistry = blockRegistry[version];
  if (!versionRegistry) {
    console.warn(`Block registry version "${version}" not found`);
    return null;
  }

  const component = versionRegistry[type as keyof typeof versionRegistry];
  if (!component) {
    console.warn(`Block component "${type}" not found in version "${version}"`);
    return null;
  }

  return component;
}
