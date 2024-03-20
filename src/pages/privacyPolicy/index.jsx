import React from 'react'
import StaticBanner from 'components/staticBanner'
import CurrentSeries from 'components/currentSeries'
import AdsComp from 'components/ads'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <>
      <StaticBanner text={'privacy policy'}/>
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="staticBox">
                <div className="title">Privacy Policy</div>
                <div className="text">This Privacy Policy governs the manner in which <Link className='textLink' target='_blank' to={'http://www.cricgram.com'}>http://www.cricgram.com</Link> collects, uses, maintains and discloses information collected from users (each, a User) of the <Link className='textLink' target='_blank' to={'http://www.cricgram.com'}>http://www.cricgram.com</Link>website (Site). This privacy policy applies to the Site, all products and services offered by <Link className='textLink' target='_blank' to={'http://www.cricgram.com'}>http://www.cricgram.com</Link>.</div>
                <div className="subTitle">Personal Identification Information</div>
                <div className="text">We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address. Users may, however, visit our Site anonymously. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</div>
                <div className="subTitle">Non-personal Identification Information</div>
                <div className="text">We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providersutilized and other similar information.</div>
                <div className="subTitle">Web Browser Cookies</div>
                <div className="text">Our Site may use “cookies” to enhance User experience. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. User may choose to set their web browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts of the Site may not function properly.</div>
                <div className="subTitle">How We Use Collected Informations?</div>
                <div className="text">
                  <Link className='textLink' target='_blank' to={'http://www.cricgram.com'}>http://www.cricgram.com</Link> collects and uses Users personal information for the following purposes:
                    <ul className='m-0 p-0 list-unstyled textUl'>
                      <li>
                        <span>To improve our Site</span>
                        We continuously strive to improve our website offerings based on the information and feedback we receive from you.
                      </li>
                      <li>
                        <span>To improve customer service</span>
                        Your information helps us to more effectively respond to your customer service requests and support needs.
                      </li>
                    </ul>
                </div>
                <div className="subTitle">How We Protect Your Information?</div>
                <div className="text">We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site.</div>
                <div className="text">Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures. Our Site is also in compliance with PCI vulnerability standards in order to create as secure of an environment as possible for Users.</div>
                <div className="subTitle">Sharing Your Personal Information</div>
                <div className="text">We do not sell, trade, or rent Users personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates and advertisers for the purposes outlined above.</div>
                <div className="subTitle">Compliance With Children’s Online Privacy Protection Act</div>
                <div className="text">Protecting the privacy of the very young is especially important. For that reason, we never collect or maintain information at our Site from those we actually know are under 13, and no part of our website is structured to attract anyone under 13.</div>
                <div className="subTitle">Changes To This Privacy Policy</div>
                <div className="text"><Link className='textLink' target='_blank' to={'http://www.cricgram.com'}>http://www.cricgram.com</Link>has the discretion to update this privacy policy at any time. When we do, we will post a notification on the main page of our Site. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect. You acknowledge and agree that it is your responsibility to review this privacy policy periodically and become aware of modifications.</div>
                <div className="subTitle">Your Acceptance Of These Terms</div>
                <div className="text">By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</div>
                <div className="subTitle">Your Consent</div>
                <div className="text">By using our site, you consent to our privacy policy.</div>
                <div className="subTitle">Contacting Us</div>
                <div className="text">If you have any questions regarding this privacy policy, the practices of this website or your dealings with this website, you can contact with us at <Link className='textLink' to={'mailto:cricgram@gmail.com'}>cricgram@gmail.com</Link>
                <Link className='textLink d-block mt-3' target='_blank' to={'http://www.cricgram.com'}>http://www.cricgram.com</Link>
                Jaipur, India
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <CurrentSeries />
              <AdsComp/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy