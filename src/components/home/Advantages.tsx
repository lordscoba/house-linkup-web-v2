import { GroupImg } from '../../assets/images';

import Card from './Card';
import { HomeIcon } from '../../assets/icons';

type Props = {};

const Advantages = (props: Props) => {
  return (
    <div className="w-full overflow-x-hidden">
      <h2 className="my-[88px] text-center xl:text-[48px] text-[34px]  font-semibold text-[#131313]">
        Advantages of HouseLinkUp
      </h2>

      <AdvantageCard />
      <LiveHappilly />
    </div>
  );
};

export default Advantages;

const AdvantageCard = () => {
  return (
    <div className="block xl:flex lg:flex md:flex flex-wrap gap-[32px] xl:px-[96px] px-[22px] justify-center  mb-[78px]">
      <Card
        bg="#F8DAC5"
        body="No longer have to negotiate commissions as haggle with other agents"
        header="Property Insurance"
        icon={HomeIcon}
      />
      <Card
        bg="#D2F7C6"
        body="No longer have to negotiate commissions as haggle with other agents"
        header="Lowest Commission"
        icon={HomeIcon}
      />
      <Card
        bg="#D2F7C6"
        body="No longer have to negotiate commissions as haggle with other agents"
        header="Tag Advantage"
        icon={HomeIcon}
      />
    </div>
  );
};

const LiveHappilly = () => {
  //pt-[112px] pb-[175px]
  return (
    <section className="bg-[#F5FFFB]  py-[40px] xl:py-0  px-[32px] xl:pl-[96px] block xl:flex lg:flex md:flex  xl:gap-[223px] gap-4  items-center">
      <div className="w-full text-center md:text-left">
        <h4 className="w-full text-[38px] tracking-wider ">
          Live Happily, <br />
          HouseLinkUp helps you <br /> for Finding homes
        </h4>
        <p className="w-full my-[32px] text-[20px]">
          Properties to rent. Find rental property listed directly from private
          landlords and letting agents from all over.
        </p>

        <p className="w-full text-[20px]">
          Search house for rent. Get Results from 8 Engines Instantly.
          Information 24/7. Web, Images & Videos. Trusted by Billions.
        </p>
        <div className="mt-[32px] ml-auto">
          <button className="w-[152px] border border-[#131313] rounded-[6px] py-2">
            Explore More
          </button>
        </div>
      </div>

      <div className=" xl:w-[50%] w-full max-w-[512px]  mt-[49px] mb-4">
        {/* <img src={GroupImg} alt="group image" width={512} height={683} /> */}
        <img className="object-cover" src={GroupImg} alt="" />
      </div>
    </section>
  );
};
