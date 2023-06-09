import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import orderCover from '../../../assets/shop/banner2.jpg';
import Cover from '../../Home/Home/Shared/Cover/Cover';
import 'react-tabs/style/react-tabs.css';
import { useState } from 'react';
import useMenu from '../../../Hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
// install react tab, found initialIndex and set tabindex
const Order = () => {
    const categories= ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category}= useParams();
    // found the category of chosen route
    const initialIndex= categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const drinks = menu.filter(item => item.category === 'drinks');
    return (
        <div>
            <Helmet>
                <title>Bistro | Order Food</title>
            </Helmet>
            <Cover img={orderCover} title={'Order Food'}></Cover>
            {/* change defaultIndex value from 1 to tabIndex */}
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={soup}></OrderTab>

                </TabPanel>
                <TabPanel>
                <OrderTab items={desserts}></OrderTab>

                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;