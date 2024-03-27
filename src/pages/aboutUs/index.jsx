import React from 'react'
import StaticBanner from 'components/staticBanner'
import CurrentSeries from 'components/currentSeries'
import AdsComp from 'components/ads'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
      <StaticBanner text={'About Us'}/>
      <div className="container-fluid mt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-xl-9">
              <div className="staticBox">
                <div className="title">About Us</div>
                <div className="text">At CricGram, we're passionate about cricket just as much as you are. Whether you're a die-hard fan, a casual follower, or a player yourself, we're here to enhance your cricket experience.</div>
                <div className="text">Our mission is simple: to provide cricket enthusiasts with a comprehensive platform where they can immerse themselves in the world of cricket, from match updates to in-depth analysis, from historical moments to future predictions.</div>
                <div className="subTitle mb-3">Why Choose CricGram?</div>
                <div className="subTitle">Real-Time Updates: </div>
                <div className="text">Stay on top of every match with our real-time score updates, ensuring you never miss a moment of the action, whether it's a thrilling boundary or a crucial wicket.</div>
                <div className="subTitle">Comprehensive Coverage</div>
                <div className="text">From international tournaments to domestic leagues, we cover cricket from all corners of the globe, bringing you the latest news, scores, and insights.</div>
                <div className="subTitle">Expert Analysis</div>
                <div className="text">Our team of cricket experts brings you insightful analysis, pre-match predictions, post-match reviews, and everything in between, helping you understand the game on a deeper level.</div>
                <div className="subTitle">Interactive Community</div>
                <div className="text">Connect with fellow cricket enthusiasts through our vibrant community forums, where you can discuss matches, share opinions, and engage in friendly banter.</div>
                <div className="subTitle">Personalized Experience</div>
                <div className="text">Tailor your CricGram experience to your preferences, whether it's setting up favorite teams, players, or receiving notifications for specific matches.</div>
                <div className="subTitle">Historical Archive</div>
                <div className="text">Dive into the rich history of cricket with our extensive archive, featuring memorable matches, legendary players, and iconic moments that have shaped the game over the years.</div>
                <div className="subTitle">Mobile-Friendly</div>
                <div className="text">Access CricGram anytime, anywhere, with our user-friendly mobile app, ensuring you're always in the loop, even when you're on the go.</div>
                <div className="text">Whether you're a seasoned cricket aficionado or just starting to explore the sport, CricGram is your ultimate cricket companion. Join us today and let's celebrate the spirit of cricket together!</div>
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

export default AboutUs