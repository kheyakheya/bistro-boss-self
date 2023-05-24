import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../Home/Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PpularMenu = () => {
    const [menu]=useMenu();
    const popular= menu.filter(item=>item.category==='popular');

 
    return (
        <section className='mb-12'>
            <SectionTitle subHeading="From our menu" heading="Popular Items"></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {popular.map(item=><MenuItem key={item._id} item={item}></MenuItem>)} 
           </div>
            <div className='text-center'>
                <button className='btn btn-outline border-0 border-b-4 mt-4'>View Full Menu</button>

            </div>
            <div className='bg-black my-24'>
               
                    <h2 className='py-16 text-3xl text-center text-white'>Call Us: +88 01986747366</h2>
                
            </div>
        </section>
        
    );
};

export default PpularMenu;