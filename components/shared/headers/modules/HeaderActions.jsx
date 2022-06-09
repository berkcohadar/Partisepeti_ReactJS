import React from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import MiniCart from '~/components/shared/headers/modules/MiniCart';
import AccountQuickLinks from '~/components/shared/headers/modules/AccountQuickLinks';

const HeaderActions = (props) => {
    const { compare, wishlist, auth } = props;
    // views
    let headerAuthView;
    if (auth.isLoggedIn && Boolean(auth.isLoggedIn) === true) {
        headerAuthView = <AccountQuickLinks isLoggedIn={true} />;
    } else {
        headerAuthView = <AccountQuickLinks isLoggedIn={false} />;
    }
    return (
        <div className="header__actions">            
            <Link href="/magazalarimiz">
                <a className="header__extra">
                    <i  className="icon-home3"></i>
                    <span className="location-hover">Mağazalarımız</span>
                </a>
            </Link>
            <Link href="/uyelik/favorilerim">
                <a className="header__extra">
                    <i className="icon-heart"></i>
                    <span>
                        <i>{wishlist ? wishlist.wishlistTotal : 0}</i>
                    </span>
                </a>
            </Link>
            <MiniCart />
            {headerAuthView}
        </div>
    );
};

export default connect((state) => state)(HeaderActions);
