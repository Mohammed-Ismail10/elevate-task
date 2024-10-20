
export default function Image({ productImage, productTitle }) {
  return (
    <>
      <div className="rounded-lg border border-black overflow-hidden">
        <img className="w-full h-72 object-contain" src={productImage} alt={productTitle} loading="lazy" />
      </div>
    </>
  )
}
