import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    // made bg fixed to give paralaz on bg image
    return (
        <div className='featured-item bg-fixed text-white pt-8 my-20'>
            <SectionTitle subHeading='check it out' heading='Featured Item'></SectionTitle>
            <div className='md:flex justify-center items-center pb-20 pt-12 px-36 bg-slate-500 bg-opacity-60'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p className='pb-2'>Aug 20, 2029</p>
                    <p className='uppercase pb-4'>Where can I get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus ad nisi accusamus, architecto voluptates, harum illo voluptatem tempora sint ducimus ea? Nobis voluptate minus cumque! Reprehenderit ducimus natus, id tenetur, assumenda libero fugit officia nihil sit ut in facilis itaque cum odit dolorum! Harum expedita, assumenda omnis tempora recusandae quae.</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-4'>Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;