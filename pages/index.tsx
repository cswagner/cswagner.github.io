import Link from 'next/link'

const HomePage = () => (
  <ul>
    <li>
      <Link href="/counter">Counter</Link>
    </li>
    <li>
      <Link href="/items">Items</Link>
    </li>
  </ul>
)

export default HomePage
