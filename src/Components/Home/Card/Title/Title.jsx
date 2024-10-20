
export default function Title({ productTitle }) {
  return (
    <>
      <div className="mb-4">
        <h3 className=" text-lg">{productTitle.split(" ").slice(0, 4).join(" ")}</h3>
      </div>
    </>
  )
}
