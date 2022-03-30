import React, { Component } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

const { SubMenu } = Menu;

class PanelCategories extends Component {
    constructor(props) {
        super(props);
    }

    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(
            key => this.state.openKeys.indexOf(key) === -1
        );
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    categories = [
        {id:"1",slug:"/uyelik/siparislerim",name:"Siparişlerim"},
        {id:"2",slug:"/uyelik/koleksiyonlarim",name:"Koleksiyonlarım"},
        {id:"3",slug:"/uyelik/uyelik-bilgilerim",name:"Üyelik Bilgilerim"},
        {id:"4",slug:"uyelik/adreslerim",name:"Adreslerim"},
        // {id:"5",slug:"",name:""},

    ];

    render() {
        return (
            <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}>
                {this.categories.map(category => (
                    <Menu.Item key={category.id} >
                        <a href={`${category.slug}`}>
                            {category.name}
                        </a>
                    </Menu.Item>
                ))}
            </Menu>
        );
    }
}

export default PanelCategories;
