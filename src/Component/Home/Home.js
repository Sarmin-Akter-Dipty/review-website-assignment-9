import Extra from '../Extra/Extra';
import './Home.css'

const Home = (props) => {
    //distructuring
    const { img, Name, Price, } = props.course
    return (
        <div className="col-md-3">
            <div className="course-cart">
                <div className="course-img">
                    <img src={img} alt="" />
                </div>
                <h6>Name: <span className="color">{Name}</span></h6>
                <h6>Price: {Price}</h6>
            </div>
        </div>
    );

};
<Extra></Extra>


export default Home;