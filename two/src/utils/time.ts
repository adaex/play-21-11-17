export function timeFormat(ms: number) {
  ms = Math.round(ms / 1000)
  const h = Math.floor(ms / 3600)
  const m = Math.floor((ms / 60) % 60)
  const s = Math.floor(ms % 60)
  return (
    h.toString().padStart(2, '0') +
    ':' +
    m.toString().padStart(2, '0') +
    ':' +
    s.toString().padStart(2, '0')
  )
}
