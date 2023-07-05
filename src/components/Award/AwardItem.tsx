import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { AwardProps } from "@/types";
import { TextDecoder } from "util";

const AwardItem = ({  id, name, date, organizer, 
                      markdown,description, stack
                    }: AwardProps) => {
  // return (
  //   <div className="flex flex-col md:flex-row gap-6 md:gap-0">
  //     <div className="flex flex-col gap-2">
  //       <div className="flex flex-col">
  //         <h3>{name}</h3>
  //         <span>{date}</span>
  //       </div>
  //       <span>{organizer}</span>
  //       {/* <span className="whitespace-pre-wrap">{`${description}`}</span> */}
  //       <span className="whitespace-pre-wrap">{`${description[0]}${description[1] ? "\n" + description[1] : ""}`}</span>
  //     </div>
  //   </div>
  // );
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
        {`/images/award/${id}.png` && (
          <Image
            src={`/images/award/${id}.png`} // imgSrc 변수를 사용하여 경로 동적 생성
            alt="test"
            width="200"
            height="200"
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-50 h-50"
          
          />
        )}
        {/*
        <div className="w-48">
          <h3>{name}</h3>
          <div className="flex flex-col">
            <span className="m-0">{organizer}</span>
            <span>{date}</span>
          </div>
        </div>
        */}
      </div>
      <div className="md:border-GRAY_LIGHT md:border-solid md:border-l-[1px] md:pl-4 markdown w-full">
        <div className="w-48">
          <h3>{name}</h3>
          <div className="flex flex-col">
            <span className="m-0">{organizer}</span>
            <span>{date}</span>
          </div>
        </div>
        <div className="flex gap-1 flex-wrap">
          {stack.map((stack) => (
            <span
              key={stack}
              className=" bg-BLACK dark:bg-white  py-[2px] px-1.5 rounded-md text-xs font-medium font-mono whitespace-nowrap text-white dark:text-BLACK"
            >
              {stack}
            </span>
          ))}
        </div>
        <span className="whitespace-pre-wrap">
          {`${description[0]}\n`}
          <a href={description[1]}>LINK</a>
        </span>
        {/*{`${description[0]}${description[1] ? "\n" + description[1] : ""}`}*/}
      </div>
    </div>
  );
};

export default AwardItem;
