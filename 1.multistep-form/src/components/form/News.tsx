import { useFormContext } from '../../hooks/useFormContext'

export function News () {
  const { data, handleChange } = useFormContext()
  return (
        <>
    <label htmlFor="optInNews">
        <input type="checkbox" id="optInNews" name="optInNews" checked={data.optInNews} onChange={handleChange} />
        Receive our newsletter
    </label>
    <ul className="flex-col">
        <li>Save 10% Now</li>
        <li>Receive Discount Coupons</li>
        <li>Find Out About New Products</li>
    </ul>
</>
  )
}
