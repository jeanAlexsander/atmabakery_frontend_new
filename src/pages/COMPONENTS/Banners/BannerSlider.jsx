import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'
import banner1 from '../../IMAGES/banner1.png'
import banner2 from '../../IMAGES/banner2.png'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: banner1,
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'We deliver fresh vegetables & fruits at your doorstep',
        },
        {
            id: 2,
            image: banner2,
            title: 'Fresh Vegetables & Fruits at your doorstep',
            description: 'Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn’t be more delighted.',
        }
    ]


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className='bannerslider'>
            <Slider className='bannerslider' {...settings}>
                {
                    data.map(item => {
                        return (
                            <div className='imagecont' key={item.id}>
                                <img src={item.image} alt='noimg' />
                                <div className='content'>
                                    <h1>{item.title}</h1>
                                    <span>{item.description}</span>
                                    <button>Shop More</button>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default BannerSlider