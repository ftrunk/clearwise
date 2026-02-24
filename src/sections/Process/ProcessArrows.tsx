import { useId, useLayoutEffect, useMemo, useState } from 'react'

type Props = {
  containerRef: React.RefObject<HTMLDivElement | null>
  stepRefs: React.RefObject<(HTMLElement | null)[]>
}

type Point = { x: number; y: number }

function midRight(r: DOMRect): Point {
  return { x: r.right, y: r.top + r.height / 2 }
}
function midLeft(r: DOMRect): Point {
  return { x: r.left, y: r.top + r.height / 2 }
}
function midTop(r: DOMRect): Point {
  return { x: r.left + r.width / 2, y: r.top }
}
function midBottom(r: DOMRect): Point {
  return { x: r.left + r.width / 2, y: r.bottom }
}

function toLocal(p: Point, container: DOMRect): Point {
  return { x: p.x - container.left, y: p.y - container.top }
}

// weiche Kurve (quadratic bezier)
function quadCurve(a: Point, b: Point, bend = 0.25): string {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2

  // Normalen-Offset (einfacher "Bogen")
  const dx = b.x - a.x
  const dy = b.y - a.y
  const len = Math.max(1, Math.hypot(dx, dy))
  const nx = -dy / len
  const ny = dx / len

  const offset = len * bend
  const cx = mx + nx * offset
  const cy = my + ny * offset

  return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`
}

export default function ProcessArrows({ containerRef, stepRefs }: Props) {
  const reactId = useId()
  const markerId = useMemo(() => `arrow-${reactId.replace(/:/g, '')}`, [reactId])

  const [paths, setPaths] = useState<string[]>([])

  useLayoutEffect(() => {
    const containerEl = containerRef.current
    if (!containerEl) return

    const update = () => {
      const c = containerEl.getBoundingClientRect()
      const els = stepRefs.current
      if (els.length < 4 || els.some((e) => !e)) return

      const r1 = els[0]!.getBoundingClientRect()
      const r2 = els[1]!.getBoundingClientRect()
      const r3 = els[2]!.getBoundingClientRect()
      const r4 = els[3]!.getBoundingClientRect()

      // Gewünschte Anker (wie du beschrieben hast):
      // 1: rechts-mitte -> 2: oben-mitte
      // 2: unten-mitte -> 3: rechts-mitte
      // 3: links-mitte  -> 4: unten-mitte
      // 4: oben-mitte   -> 1: links-mitte
      const p1a = toLocal(midRight(r1), c)
      const p1b = toLocal(midTop(r2), c)

      const p2a = toLocal(midBottom(r2), c)
      const p2b = toLocal(midRight(r3), c)

      const p3a = toLocal(midLeft(r3), c)
      const p3b = toLocal(midBottom(r4), c)

      const p4a = toLocal(midTop(r4), c)
      const p4b = toLocal(midLeft(r1), c)

      // Bend: kleiner = “runder/kreisiger”, größer = “bananiger”
      const next = [
        quadCurve(p1a, p1b, 0.18),
        quadCurve(p2a, p2b, 0.18),
        quadCurve(p3a, p3b, 0.18),
        quadCurve(p4a, p4b, 0.18)
      ]

      setPaths(next)
    }

    update()

    const ro = new ResizeObserver(() => update())
    ro.observe(containerEl)
    window.addEventListener('resize', update)

    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [containerRef, stepRefs])

  // wenn noch nicht berechnet -> nichts rendern (sonst “komisch”)
  if (paths.length === 0) return null

  return (
    <svg className="process__arrows" aria-hidden="true">
      <defs>
        <marker
          id={markerId}
          viewBox="0 0 12 12"
          refX="10"
          refY="6"
          markerWidth="10"
          markerHeight="10"
          orient="auto"
        >
          {/* stroke in BG-Farbe “schneidet” die Linie unter dem Kopf optisch weg */}
          <path
            d="M 0 0 L 12 6 L 0 12 z"
            fill="currentColor"
            stroke="var(--color-bg)"
            strokeWidth="2"
          />
        </marker>
      </defs>

      {paths.map((d, idx) => (
        <path
          key={idx}
          d={d}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          markerEnd={`url(#${markerId})`}
        />
      ))}
    </svg>
  )
}
