// One portfolio piece: YouTube embed, your own video file, or a placeholder.
export default function WorkItem({ item, index }) {
  const ratio = item.ratio || '16 / 9'
  const hue = (index * 47 + 205) % 360

  let media
  if (item.youtube) {
    media = (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${item.youtube}`}
        title={item.title}
        loading="lazy"
        allow="accelerometer; encrypted-media; picture-in-picture; fullscreen"
        allowFullScreen
      />
    )
  } else if (item.video) {
    media = <video src={item.video} poster={item.poster} controls preload="metadata" playsInline />
  } else {
    media = (
      <div
        className="placeholder"
        style={{ background: `linear-gradient(145deg, hsl(${hue} 28% 24%), hsl(${hue + 30} 32% 13%))` }}
      >
        <span>Add your video in src/config/site.js</span>
      </div>
    )
  }

  return (
    <figure className="work">
      <div className="frame" style={{ aspectRatio: ratio }}>
        {media}
      </div>
      <figcaption>
        <strong>{item.title}</strong>
        <span>{item.type}</span>
      </figcaption>
    </figure>
  )
}
