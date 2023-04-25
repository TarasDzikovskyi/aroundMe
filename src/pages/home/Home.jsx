import './home.scss';
import React from "react";
import img1 from '../../img/europe.jpg';
import img2 from '../../img/image.jpg';
import img3 from '../../img/img1.jpg';
import {Link} from 'react-scroll'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import EastIcon from '@mui/icons-material/East';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import data from '../../db';
import Review from "../../components/review/Review";
import {useNavigate} from "react-router-dom";
import {motion} from 'framer-motion';

const textAnimation = {
    hidden: {
        y: 100,
        opacity: 0
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: 0.5}
    })
};


export default function Home() {
    console.log(data);
    const navigate = useNavigate();

    let settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        // centerPadding: "60px",
        // centerMode: true,
    };


    const handleClick = (id) => {
        navigate(`/item`)
    };


    return (
        <motion.div
            className='home'
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2 }}
        >

            <div className="lines">
                <div className="line"></div>
                {data.map((item) => (
                    <div>
                        <Link activeClass="active" smooth spy to={`${item.section_id}`}>
                            <div className="dot"><span>{item.id}</span></div>
                        </Link>
                        <div className="small-line"></div>
                    </div>
                ))}
                <div className="small-line"></div>

            </div>

            {data.map((item) => (

                <section id={`${item.section_id}`}>
                    {/*<img src={img1} alt="" height='100%' width='100%'/>*/}
                    <div className="slider">
                        <Slider {...settings}>

                            <div className='item'>
                                <div className="info-box">
                                    <div className="title">
                                        <motion.h1

                                            initial={{ opacity: 0, x: -200 }}
                                            whileInView={{ opacity: 1, x:0 }}
                                            transition={{delay: 0.4}}

                                            // custom={1} variants={textAnimation}
                                        >{item.country}</motion.h1>
                                    </div>

                                    <motion.div
                                        className="desc"
                                        initial={{ opacity: 0, x: -200 }}
                                        whileInView={{ opacity: 1, x:0 }}
                                        transition={{delay: 0.5}}

                                    >{item.desc}</motion.div>
                                    <motion.button
                                        initial={{ opacity: 0, x: -200 }}
                                        whileInView={{ opacity: 1, x:0 }}
                                        transition={{delay: 0.5}}
                                    ><p>Explore</p> <EastIcon/></motion.button>
                                </div>
                            </div>

                            {item.objects.map((object) => (
                                <div className='item'  >
                                    <img src={img2} alt="" className='bg-img' onClick={() => handleClick()} />
                                    <div className="absolute_block">
                                        <h3>{object.title}</h3>
                                        <Review rating={object.rating}/>
                                    </div>
                                    {/*<h3>{object.from}</h3>*/}
                                    {/*<h3>2</h3>*/}

                                    <div className="bookmark" >
                                        <BookmarkIcon style={{ fill: '#A2A2A2', fontSize: '16px' }} className='icon'/>
                                    </div>
                                </div>

                            ))}

                        </Slider>
                    </div>
                </section>
            ))}


            {/*<section id='africa'></section>*/}
            {/*<section id='asia'></section>*/}

        </motion.div>
    )
}