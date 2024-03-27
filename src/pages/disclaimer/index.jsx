import React from 'react'
import StaticBanner from 'components/staticBanner'
import CurrentSeries from 'components/currentSeries'
import AdsComp from 'components/ads'
import { Link } from 'react-router-dom'

const Disclaimer = () => {
  return (
    <>
      <StaticBanner text={'Disclaimer'}/>
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="staticBox">
                <div className="title">Disclaimer</div>
                <div className="subTitle">Disclaimer for Cricgram</div>
                <div className="text">If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at cricgram@gmail.com</div>
                <div className="subTitle">Disclaimers for www.cricgram.com</div>
                <div className="text">All the information on this website is published in good faith and for general information purpose only. http://www.cricgram.com does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website (http://www.cricgram.com), is strictly at your own risk. http://www.cricgram.com will not be liable for any losses and/or damages in connection with the use of our website.</div>
                <div className="text">From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.</div>
                <div className="text">Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their “Terms of Service” before engaging in any business or uploading any information.</div>
                <div className="subTitle">Consent</div>
                <div className="text">By using our website, you hereby consent to our disclaimer and agree to its terms.</div>
                <div className="subTitle">Update</div>
                <div className="text">Should we update, amend or make any changes to this document, those changes will be prominently posted here.</div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mt-4 mt-lg-0">
              <CurrentSeries />
              {/* <AdsComp/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Disclaimer