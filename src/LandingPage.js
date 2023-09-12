import logo from "../src/images/logo.png";
import image from "../src/images/image.png";
import google from "../src/images/google.png";
import playstore from "../src/images/playstore.png";
import orange from "../src/images/orange.png";
import fil from "../src/images/fil.png";
import frame from "../src/images/Frame.png";
import Rec from "../src/images/Rec.png";
import minus from "../src/images/minus.png";
import plus from "../src/images/plus.png";
import section from "../src/images/section.png";
import content from "../src/images/Content.png";
import iphone from "../src/images/iphone.png";
import Rectan from "../src/images/Rectan.png";
import eye from "../src/images/eye.png";
import rectangle from "../src/images/rectangle.png";
import contact from "../src/images/contact.png";



import vector from "../src/images/Vector.png";
import by from "../src/images/by.png";


import { BsArrowRightCircle } from 'react-icons/bs';
import { PiCaretCircleDoubleDownLight } from 'react-icons/pi';
// import { MdRectangle } from 'react-icons/md';



export const LandingPage = () => {
  return (
    <div>
      <header style={{ display: "flex", height:"70px", }}>
      <img src={logo} alt='' style={{ width: "30px", height: "30px", float: "right", marginTop: "8.5px", marginLeft: "100px" }} />
      <h1 style={{  fontFamily: "Sansation",
  fontSize: "36px",
  fontWeight: "700px",
  lineHeight: "40px",
  letterSpacing: "0em",
  textAlign: "left", 
  float: "right", marginTop: "4px", marginLeft: "130px", color: "#00653F"}}> X-RAIL</h1>
        <button style={{ height:"40px", width:"80px", marginTop: "10px", marginLeft:"auto", marginRight:"10px", cursor: "pointer",color: "#76B82A", backgroundColor: "white", border: "1.5px solid green", borderRadius: "5px"}}>Login</button>
        <button style={{ height: "40px", width: "115px", marginTop: "10px", marginRight: "70px", color: "white", cursor: "pointer", backgroundColor: "#76B82A", borderRadius: "5px", border:"1px solid green" }}>
  Get Started <BsArrowRightCircle style={{ fontSize: "16px", marginLeft: "3px",marginBottom: "-4.5px", }} />
</button>
      </header>

      
      <div style={{ fontFamily: "Manrope", fontSize: "60px", fontWeight: 800, lineHeight: "80px", letterSpacing: "0em", textAlign: "left", color: "#00663F", marginTop: "10px", marginLeft: "100px",}}>
  Buy.<br/>
  Invest.<br/>
  Grow.<br/>
</div>

        <div style={{ fontFamily: "Nunito Sans", fontSize: "18px", fontWeight: 400, lineHeight: "28px", letterSpacing: "0em", textAlign: "left", marginLeft: "100px", marginTop: "35px" }}>
  An all-inclusive platform for Investors to enjoy unrestricted <br/> access to new public offers by companies you are interested in. <br/> 
  <img src={by} alt='' style={{ width: "10px", height: "20px", float: "Left", marginTop: "130px", marginLeft: "23px" }} />
  <img src={vector} alt='' style={{ width: "100px", height: "60px", float: "Left", marginTop: "110px", marginLeft: "-10px" }} />
 
  <img src={google} alt='' style={{ width: "100px", height: "42px", float: "left", cursor: "pointer", marginTop: "30px", marginLeft: "-120px" }} />
  <img src={playstore} alt='' style={{ width: "100px", height: "42px", float: "left", cursor: "pointer",marginTop: "30px", marginLeft: "1px" }} />
  <br/>
  
  <div>
   <PiCaretCircleDoubleDownLight style={{ fontSize: "40px", marginLeft: "400px", cursor: "pointer", marginBottom: "-180px", color:"black",  }} />
</div>
  <img src={image} alt='' style={{ width: "610px", height: "500px", float: "right", marginTop: "-360px", marginRight: "100px" }} />

</div>

<div style={{ fontFamily: "Manrope", fontSize: "48px", fontWeight: 700, lineHeight: "60px", letterSpacing: "0em", textAlign: "center", color: "#00663F", marginTop: "300px", marginLeft: "0px",}}>
 How it works
</div>

 <div>
 <img src={content} alt='' style={{ width: "576px", height: "290px", float: "left", marginTop: "950px", marginLeft: "794px", }} />
 <button style={{ height: "40px", width: "115px", marginTop: "450px", float: "left",  marginLeft: "794px", color: "white", cursor: "pointer", backgroundColor: "#76B82A", borderRadius: "5px", border:"1px solid green" }}>
  Get Started <BsArrowRightCircle style={{ fontSize: "16px", marginLeft: "3px",marginBottom: "-4.5px", }} />
</button>
</div>
<div>
  <img src={orange} alt='' style={{ width: "647px", height: "419px", float: "right", marginTop: "950px", marginLeft: "58px"}} />
  <img src={fil} alt='' style={{ width: "647px", height: "419px", float: "left", marginBottom: "2460px", marginRight: "685px"}} />
</div>

<div style={{backgroundColor: "#F6FCF9",paddingBottom:"800px", borderRadius: "5px", border:"1px solid #F6FCF9", color: "#F6FCF9",marginTop: "700px", marginLeft: "0px",}}>
<img src={frame} alt=''style={{ marginTop: "1600px", marginLeft: "700px",lineHeight: "100px"}}/>
<h1 style={{fontFamily: "Manrope", fontSize: "48px", fontWeight: 700, lineHeight: "0px", 
letterSpacing: "0em", textAlign: "center", paddingTop:"0px",color: "#29272E", marginTop: "200px", marginLeft: "65px", }}> Frequently Asked Questions</h1>
<img src={Rec} alt='' style={{ fontSize: "16px", marginLeft: "700px",marginBottom: "50px", }} />
<div style={{backgroundColor: "#FFFFFF", borderRadius: "5px", border:"1px solid #FFFFFF", width:"1200px", marginBottom: "0px", marginLeft: "110px",}}>
<div style={{ borderBottom:"4px solid",}}> 
<h1 style={{ color:"#76B82A",marginLeft: "150px",fontFamily: "Nunito Sans", fontSize: "24px", fontWeight: "700",marginTop:"22px", }}> 
<img src={minus} alt=''style={{width: "25px",height: "10px", color:"yellow",marginLeft: "200px",marginTop:"1853px", }} />
How do i subscribe? 
<h3 style={{ color:"#38353E",fontWeight: "400",fontFamily: "Nunito Sans", fontSize: "18px",}} >
Follow the steps below to subscribe: Select available investment products. View details of the transaction. Input units to subscribe, CSCS and Bank details Read and accept the terms and conditions of the application
 and prospectus Proceed to pay You will receive a notification of the transaction in your email
</h3>
</h1>   
</div>
<div style={{ borderBottom:"2px solid #DAD8DF ",}}><h1 style={{ color:"#59565f",marginLeft: "150px",fontFamily: "Nunito Sans", fontSize: "24px", fontWeight: "700",marginTop:"22px", }}> 
<img src={plus} alt=''style={{width: "15px",height: "10px", color:"",marginLeft: "200px",marginTop:"2020px", }} />
What is a CSCS number? </h1></div>
<div style={{ borderBottom:"2px solid #DAD8DF",}}><h1 style={{ color:"#59565f",marginLeft: "150px",fontFamily: "Nunito Sans", fontSize: "24px", fontWeight: "700",marginTop:"22px", }}> 
<img src={plus} alt=''style={{width: "15px",height: "10px", color:"",marginLeft: "200px",marginTop:"2095px", }} />
I don’t have a CSCS number, Can I still apply?</h1></div>
<div style={{ borderBottom:"2px solid #DAD8DF",}}><h1 style={{ color:"#59565f",marginLeft: "150px",fontFamily: "Nunito Sans", fontSize: "24px", fontWeight: "700",marginTop:"22px", }}> 
<img src={plus} alt=''style={{width: "15px",height: "10px", color:"",marginLeft: "200px",marginTop:"2170px", }} />
How do I pay?</h1></div>
<div style={{ borderBottom:"2px solid #DAD8DF",}}><h1 style={{ color:"#59565f",marginLeft: "150px",fontFamily: "Nunito Sans", fontSize: "24px", fontWeight: "700",marginTop:"22px", }}> 
<img src={plus} alt=''style={{width: "15px",height: "10px", color:"",marginLeft: "200px",marginTop:"2250px", }} />
How do I know if my transaction is successful?</h1></div>
<div style={{ borderBottom:"2px solid #DAD8DF",}}><h1 style={{ color:"#59565f",marginLeft: "150px",fontFamily: "Nunito Sans", fontSize: "24px", fontWeight: "700",marginTop:"22px", }}> 
<img src={plus} alt=''style={{width: "15px",height: "10px", color:"",marginLeft: "200px",marginTop:"2324px", }} />
How do I know if my transaction is successful?</h1>
</div>
<div> <button style={{marginTop:"25px",marginBottom:"25px", height: "30px", marginLeft:"500px", gap:"10px", width: "150px",color: "green", cursor: "pointer", backgroundColor: "white", borderRadius: "50px", border:"1px solid green", paddingTop:"12px,12px", paddingBottom:"24px, 24px",}}>See ALL FAQs</button>
</div>
</div>
</div>
<div style={{height:"3000",backgroundColor: "#76B82A", borderRadius: "5px", border:"1px solid #F6FCF9", color: "#F6FCF9",marginBottom: "1000px", marginLeft: "0px",}}>
<div>
{/* <img src={yellow} alt=''style={{ marginTop: "1600px", marginRight: "700px",lineHeight: "100px"}}/> */}

<div>
<img src={section} alt=''style={{ marginTop: "2600px"}} />
</div>

<div>
<img src={iphone} alt=''style={{ height:"800px",marginTop: "2480px", marginLeft:"150px",}} />
</div>

</div>
</div>
<div style={{display: "flex", alignItems: "center", marginLeft:"240px", marginTop: "-850px"   }}>
  <h1 style={{fontFamily: "Manrope", fontSize: "24px", fontWeight: "600px", lineHeight: "36px", letterSpacing: "0em", textAlign: "left", color: "#1D2939", marginRight: "50px"}}>
  X-rail is a solution for <span style={{color: "#76B82A"}}>retail investors</span>. If you are a <br/> <span style={{color: "#76B82A"}}>corporate investor</span> seeking to use this platform,<br/> let us have your details and we will inform you<br/> when we tailor this solution to you.
  </h1>
  <div style={{width: "390px", height: "170px", fontFamily: "Manrope", fontSize: "14px", fontWeight: "600px", lineHeight: "20px", letterSpacing: "0em", textAlign: "left", color: "#00663F", border: "2px solid #F1F1F1", borderRadius: "20px", padding: "10px"}}>
    <div style={{color: "#344054", marginBottom: "6px"}}>
      <label htmlFor="name">Name:</label>
      <br />
      <input type="text" id="name" style={{border: "1px solid #D0D5DD", borderRadius: "4px", width: "382px", height: "24px"}} />
    </div>
    <div style={{color: "#344054", marginBottom: "24px"}}>
      <label htmlFor="email">Email Address:</label>
      <br />
      <input type="email" id="email" style={{border:"1px solid #D0D5DD",borderRadius: "4px", width: "382px", height: "24px", color: "#D0D5DD"}} />
    </div>
    <button type="submit" style={{color: "white", cursor: "pointer", backgroundColor: "#76B82A",width: "390px", height: "40px",borderRadius: "4px", border:"1px solid #76B82A"}}>Submit</button>
  </div>
</div>
  <div>
  <img src={contact} alt=''style={{ marginTop: "3650px"}} />
  </div>
</div>
  






      
        
      

)
};
