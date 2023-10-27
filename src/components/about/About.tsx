import React from 'react';

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-[#e0e2e2] py-4">
      <div className="w-full md:w-[1100px] max-w-[1100px] px-2 m-auto ">
        <article>
          <h2 className="font-bold capitalize text-[1.1rem] md:text-[1.25rem] py-6">
            About House Linkup
          </h2>
          <p className="text-[1rem]">
            Welcome to House Linkup, your premier destination for all things
            related to renting and buying homes. We understand that finding the
            perfect place to call home is one of life&apos;s most significant
            decisions. That&apos;s why we've created House Linkup, a platform
            designed to simplify and enhance your house-hunting journey.
          </p>
        </article>
        <article>
          <h2 className="font-bold capitalize text-[1.1rem] md:text-[1.25rem] my-6">
            Our Story
          </h2>
          <p className="text-[1rem]">
            House Linkup was born out of a shared passion for real estate and
            technology. Our founders, a group of real estate professionals and
            tech enthusiasts, saw an opportunity to transform the way people
            search for, rent, and purchase properties. They envisioned a
            platform that could streamline the process, making it efficient and
            enjoyable for both buyers and renters.
          </p>
        </article>
        <article>
          <h2 className="font-bold capitalize text-[1.1rem] md:text-[1.25rem] my-6">
            Our Mission
          </h2>
          <p className="text-[1rem]">
            At House Linkup, our mission is clear: to empower individuals and
            families to find their dream homes effortlessly. We believe that
            everyone deserves a comfortable and safe space to live, and we are
            committed to helping you discover the perfect property that suits
            your needs, lifestyle, and budget.
          </p>
        </article>
        <article>
          <h2 className="font-bold capitalize text-[1.1rem] md:text-[1.25rem] my-6">
            Why Choose House Linkup?
          </h2>
          <ul>
            <li className="mb-2">
              <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                Extensive Property Listings:
              </span>{' '}
              We offer an extensive and diverse range of property listings,
              including apartments, houses, condominiums, and more. Whether
              you're searching for a cozy studio apartment or a spacious family
              home, you'll find it in our listings.
            </li>
            <li className="mb-2">
              <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                User-Friendly Platform:
              </span>{' '}
              Our website is designed with you in mind. It's intuitive, easy to
              navigate, and packed with features to simplify your property
              search. You can search by location, property type, price range,
              and other filters to pinpoint the ideal options.
            </li>
            <li className="mb-2">
              <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                Detailed Property Information:
              </span>{' '}
              We provide comprehensive property details, including high-quality
              images, floor plans, pricing, and descriptions. You'll have all
              the information you need to make an informed decision
            </li>
            <li className="mb-2">
              <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                Expert Advice:
              </span>{' '}
              Our team of real estate experts is here to offer advice, answer
              your questions, and guide you through the process. We believe that
              informed decisions lead to satisfied homeowners and tenants.
            </li>
            <li className="mb-2">
              <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                Secure Transactions:
              </span>{' '}
              We take security seriously. Our platform employs encryption and
              secure payment methods to protect your financial transactions.
            </li>
            <li className="mb-2">
              <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                Feedback and Reviews:
              </span>{' '}
              Read reviews and feedback from other users who have rented or
              purchased properties through House Linkup. Their experiences can
              help you make informed choices.
            </li>
            <li className="mb-2">
              <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                Sellers and Landlords:
              </span>{' '}
              If you're a property owner looking to sell or rent your property,
              House Linkup provides a platform to showcase your property to a
              broad audience of potential buyers or tenants
            </li>
            <li className="mb-2">
              <span className="font-medium capitalize text-[1rem] md:text-[1.125rem]">
                Constant Innovation:
              </span>{' '}
              We're committed to continuous improvement. We stay up to date with
              the latest trends in real estate and technology to provide you
              with the best possible experience.
            </li>
          </ul>
        </article>
        <article>
          <h2 className="font-bold capitalize text-[1.1rem] md:text-[1.25rem] my-6">
            Join House Linkup Today
          </h2>
          <p className="mb-3 text-[1rem]">
            Whether you&apos;re a first-time homebuyer, a growing family in need
            of more space, a young professional looking for the perfect rental,
            or an investor seeking lucrative opportunities, House Linkup is your
            one-stop destination.
          </p>
          <p className="text-[1rem]">
            We're excited to accompany you on your journey to find your next
            home. Start browsing our listings, create an account, and take
            advantage of all the tools and resources we offer to make your
            house-hunting experience enjoyable and rewarding. House Linkup is
            where your homeownership dreams become a reality.
          </p>

          <p className="my-6">
            Thank you for choosing House Linkup, where your future home is just
            a click away.
          </p>
        </article>
      </div>
    </div>
  );
};

export default About;
