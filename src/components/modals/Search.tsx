import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Input from "../UI/input";

const Search = () => {
  const inputSearch = [
    {
      label: "Search",
      placeholder: "Search",
      name: "Search",
      type: "text",
      require: false,
    },
  ];
  return (
    <div className="w-[630.16px] h-[60px] relative">
      <div className=" w-full h-full rounded-[999px] bg-white border border-[#588e9f]">
        {inputSearch.map((item, index) => (
          <div className="float-label-input absolute w-[540px] align-middle left-9 ">
            <Input
              key={index}
              label={item.label}
              type={item.type}
              require={item.require}
              name={""}
              placeholder={item.placeholder}
            />
          </div>
        ))}
        <button
        //   type="buttonSearch"
        // onClick={}
        >
          <FontAwesomeIcon
            className="cursor-pointer absolute text-[20.8359375px] right-6 top-5  text-[#03354c]"
            icon={faSearch}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};
export default Search;
