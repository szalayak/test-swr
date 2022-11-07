import { useCategories } from '../store';
import styles from '../styles/Home.module.css'

export const Categories = () => {

    const { data: categories, error, isLoading } = useCategories();

    if (error) return <>{error}</>;

    if (isLoading) {
        return <div className={styles.card}>
            <h2>Loading</h2>
        </div>
    }

    return <div className={styles.card}>
        <h2>Categories</h2>
        <ul>
            {categories?.map(category => <li key={category.id}>{category.name}</li>)}
        </ul>
    </div>

}