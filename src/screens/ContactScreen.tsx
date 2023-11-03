import React, { useState } from 'react';
import { Footer, Nav } from '../components/layout';
import FlexibleInput from '../components/home/FlexibleInput';

type Props = {};

const ContactScreen = (props: Props) => {
  return (
    <>
      <Nav />
      <div className="w-full max-w-[1400px] m-auto py-6">
        <ContactForUploader />
        <FileComplain />
      </div>
      <Footer />
    </>
  );
};

export default ContactScreen;

interface ContactForUploaderInterface {}

const ContactForUploader: React.FC<ContactForUploaderInterface> = ({}) => {
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="px-3 w-full max-w-[800px]  m-auto">
      <p className="font-bold text-[#817e7e]">
        Do you have property to rent or sell but haven&apos;t seen trusted
        website to showcase your property? Houselink is a place for you. What
        you need to do is to apply for <span> UPLOADER POSITION </span> in our
        site by filling-out the form below.
      </p>
      <h2 className="text-center font-bold text-[1.1rem] md:text-[1.2rem]">
        Apply to Become an Uploader
      </h2>
      <form className="w-full border mt-3 rounded-lg px-2 py-4">
        <div className="my-2">
          <label htmlFor="fullname" className="font-bold">
            Full Name
          </label>

          <FlexibleInput
            onChange={setFull_name}
            type="text"
            value={full_name}
            placeholder="Enter Full Name"
            className=" border w-full p-2 mt-2 "
          />
        </div>
        <div className="mb-2">
          <label htmlFor="email" className="font-bold">
            Email
          </label>

          <FlexibleInput
            onChange={setEmail}
            type="email"
            value={email}
            placeholder="Enter Email"
            className=" border w-full p-2 mt-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone_number" className="font-bold">
            Phone Number
          </label>

          <FlexibleInput
            onChange={setPhone_number}
            type="tel"
            value={phone_number}
            placeholder="Enter Phone Number"
            className=" border w-full p-2 mt-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="location" className="font-bold">
            Location
          </label>

          <FlexibleInput
            onChange={setLocation}
            type="text"
            value={location}
            placeholder="Enter Location"
            className=" border w-full p-2 mt-2"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="phone_number" className="font-bold">
            Message
          </label>

          <textarea
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
            placeholder="Reason Why You Are Applying For This Post"
            className=" border w-full p-2 mt-2 h-[8rem] overflow-y-auto"
          ></textarea>
        </div>
        <div className="w-full text-center my-6">
          <button
            type="button"
            className="border px-16 py-2 rounded-lg bg-[#46e38d] text-[#fff]"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};

interface FileComplainInterface {}

const FileComplain: React.FC<FileComplainInterface> = ({}) => {
  const [full_name, setFull_name] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');
  const [propertyId, setPropertyId] = useState('');
  const [date, setDate] = useState('');
  return (
    <div className="px-3 w-full max-w-[800px]  m-auto mt-12">
      <p className="font-bold text-[#817e7e]">
        Are You having a problem in our site or do you have bridge of contract
        with our agents.Please Fill the COMPLAINT FORM below to report the issue
        to the right personnel so that it will be handled amicably.
      </p>
      <h2 className="text-center font-bold text-[1.1rem] md:text-[1.2rem]">
        File a Complaint
      </h2>
      <form className="w-full border mt-3 rounded-lg px-2 py-4">
        <div className="my-4">
          <label htmlFor="fullname" className="font-bold">
            Full Name
          </label>

          <FlexibleInput
            onChange={setFull_name}
            type="text"
            value={full_name}
            placeholder="Enter Full Name"
            className=" border w-full p-2 mt-2 "
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="font-bold">
            Email
          </label>

          <FlexibleInput
            onChange={setEmail}
            type="email"
            value={email}
            placeholder="Enter Email"
            className=" border w-full p-2 mt-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone_number" className="font-bold">
            Phone Number
          </label>

          <FlexibleInput
            onChange={setPhone_number}
            type="tel"
            value={phone_number}
            placeholder="Enter Phone Number"
            className=" border w-full p-2 mt-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="font-bold">
            Location
          </label>

          <FlexibleInput
            onChange={setLocation}
            type="text"
            value={location}
            placeholder="Enter Location"
            className=" border w-full p-2 mt-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="id" className="font-bold">
            Property ID
          </label>

          <FlexibleInput
            onChange={setPropertyId}
            type="text"
            value={propertyId}
            placeholder="Enter Property  ID"
            className=" border w-full p-2 mt-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="font-bold">
            Date{' '}
            <span className="text-[#909090]">
              (Date The deal was carried out)
            </span>
          </label>

          <FlexibleInput
            onChange={setDate}
            type="text"
            value={date}
            placeholder="Enter Date"
            className=" border w-full p-2 mt-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone_number" className="font-bold">
            Message
          </label>

          <textarea
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
            placeholder="Explain What Happened"
            className=" border w-full p-2 mt-2 h-[8rem] overflow-y-auto"
          ></textarea>
        </div>
        <div className="w-full text-center my-6">
          <button
            type="button"
            className="border px-16 py-2 rounded-lg bg-[#46e38d] text-[#fff]"
          >
            Apply Now
          </button>
        </div>
      </form>
    </div>
  );
};
