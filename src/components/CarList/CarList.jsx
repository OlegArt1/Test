import css from "./CarList.module.css";

export const CarListItem = ({ model }) =>
{
    return (
        <div className={css.car__overlay}>
            <div className={css.car}>
                <article className={css['car__article-block']}>
                    <div className={css['car__image-block']}>
                        <a className={css['car__image-link']} href={model.img}>
                            <img className={css.car__image} src={model.img}
                                 width="461" height="248" title={model.img} alt={model.img} />
                        </a>
                    </div>
                    <div className={css['car__description-block']}>
                        <p className={css.car__name}>
                            <span className={css['car__name-text']}>
                                Buick&nbsp;
                                <span style={{ color: '#3470FF'}}>Enclave</span>
                                , 2008
                            </span>
                        </p>
                        <p className={css.car__characteristic}>
                            <span className={css['car__characteristic-text']}>{model.address}</span>
                            <span className={css['car__characteristic-text']}>Id: {model.id}</span>
                            <span className={css['car__characteristic-text']}>Year: {model.year}</span>
                            <span className={css['car__characteristic-text']}>Type: {model.type}</span>
                            <span className={css['car__characteristic-text']}>Fuel Consumption: {model.fuelConsumption}</span>
                            <span className={css['car__characteristic-text']}>Engine Size: {model.engineSize}</span>
                        </p>
                        <p className={css.car__description}>{model.description}</p>
                        <p className={css.car__text}>Accessories and functionalities:</p>
                        <p className={css.car__accessories}>
                            <span className={css['car__accessories-text']}>{model.accessories[0]}</span>
                        </p>
                        <p className={css.car__text}>Rental Conditions:</p>
                        <p className={css.car__rental}>
                            <label className={css['car__rental-block']}>
                                <span className={css['car__rental-text']}>{model.rentalConditions}</span>
                            </label>
                            <label className={css['car__rental-block']}>
                                <span className={css['car__rental-text']}>
                                    Mileage:&nbsp;
                                    <span style={{ color: '#3470FF' }} className={css['car__rental-text']}>{model.mileage}</span>
                                </span>
                            </label>
                            <label className={css['car__rental-block']}>
                                <span className={css['car__rental-text']}>
                                    Price:&nbsp;
                                    <span style={{ color: '#3470FF' }} className={css['car__rental-text']}>{model.rentalPrice}</span>
                                </span>
                            </label>
                        </p>
                    </div>
                    <div className={css['car__btn-block']}>
                        <button className={css.car__btn}>
                            <span className={css['car__btn-text']}>Rental car</span>
                        </button>
                    </div>
                </article>
            </div>
        </div>
    );
};