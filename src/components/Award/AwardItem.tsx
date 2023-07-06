import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { AwardProps } from "@/types";
import { TextDecoder } from "util";

const AwardItem = ({  id, name, date, organizer, 
                      markdown,description, stack
                    }: AwardProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex md:flex-col items-center md:items-start mr-4 gap-6">
        {`/images/award/${id}.png` && (
          <Image
            src={`/images/award/${id}.png`}
            alt="test"
            width="230"
            height="230"
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-50 h-50"
          
          />
        )}
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-0">
        <div className="flex flex-col gap-2">
          <h3>{name}</h3>
          <div className="flex flex-col">
            <span className="m-0">{organizer}</span>
            <span>{date}</span>
          </div>
          <div className="flex gap-1 flex-wrap">
          {stack.map((stack) => (
            <span
              key={stack}
              className=" bg-BLACK dark:bg-white py-[2px] px-1.5 rounded-md text-xs font-medium font-mono whitespace-nowrap text-white dark:text-BLACK"
            >
              {stack}
            </span>
          ))}
        </div>
        <span className="whitespace-pre-wrap">
          {`${description[0]}\n\n`}
          <a href={description[1]}>VIEW AWARD</a>
        </span>
        </div>
        {/*{`${description[0]}${description[1] ? "\n" + description[1] : ""}`}*/}
      </div>
    </div>
  );
};

export default AwardItem;
