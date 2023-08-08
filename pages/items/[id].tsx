import { GetStaticPaths, GetStaticProps } from 'next'
import styles from '../../styles/item.module.css'

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [1, 2, 3].map((id) => ({ params: { id: `${id}` } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps = ({ params: { id } }) => ({
  props: { id },
})

const ItemPage = ({ id }) => <div className={styles.title}>{`Item #${id}`}</div>

export default ItemPage
