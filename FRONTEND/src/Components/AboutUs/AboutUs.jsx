//FRONTEND\src\Components\AboutUs\AboutUs.jsx
import React, { useEffect } from 'react';
import './AboutUs.css';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS functionality

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="about-us">
      <div className="about-us__banner" data-aos="fade-up">
        <h1>About Us</h1>
        <p>Explore to CHANGE</p>
      </div>

      <div className="about-us__content">
        <section className="about-us__section" data-aos="fade-right">
          <h2>Our Story</h2>
          <p>
            Established in 2024, Overlays Clothing P Ltd is a lifestyle brand
            focused on providing premium, stylish, and sustainable apparel for
            people who want to make a statement. What started as a small idea
            has grown into a vibrant company that combines quality craftsmanship
            with innovative designs.
          </p>
          <p>
            Our goal has always been to create clothing that is not just fashion-forward,
            but also timeless. We believe in making products that empower individuals to 
            express themselves confidently, while also maintaining a sustainable approach.
          </p>
        </section>

        <section className="about-us__section reverse-layout" data-aos="fade-left">
          <div className="image-with-text__wrapper">
            <div className="image-with-text__image-wrapper">
              <img
                src="//overlaysnow.com/cdn/shop/files/abuts.png?v=1689912962&amp;width=1400"
                alt="Overlays Clothing"
                className="image-with-text__image"
              />
            </div>

            <div className="image-with-text__content-wrapper">
              <h3 className="heading h3">Be The CHANGE</h3>
              <div className="image-with-text__text-wrapper">
                <p>
                  Overlays is all about bringing a CHANGE - a positive change -
                  into people's lives. Overlays started with the intention of
                  reaching out to the creative youth that is striving towards
                  bringing a change in the world. To empower these creative
                  people, Overlays believes in making something that proves to
                  be an add-on to their creativity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-us__section" data-aos="fade-right">
          <div className="image-with-text__wrapper">
            <div className="image-with-text__image-wrapper">
              <img
                src="//overlaysnow.com/cdn/shop/files/new_last_image.jpg?v=1668596279&amp;width=600"
                alt="Our Values"
                className="image-with-text__image"
              />
            </div>

            <div className="image-with-text__content-wrapper">
              <h3 className="heading h3">What Do We Stand For</h3>
              <div className="image-with-text__text-wrapper">
                <p>
                  To us, quality is something that cannot be compromised. We
                  focus on refining the small details like the fabric's fitting
                  and quality to increase their functionality in everyday life.
                  We believe in making something unique that gives fashion vibes
                  and promises maximum comfort.
                </p>
              </div>
            </div>
          </div>
        </section>  

        <div className="about-us__footer" data-aos="fade-up">
          <h2>Join Us on This Journey</h2>
          <p>
            Whether you’re looking for something bold, elegant, or casual,
            Overlays Clothing has something for everyone. Let’s make a change
            together, one stylish piece at a time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
