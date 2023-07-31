import React,{Component} from 'react';
import shop1 from './image/shop1.avif';
 class About extends Component{
    render(){
        return(
            <div>
                <center>
                    <img src={shop1}></img>
                    <h1>About</h1>
                    <p>We know that trying on a watch before making the final purchase is so important for every watch aficionado! After all, the wristwatch you are buying needs to represent you. So, we understand how necessary the whole buying experience is.

We also provide in-store services like watch replacement, free battery replacement and a host of other services offered by 300+ watch experts across the country. You can gain and redeem your Encircle points for store purchases, but only points that have been credited from previous purchases. Online, you can only gain loyalty points. You can also get credit card points and avail our post-sale and no-cost EMI services. Terms & Conditions applied.</p>
                </center>
            </div>
        )
    }
 }
 export default About;