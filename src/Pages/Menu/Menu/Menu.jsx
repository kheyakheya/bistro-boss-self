import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import Cover from '../../Home/Home/Shared/Cover/Cover';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
const Menu = () => {
    const [menu]=useMenu();
    const desserts= menu.filter(item=>item.category==='dessert');
    const soup= menu.filter(item=>item.category==='soup');
    const salad= menu.filter(item=>item.category==='salad');
    const pizza= menu.filter(item=>item.category==='pizza');
    const offered= menu.filter(item=>item.category==='offered');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title='our menu' ></Cover>
            {/* offered items */}
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert iteems */}
            <MenuCategory items={desserts} title='dessert' img={dessertImg}></MenuCategory>
            {/* pizza items */}
            <MenuCategory items={pizza} title='pizza' img={pizzaImg}></MenuCategory>
            {/* salad items */}
            <MenuCategory items={salad} title='salad' img={saladImg}></MenuCategory>
            {/* soup items */}
            <MenuCategory items={soup} title='soup' img={soupImg}></MenuCategory>


            
        </div>
    );
};

export default Menu;