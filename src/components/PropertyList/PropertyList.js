import React from 'react';

function PropertySection() {
    return (
        <section className="property bg-gray-100 padding-y-120">
            <div className="container container-two">
                <div className="property-filter">
                    <form action="#">
                        <div className="row gy-4">
                            <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                                <div className="select-has-icon">
                                    <select className="form-select common-input common-input--withLeftIcon pill text-gray-800">
                                        <option value="Status" disabled selected>Status</option>
                                        <option value="All">All</option>
                                        <option value="Buy">Buy</option>
                                        <option value="Rent">Rent</option>
                                    </select>
                                    <span className="input-icon input-icon--left text-gradient">
                                        <img src="" alt="" />
                                    </span>
                                </div>
                            </div>
                            {/* Ajoutez le reste des éléments de formulaire de filtre ici */}
                        </div>
                    </form>
                    <div className="property-filter__bottom flx-between gap-2">
                        <span className="property-filter__text font-18 text-gray-800">Showing 1-10 of 23</span>
                        <div className="d-flex align-items-center gap-2">
                            <div className="list-grid d-flex align-items-center gap-2 me-4">
                                <button className="list-grid__button grid-button active text-body">
                                    <i className="las la-border-all"></i>
                                </button>
                                <button className="list-grid__button list-button text-body">
                                    <i className="las la-list"></i>
                                </button>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                                <span className="property-filter__text font-18 text-gray-800">
                                    Sort by:
                                </span>
                                <div className="select-has-icon">
                                    <select className="form-select common-input pill text-gray-800 px-3 py-2">
                                        <option value="Newest">Newest</option>
                                        <option value="Best Seller">Best Seller</option>
                                        <option value="Best Match">Best Match</option>
                                        <option value="Low Price">Low Price</option>
                                        <option value="High Price">High Price</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-grid-item-wrapper show-two-item row gy-4">
                    {/* Ajoutez le contenu des éléments de la liste ici */}
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination common-pagination">
                    {/* Ajoutez le contenu de la pagination ici */}
                </ul>
            </nav>
        </section>
    );
}

export default PropertySection;
