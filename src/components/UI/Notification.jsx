import classes from './Notification.module.css';

const Notification = (props) => {
    let specialClasses = '';

    if (props.status === 'Error') {
        specialClasses = classes.error;
    }
    if (props.status === 'Success') {
        specialClasses = classes.success;
    }

    const CSS = `${classes.notification} ${specialClasses}`;

    return (
        <section className={CSS}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};

export default Notification;
