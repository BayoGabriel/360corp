import { useId } from 'react'
import {
  SALES_HIGHLIGHT,
  SALES_REPORT_COPY,
  SALES_SERIES,
} from '../dashboard-content'
import { areaPath, smoothPath, toChartPoints } from '../../../shared/lib/chart'
import styles from './DashboardPage.module.css'

const VIEW_WIDTH = 640
const VIEW_HEIGHT = 252
const PAD_TOP = 36
const PAD_RIGHT = 12
const PAD_BOTTOM = 28
const PAD_LEFT = 34
const MAX_Y = 100
const Y_TICKS = [0, 20, 40, 60, 80, 100]

const SCALE = {
  offsetX: PAD_LEFT,
  offsetY: PAD_TOP,
  plotWidth: VIEW_WIDTH - PAD_LEFT - PAD_RIGHT,
  plotHeight: VIEW_HEIGHT - PAD_TOP - PAD_BOTTOM,
  maxValue: MAX_Y,
}

export function SalesLineChart() {
  const gradientId = useId()
  const points = toChartPoints(
    SALES_SERIES.map((point) => point.sales),
    SCALE,
  )
  const baseline = SCALE.offsetY + SCALE.plotHeight
  const highlight = points[SALES_HIGHLIGHT.index]

  return (
    <svg
      className={styles.chart}
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      role="img"
      aria-label={SALES_REPORT_COPY.chartLabel}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c8ed2" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#5c8ed2" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Y_TICKS.map((tick) => {
        const y = SCALE.offsetY + (1 - tick / MAX_Y) * SCALE.plotHeight
        return (
          <g key={tick}>
            <line
              className={styles.chartGrid}
              x1={SCALE.offsetX}
              x2={SCALE.offsetX + SCALE.plotWidth}
              y1={y}
              y2={y}
            />
            <text className={styles.chartAxisLabel} x={10} y={y + 4}>
              {tick}
            </text>
          </g>
        )
      })}
      <path
        d={areaPath(points, baseline)}
        fill={`url(#${gradientId})`}
        aria-hidden="true"
      />
      <path d={smoothPath(points)} className={styles.chartLine} />
      {SALES_SERIES.map((point, index) => {
        const anchor = points[index]
        if (!anchor) return null
        return (
          <text
            key={point.day}
            className={styles.chartAxisLabel}
            x={anchor.x}
            y={VIEW_HEIGHT - 8}
            textAnchor="middle"
          >
            {point.day}
          </text>
        )
      })}
      {highlight && (
        <g>
          <rect
            className={styles.chartTooltip}
            x={highlight.x - 52}
            y={highlight.y - 54}
            width="104"
            height="42"
            rx="8"
          />
          <text
            className={styles.tooltipAmount}
            x={highlight.x}
            y={highlight.y - 36}
            textAnchor="middle"
          >
            {SALES_HIGHLIGHT.amount}
          </text>
          <text
            className={styles.tooltipDetail}
            x={highlight.x}
            y={highlight.y - 21}
            textAnchor="middle"
          >
            {SALES_HIGHLIGHT.detail}
          </text>
          <circle
            className={styles.chartPoint}
            cx={highlight.x}
            cy={highlight.y}
            r="4.5"
          />
        </g>
      )}
    </svg>
  )
}
