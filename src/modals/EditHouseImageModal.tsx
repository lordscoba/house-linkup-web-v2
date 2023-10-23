import React, { useState, useRef, useEffect } from 'react';

type Props = {
  show: boolean;
  setShow: (a: any) => void;
  _id: string;
  img_url: string;
};

const EditHouseImageModal = ({ show, setShow, _id, img_url }: Props) => {
  const [image, setImage] = useState('');
  const fileRef = useRef(null) as any;
  const handlEdit = () => {};

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files;

    if (file) {
      const imageURL = URL.createObjectURL(file[0]);
      setImage(imageURL);
    }
  };

  const handleLabelClick = () => {
    fileRef.current.click();
  };

  const NotShow = Boolean(!show);

  useEffect(() => {
    setImage('');
  }, [NotShow]);

  return (
    <>
      {show ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,.5)]  z-50 flex justify-center  py-6 px-3 md:px-0 overflow-y-auto hide-scrollbar">
          <div className="bg-[#fff] w-full md:w-[30rem] h-[350px] px-3 rounded-lg mt-8">
            <p
              onClick={() => setShow((prev: boolean) => !prev)}
              className=" flex justify-center items-center cursor-pointer ml-auto mt-2   bg-[grey] rounded-full p-1 w-[2rem] h-[2rem]"
            >
              <span className="text-[1rem] text-[#fff]">X</span>
            </p>
            <section className="flex flex-col items-center justify-center mt-4">
              <p className="py-6 text-center">
                <img
                  src={image ? image : img_url}
                  alt=""
                  className="w-[6rem] h-[6rem] rounded-full object-cover"
                />

                <div className="inline-block w-full relative cursor-pointer text-center  ">
                  <label
                    htmlFor="browse"
                    onClick={handleLabelClick}
                    className="inline-block py-[10px] px-[20px] cursor-pointer text-[#69B99D] font-[500] text-[1rem]"
                  >
                    upload
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    ref={fileRef}
                    className="hidden"
                  />
                </div>
              </p>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShow((prev: boolean) => !prev)}
                  className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                >
                  CANCEL
                </button>
                <button
                  type="button"
                  onClick={handlEdit}
                  className="bg-[#69B99D] text-[#fff] border rounded-lg py-2 w-[8rem]"
                >
                  YES
                </button>
              </div>
            </section>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default EditHouseImageModal;
