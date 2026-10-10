export interface ChartPoint {
  x: number
  y: number
}

export interface ChartScale {
  offsetX: number
  offsetY: number
  plotWidth: number
  plotHeight: number
  maxValue: number
}

export function toChartPoints(
  values: readonly number[],
  scale: ChartScale,
): ChartPoint[] {
  const step = scale.plotWidth / Math.max(values.length - 1, 1)
  return values.map((value, index) => ({
    x: scale.offsetX + index * step,
    y: scale.offsetY + (1 - value / scale.maxValue) * scale.plotHeight,
  }))
}

export function smoothPath(points: readonly ChartPoint[]): string {
  const first = points[0]
  if (!first || points.length < 2) return ''
  const parts = [`M ${first.x} ${first.y}`]
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? first
    const p1 = points[i] ?? first
    const p2 = points[i + 1] ?? first
    const p3 = points[i + 2] ?? p2
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    parts.push(`C ${c1x} ${c1y}, ${c2x} ${c2y}, ${p2.x} ${p2.y}`)
  }
  return parts.join(' ')
}

export function areaPath(
  points: readonly ChartPoint[],
  baseline: number,
): string {
  const first = points[0]
  const last = points[points.length - 1]
  if (!first || !last) return ''
  return `${smoothPath(points)} L ${last.x} ${baseline} L ${first.x} ${baseline} Z`
}
