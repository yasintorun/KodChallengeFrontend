import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Brand from '../Brand'

function MainFooter() {
    return (
        <footer>
            <div className="separator separator-skew zindex-100">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                    style={{transform: "scale(-1) translate(0px, 1px)"}}
                >
                    <polygon
                        className="fill-white"
                        points="2560 0 2560 100 0 100"
                    />
                </svg>
            </div>
            <div className='bg-dark'>
                <div className='pt-5'>
                    <section className="section pb-3 section-shaped">
                        <Container>
                            <div className='text-center'>
                                <Brand bold/>
                                <br />
                                <div className='mt-5 pt-5'>
                                    <Link to="#" className='text-white btn btn-link'>Anasayfa</Link>
                                    <Link to='#' className='text-white btn btn-link'>Blog</Link>
                                    <Link to='#' className='text-white btn btn-link'>Forum</Link>
                                    <Link to='#' className='text-white btn btn-link'>İLETİŞİM</Link>
                                </div>
                                <p className='text-warning font-weight-bold pt-5 mt-5'>
                                    &copy; 2022 Tüm Hakları Saklıdır.
                                    <Link to="/" className='text-white'>
                                        KodChallenge
                                    </Link> 
                                </p>
                            </div>
                        </Container>

                    </section>
                </div>
            </div>
        </footer>
    )
}

export default MainFooter