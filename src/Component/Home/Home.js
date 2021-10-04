import './Home.css'

const Home = (props) => {

    const { img, Name, Price, } = props.course
    return (

        <div className="col-md-4">
            <div className="course-cart">
                <div className="course-img">
                    <img src={img} alt="" />
                </div>
                <h6>Name:{Name}</h6>
                <h6>Price:{Price}</h6>
            </div>

        </div>
    );

};


export default Home;