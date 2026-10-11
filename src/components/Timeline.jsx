import { useEffect, useState } from 'react'
import '../styles/timeline.css'

// [left %, width %, colour]  b = blue, t = teal, a = audio grey
const TRACKS = [
  { label: 'V2', clips: [[6, 22, 'b'], [32, 16, 't'], [54, 30, 'b']] },
  { label: 'V1', clips: [[0, 27, 't'], [28, 21, 'b'], [50, 14, 't'], [65, 30, 'b']] },
  { label: 'A1', clips: [[0, 38, 'a'], [39, 56, 'a']] },
]

const END = 0.64 // where the playhead rests (0 to 1)
const TOTAL_SECONDS = 24

function timecode(p) {
  const total = p * TOTAL_SECONDS
  const s = Math.floor(total)
  const f = Math.floor((total - s) * 25)
  const pad = (n) => String(n).padStart(2, '0')
  return `00:00:${pad(s)}:${pad(f)}`
}

export default function Timeline() {
  const [p, setP] = useState(0)

  // One page-load moment: the playhead scrubs across, then rests.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setP(END)
      return
    }
    const duration = 2800
    const delay = 400
    let start
    let raf
    const tick = (t) => {
      if (start === undefined) start = t
      const elapsed = t - start - delay
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick)
        return
      }
      const k = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - k, 3)
      setP(eased * END)
      if (k < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div className="timeline" aria-hidden="true">
      <div className="tl-head">
        <span className="tl-dot" />
        <span className="tl-time">{timecode(p)}</span>
      </div>
      <div className="tl-body">
        {TRACKS.map((track) => (
          <div className="tl-track" key={track.label}>
            <span className="tl-label">{track.label}</span>
            <div className="tl-lane">
              {track.clips.map(([left, width, tone], i) => (
                <span
                  key={i}
                  className={`clip clip-${tone}`}
                  style={{ left: `${left}%`, width: `${width}%` }}
                />
              ))}
            </div>
          </div>
        ))}
        <span className="playhead" style={{ left: `calc(26px + (100% - 26px) * ${p})` }} />
      </div>
    </div>
  )
}
