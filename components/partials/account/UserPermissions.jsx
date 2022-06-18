import Checkbox from 'antd/lib/checkbox/Checkbox';
import React, { useState } from 'react';
import AccountMenuSidebar from './modules/AccountMenuSidebar';

const UserPerms = () => {
    return (
        <section className="ps-my-account ps-page--account">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="ps-page__left">
                            <AccountMenuSidebar data={null} />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="ps-section--account-setting">
                            <div className="ps-section__header">
                                <h3>İzinler</h3>
                            </div>
                            {/* {!loading ? */}
                            <div className="ps-section__content">
                                <div className="ps-account-permissions">
                                    <Checkbox> Email ile reklam ve pazarlama gönderileri almak istiyorum.</Checkbox>
                                    <Checkbox> Sms ile reklam ve pazarlama gönderileri almak istiyorum.</Checkbox>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserPerms;