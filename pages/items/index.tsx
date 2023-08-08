import Link from 'next/link'
import { items } from '../../lib/items'

const ItemsPage = () => (
  <>
    <ul>
      {items.map((id) => (
        <li key={id}>
          <Link href={`/items/${id}`}>{`Item #${id}`}</Link>
        </li>
      ))}
    </ul>
    <div>
      <Link href="/">Home</Link>
    </div>
  </>
)

export default ItemsPage
