export const GifItem =({title, img}) => {
  return (
    <div className="card">
        <h2>{title}</h2>
        <img src={img} alt="" />
    </div>
  )
}

