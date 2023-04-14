import React from 'react'
import './Blogs.css'
import SectionTitle from '../lib/SectionTitle/SectionTitle'
import { Link } from "react-router-dom";


const Blogs = () => {
  return (
      <div className='blog-wrapper'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
                <div className="sec-title">
                    <SectionTitle subtitle='Our Blogs' title='Latest & greatest' bigText='Our Blogs'/>
                </div>
            </div>
          </div>
          <div className="row mt-65">
              <div className="col-lg-5">
                  <div className="blogs">
                      <div className="blog-img">
                          <img src={require(`../../assets/blog-1.png`)} alt="blog" />
                      </div>
                      <div className="blog-meta">
                          <span>eyecare</span>
                          <p>October 30, 2022</p>
                      </div>
                      <div className="blog-content">
                        <Link to='blog-details'>
                          <h5>Why is dry eyes are so difficult to treat?</h5>
                        </Link>
                        <p>Highly at nisi nam vestibulum ut eget vitae sed. Potenti aliquam feugiat proin facilisi. ac nunc always made uniquely calibrated. Highly at nisi nam vestibulum ut eget vitae sed. Potenti aliquam feugiat proin facilisi.</p>
                      </div>
                  </div>
              </div>
              <div className="col-lg-7">
                <div className="row bg-blog">
                    <div className="col-lg-5 no-gutter">
                      <div className="blog-small-img">
                          <img src={require(`../../assets/blog-2.png`)} alt="blog" />
                      </div>
                    </div>
                    <div className="col-lg-7 flex-top-center">
                    <div className="blog-content blog-small">
                        <div className="blog-meta">
                            <span>eyecare</span>
                            <p>October 30, 2022</p>
                        </div>
                        <Link to='blog-details'>
                          <h5>Why is dry eyes are so difficult to treat?</h5>
                        </Link>
                        <p>Highly at nisi nam vestibulum ut eget vitae sed. Potenti aliquam feugiat proin facilisi.</p>
                      </div>
                    </div>
                </div>


                <div className="row bg-blog mt-30">
                    <div className="col-lg-5 no-gutter">
                      <div className="blog-small-img">
                          <img src={require(`../../assets/blog-2.png`)} alt="blog" />
                      </div>
                    </div>
                    <div className="col-lg-7 flex-top-center">
                    <div className="blog-content blog-small">
                        <div className="blog-meta">
                            <span>eyecare</span>
                            <p>October 30, 2022</p>
                        </div>
                        <Link to='blog-details'>
                          <h5>Why is dry eyes are so difficult to treat?</h5>
                        </Link>
                        <p>Highly at nisi nam vestibulum ut eget vitae sed. Potenti aliquam feugiat proin facilisi.</p>
                      </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </div>
  )
}

export default Blogs
