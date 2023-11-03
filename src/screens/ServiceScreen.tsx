import React from 'react';
import { Footer, Nav } from '../components/layout';
import { Link } from 'react-router-dom';

type Props = {};

const ServiceScreen = (props: Props) => {
  return (
    <div>
      <Nav />
      <Services />
      <Footer />
    </div>
  );
};

export default ServiceScreen;

const Services = () => {
  return (
    <div className="bg-[#e0e2e2] py-4">
      <div className="w-full md:w-[1100px] max-w-[1100px] px-2 m-auto ">
        <h2 className="font-bold  text-[1.1rem] md:text-[1.25rem] py-6 text-center uppercase">
          Services
        </h2>
        <section>
          <p>
            House Linkup is dedicated to simplifying and enhancing the process
            of finding or listing houses for rent and sale. Our mission is to
            connect property owners, buyers, and renters seamlessly while
            providing a secure and user-friendly platform. Whether you're
            searching for the perfect home, planning to sell your property, or
            looking to invest in real estate, House Linkup is here to make your
            housing journey hassle-free.
          </p>

          <article>
            <h2 className="font-bold capitalize text-[1.1rem] md:text-[1.25rem] my-6">
              How House Linkup Helps Users:
            </h2>
            <ul>
              <li className="mb-2">
                <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                  Efficient House Hunting:
                </span>{' '}
                We provide users with an extensive database of property
                listings, making it easy to discover houses that match their
                specific requirements. Our advanced search and filtering options
                help you find the perfect property swiftly.
              </li>
              <li className="mb-2">
                <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                  Streamlined Property Listing:
                </span>{' '}
                For property owners, House Linkup offers a user-friendly
                platform to list houses for rent or sale. You can showcase your
                property with detailed descriptions and images, increasing your
                chances of finding the right buyer or tenant.
              </li>
              <li className="mb-2">
                <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                  User-Focused Experience:
                </span>{' '}
                We prioritize user experience, making our platform intuitive and
                easy to navigate. You don't need to be a tech expert to use
                House Linkup. Our goal is to ensure your experience is smooth
                and enjoyable.
              </li>
              <li className="mb-2">
                <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                  Safety and Security:
                </span>{' '}
                Your security matters to us. We've implemented robust safety
                measures to protect both buyers and sellers. Our trusted
                environment fosters secure transactions and communications.
              </li>
              <li className="mb-2">
                <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                  Customer Support:
                </span>{' '}
                House Linkup is committed to assisting users at every step. Our
                dedicated customer support team is available to address your
                inquiries and provide guidance.
              </li>
              <li className="mb-2">
                <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                  Time and Cost Savings:
                </span>{' '}
                Our platform saves you time and effort in the housing search or
                listing process. No more sifting through countless listings or
                spending excessive amounts on listing fees.
              </li>
            </ul>
            <p className="py-6">
              At House Linkup, we're more than a real estate platform; we're
              your housing partner. We aim to simplify your housing journey,
              provide access to a wide range of property options, and ensure a
              safe and efficient experience for all our users. Join House Linkup
              and let us help you find the perfect place to call home or connect
              with the right buyer or tenant for your property. Your housing
              needs are our priority
            </p>
          </article>
          <article>
            <h2 className="font-bold capitalize text-[1.1rem] md:text-[1.25rem] my-6">
              Key Services
            </h2>
            <section className="px-3">
              <div className="flex gap-2 items-start">
                <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
                <p className="w-[90%]">
                  {' '}
                  <span className="font-normal capitalize text-[1rem] md:text-[1.125rem]">
                    House Listing Services:
                  </span>{' '}
                  Allow users to list their houses for rent or sale.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
                <p className="w-[90%]">
                  {' '}
                  <span className="font-normal capitalize text-[1rem] md:text-[1.125rem]">
                    Property Search:
                  </span>{' '}
                  Provide advanced search features for users to find the perfect
                  property.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
                <p className="w-[90%]">
                  {' '}
                  <span className="font-normal capitalize text-[1rem] md:text-[1.125rem]">
                    User Accounts:
                  </span>{' '}
                  Offer user registration and profile management.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
                <p className="w-[90%]">
                  {' '}
                  <span className="font-normal capitalize text-[1rem] md:text-[1.125rem]">
                    Messaging:
                  </span>{' '}
                  Enable communication between property owners and potential
                  buyers/renters.
                </p>
              </div>
              <div className="flex gap-2 items-start">
                <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
                <p className="w-[90%]">
                  {' '}
                  <span className="font-normal capitalize text-[1rem] md:text-[1.125rem]">
                    Property Details:
                  </span>{' '}
                  Showcase detailed property information, including images and
                  descriptions.
                </p>
              </div>
            </section>
          </article>

          {/* CALL TO ACTION */}
          <article className="mt-10 px-3">
            <div className="flex gap-2 items-start">
              <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
              <p className="w-[90%]">
                {' '}
                <span className="font-medium capitalize text-[1rem]  my-6">
                  Create an Account:
                </span>{' '}
                Ready to find your dream home or list your property? Create a
                free account today to get started!{' '}
                <Link to={'/sign-up'} className="text-[#3fa13f] border-b">
                  register
                </Link>
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
              <p className="w-[90%]">
                {' '}
                <span className="font-medium capitalize text-[1rem]  my-6">
                  Explore Listings:
                </span>{' '}
                Discover a wide range of properties for rent and sale. Start
                exploring now!{' '}
                <Link to={'/property'} className="text-[#3fa13f] border-b">
                  Explore now
                </Link>
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
              <p className="w-[90%]">
                {' '}
                <span className="font-medium capitalize text-[1rem]  my-6">
                  List Your Property:
                </span>{' '}
                Have a property to sell or rent? List it with us and reach
                thousands of potential buyers or tenants.{' '}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
              <p className="w-[90%]">
                {' '}
                <span className="font-medium capitalize text-[1rem]  my-6">
                  24/7 Support:
                </span>{' '}
                Questions or need assistance? Our support team is available 24/7
                to help you.{' '}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
              <p className="w-[90%]">
                {' '}
                <span className="font-medium capitalize text-[1rem]  my-6">
                  Save Time and Money:
                </span>{' '}
                Save time and money by using House Linkup for your housing
                needs. It's fast, easy, and cost-effective.{' '}
              </p>
            </div>
            <div className="flex gap-2 items-start">
              <p className="w-2 h-2 rounded-full bg-[#222] mt-2"></p>
              <p className="w-[90%]">
                {' '}
                <span className="font-medium capitalize text-[1rem]  my-6">
                  Start Your Journey:
                </span>{' '}
                Begin your housing journey with House Linkup today. Your perfect
                property or buyer is just a click away.{' '}
                <Link to={'/sign-up'} className="text-[#3fa13f] border-b">
                  Join Us
                </Link>
              </p>
            </div>
            <p className="my-6">
              At House Linkup, we're here to make your real estate experience
              smooth and rewarding. Take that first step toward your housing
              goals by signing up or listing your property with us. Your dream
              home or ideal buyer is closer than you think!
            </p>
          </article>
        </section>
      </div>
    </div>
  );
};
