import { Link, useLocation } from 'react-router-dom';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Logo,
  Twitter,
} from '../../assets/icons';

type Props = {};

const Footer = (props: Props) => {
  const { pathname } = useLocation();
  const domain = pathname.split('/')[1];
  console.log(domain);
  return (
    <>
      {pathname === '/sign-up' || pathname === '/login' ? (
        ''
      ) : (
        <div
          className={`${
            domain === 'admin' ? 'md:pl-[5.8rem]' : ''
          } w-full grid grid-cols-3 md:grid-cols-5 gap-5  md:gap-4 md:justify-items-stretch p-5 md:p-8`}
        >
          <FisrtSection />
          <Resources />
          <Legal />
          <Links />
        </div>
      )}
    </>
  );
};

export default Footer;

const FisrtSection = () => {
  return (
    <div className="w-full text-start col-span-full md:col-span-2">
      <div className="flex flex-wrap gap-2 items-center mb-[8px]">
        <img src={Logo} alt="" />
        <h2 className="text-[#4BA586] text-[18px] font-semibold">
          HouseLinkUp
        </h2>
      </div>
      <article className="">
        <p className="text-[18px] text-[#191919] mb-[24px] w-[295px]">
          Properties to rent. Find rental property listed directly from private
          landlords and letting agents from all over.
        </p>
      </article>

      <section className="flex flex-wrap gap-2">
        <a href="#">
          <img
            src={Facebook}
            alt="facebook icon"
            className="w-7 rounded-full p-1 border border-[#222]"
          />
        </a>
        <a href="#">
          <img
            src={LinkedIn}
            alt="facebook icon"
            className="w-7 rounded-full p-1 border border-[#222]"
          />
        </a>
        <a href="#">
          <img
            src={Instagram}
            alt="facebook icon"
            className="w-7 rounded-full p-1 border border-[#222]"
          />
        </a>
        <a href="#">
          <img
            src={Twitter}
            alt="facebook icon"
            className="w-7 rounded-full p-1 border border-[#222]"
          />
        </a>
      </section>
    </div>
  );
};

const Resources = () => {
  return (
    <div className="text-left w-[151px]">
      <h2 className="text-[#191919] text-[20px] font-semibold mb-[24px]">
        Resources
      </h2>
      <article className="flex flex-col gap-2 text-[18px]">
        <Link to={'#'}>Feature</Link>
        <Link to={'#'}>Pricing</Link>
        <Link to={'#'}>Log in</Link>
        <Link to={'#'}>Sign up</Link>
      </article>
    </div>
  );
};

const Legal = () => {
  return (
    <div className="w-[115px]">
      <h2 className="text-[#191919] text-[20px] font-semibold mb-[24px] ">
        Legal
      </h2>
      <article className="flex flex-col gap-2 text-[18px]">
        <Link to={'#'}>Terms of use</Link>
        <Link to={'#'}>Privacy policy</Link>
        <Link to={'#'}>Legal notice</Link>
      </article>
    </div>
  );
};

const Links = () => {
  return (
    <div className="w-[80px]">
      <h2 className="text-[#191919] text-[20px] font-semibold mb-[24px]">
        Links
      </h2>
      <article className="flex flex-col gap-2 text-[18px]">
        <Link to={'#'}>Feedback</Link>
        <Link to={'#'}>Agents</Link>
        <Link to={'#'}>About us</Link>
      </article>
    </div>
  );
};
