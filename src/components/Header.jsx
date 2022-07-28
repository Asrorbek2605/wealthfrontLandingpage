import React from "react";
import headerimg from "../images/Rectangle.png";
import headerimg1 from "../images/image 1.png"
import headerimg2 from "../images/Frame.png"
import headerimg3 from "../images/image 3.png"
import headerimg4 from "../images/Rectangle (3).png"
import vektor from "../images/Vector.png";
import {Button} from "reactstrap";
export default function Header() {
    return(
<div className="container-fluid">
    <div className="row">
        <div className="col-xl-7 col-12 col-sm-8">
            <img src={headerimg} alt="header"/></div>
        <div className="col-xl-5 col-12 col-sm-4">
            <h1 className="title">Make wealth<br/>
                your own.
            </h1>
            <p className="text">Personalized, Automated, Effortless <br/>
                Investing and Savings.
            </p>
            <Button className="btn btn3" color="primary">Get started</Button>
        </div>
    </div>
    <div className="row pt-4">
        <div className="col-xl-2">
            <h2 className="title2"><span>N</span>nerdwallet</h2>
            <p className="text2">Best Robo-advisor, 2019<br/>
                Best Cash Management App, 2020</p>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">investopedia</h2>
            <p className="text2">Best Robo-advisor, 2020</p>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">450K+</h2>
            <p className="text2">Trusted clients</p>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">$26B+</h2>
            <p className="text2">In client funds</p>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">4.9</h2>
            <p className="text2">Apple App Store</p>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">4.5</h2>
            <p className="text2">Google Play Store</p>
        </div>
    </div>
    <div className="row">
        <div className="col-xl-6 title3 col-sm-6 col-12">
<h1>Investing<br/> isn’t easy. <br/>We just make it<br/> feel that way.</h1>
        <p className="text3">Let us customize a portfolio just for you or build it yourself, and our powerful automation will make the most of your investments, optimizing your performance and helping lower your taxes.
        </p>
<div className="row">
    <div className="col-xl-3"><Button color="primary">Start investing</Button></div>
    <div className="col-xl-3"><Button className="btn4">Learn more</Button></div>
</div>
        </div>
        <div className="col-xl-6" col-sm-6 col-12>
<img src={headerimg1} alt="headerimg1"/>
        </div>
    </div>
    <div className="row">
        <div className="col-xl-7">
            <img src={headerimg2} alt="headerimg"/>
        </div>
        <div className="col-xl-5 col-sm-6 col-12">
<h1 className="title4">Everyday cash, <br/>designed to build<br/> long-term wealth.</h1>
     <p className="text4">Our Cash account, offered with Green Dot Bank, lets you automate your savings, so you can pay bills, withdraw from 19,000+ ATMs, and invest your extra cash in seconds to keep building your future.</p>
            <div className="row">
                <div className="col-xl-2"><Button color="primary">Start saving</Button></div>
                <div className="col-xl-2"><Button className="btn4">Learn more</Button></div>
            </div>
        </div>

    </div>
    <div className="row back" >
        <div className="col-xl-6 title3 col-sm-6 col-12">
            <h1>Investing<br/> isn’t easy. <br/>We just make it<br/> feel that way.</h1>
            <p className="text3">Let us customize a portfolio just for you or build it yourself, and our powerful automation will make the most of your investments, optimizing your performance and helping lower your taxes.
            </p>
        </div>
        <div className="col-xl-6" col-sm-6 col-12>
            <img src={headerimg3} alt="headerimg1"/>
        </div>
    </div>
    <div className="row back1">
<div className="box">
    <h3>Testimonials</h3>
    <p>It's the single best resource for both investing, managing retirement and seeing my entire financial picture.</p>
    <h6>Joshua</h6>
</div>
<div className="box">
    <h3>Testimonials</h3>
    <p>Wealthfront is the first thing in my life that actually motivated me to save money.</p>
    <h6>Insidore</h6>
</div>
<div className="box">
    <h3>Testimonials</h3>
    <p>It’s automatic, and I’m lazy.</p>
    <h6>Ryan</h6>
</div>
    </div>
    <div className="row">
        <div className="col-xl-2">

        </div>
<div className="col-xl-8 get">
    <img src={headerimg4} alt="headerimg4"/>
    <h4>Over 450,000 people are<br/> already using Wealthfront to<br/> earn more and worry less</h4>
<div className="boxbtn">
    <Button className="btn btn5" color="primary">Get Started</Button>
</div>
</div>
        <div className="col-xl-2">

        </div>
    </div>
    <div className="row pt-4">
        <div className="textfeatures pb-4">
            <h5>As featured in</h5>
        </div>
        <div className="col-xl-1">
        </div>
        <div className="col-xl-2">
            <h2 className="title2">WSJ</h2>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">Bloomberg</h2>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">The New York Times</h2>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">Reatures</h2>
        </div>
        <div className="col-xl-2">
            <h2 className="title2">CNBS</h2>
        </div>
        <div className="col-xl-1">
        </div>
    </div>
    <div className="row pt-4 bgColor">
        <div className="col-xl-6 d-flex">
            <img src={vektor} alt="vektor" width="50px" height="50px"/>
            <p className="ptext">Wealthfront</p>
        </div>
        <div className="col-xl-6">
            <div className="row ">
                <div className="col-xl-3 h6text">
                    <h6>Careers</h6>
                    <h6>Help center</h6>
                    <h6>Homeownership</h6>
                </div>
                <div className="col-xl-3 h6text">
                    <h6>Legal</h6>
                    <h6>Blog</h6>
                    <h6>College</h6>
                </div>
                <div className="col-xl-3 h6text" >
                    <h6>Methodology</h6>
                    <h6>Planning</h6>
                    <h6>Our Phd Teams</h6>
                </div>
                <div className="col-xl-3 h6text">
                    <h6>Contact</h6>
                    <h6>Retirement</h6>
                    <h6>Back to top</h6>
                </div>
            </div>
        </div>
    </div>
</div>
    )
}