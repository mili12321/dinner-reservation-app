import  homeBg1  from "../assets/imgs/home_bg/home-bg-1.jpeg";
import  homeBg2  from "../assets/imgs/home_bg/home-bg-2.jpeg";
import  homeBg3  from "../assets/imgs/home_bg/home-bg-3.jpeg";
import  homeBg4  from "../assets/imgs/home_bg/home-bg-4.jpeg";
import  homeBg5  from "../assets/imgs/home_bg/home-bg-5.jpg";

export const Home = () => {
    const imagesArray = [homeBg3,homeBg2,homeBg5,homeBg4]
    return (
        <div className="home flex column place-center">
            <div className='images-wrapper flex'>
            {imagesArray.map(image =>
                <div className="image-wrapper">
                    <img src={image} alt=""/>
                    <div className='above-image-content flex place-center justify-center'>Lorem, ipsum.</div>
                </div>
            )}
            </div>
            <div className='home-content-wrapper'>
                <div className="title">Drink, Food & Enjoy With Your Family</div>
                <div className="flex place-center">
                    <div className="content">food tasted better when you eat it with your family and friends</div>
                    <a className='fill-btn' href={`/dinner-reservation`} >Dinner Reservation</a>
                </div>
            </div>
        </div>
    )
}