import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
    {
        id: 'p1',
        title: 'My First Book',
        price: 6,
        description: 'The First Book I Ever Wrote',
    },

    {
        id: 'p2',
        title: 'My Second Book',
        price: 8,
        description: 'The Second Book I Ever Wrote',
    },
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {products.map((item) => (
                    <ProductItem
                        key={item.id}
                        id={item.id}
                        price={item.price}
                        description={item.description}
                        title={item.title}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
