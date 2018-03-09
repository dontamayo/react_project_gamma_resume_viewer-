import React, { Component } from 'react';

class Contact extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>

            <div className="ten columns">
                  <p className="lead">I like to learn and build new sites on different programming languages. I found Web developing as my hobby and I'm enjoying every bit of it. On the other side, It is overwhelming sometimes when working on countless hours but I found it rewarding once the apps is successfull and my codes are working. Learning is limitless, as long as I'm having fun creating sites, I will keep myself technology oriented and competetive.<br/>
                  KEEP LEARNING!
                  </p>

            </div>
         </div>
         <div className="row">

            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm">

				   </form>

               <div id="message-warning">Something went wrong, Try again</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>

            </div>



               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
             <h5>Amazingmardon@gmail.com</h5>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
						   <span>{phone}</span>
					   </p>

				   </div>


          
      </div>

   </section>
    );
  }
}



export default Contact;
