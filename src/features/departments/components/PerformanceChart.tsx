import { useId } from 'react'
import {
  areaPath,
  smoothPath,
  toChartPoints,
} from '../../../shared/lib/chart'
import { PERFORMANCE_COPY, PERFORMANCE_SERIES } from '../departments-content'
import styles from './DepartmentsPage.module.css'

const VIEW_WIDTH = 640
const VIEW_HEIGHT = 240
const PAD_TOP = 16
const PAD_RIGHT = 14
const PAD_BOTTOM = 28
const PAD_LEFT = 38
const MAX_Y = 100
const Y_TICKS = [0, 20, 40, 60, 80, 100]

const SCALE = {
  offsetX: PAD_LEFT,
  offsetY: PAD_TOP,
  plotWidth: VIEW_WIDTH - PAD_LEFT - PAD_RIGHT,
  plotHeight: VIEW_HEIGHT - PAD_TOP - PAD_BOTTOM,
  maxValue: MAX_Y,
}

export function PerformanceChart() {
  const gradientId = useId()
  const points = toChartPoints(
    PERFORMANCE_SERIES.map((point) => point.value),
    SCALE,
  )
  const baseline = SCALE.offsetY + SCALE.plotHeight

  return (
    <svg
      className={styles.chart}
      viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
      role="img"
      aria-label={PERFORMANCE_COPY.chartLabel}
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5c8ed2" stopOpacity="0.22" />
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
            <text className={styles.chartAxisLabel} x={4} y={y + 4}>
              {tick}%
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
      {PERFORMANCE_SERIES.map((point, index) => {
        const anchor = points[index]
        if (!anchor) return null
        return (
          <g key={point.day}>
            <circle
              className={styles.chartPoint}
              cx={anchor.x}
              cy={anchor.y}
              r="4"
            />
            <text
              className={styles.chartAxisLabel}
              x={anchor.x}
              y={VIEW_HEIGHT - 8}
              textAnchor="middle"
            >
              {point.day}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
