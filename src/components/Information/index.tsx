import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import Image from "next/image";

import { DataProps } from "@/types";


const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex gap-4">
          <img
            src="/images/information/introduce.jpg" 
            alt="test" 
            width="150" height="150"
          />
          <div className="grid grid-rows-auto gap-2">
            <h1 className="leading-[1.15]">
              안녕하세요,<br/> 
              백엔드 개발자{" "}<span className="text-PRIMARY font-semibold">{information.name}</span>입니다.
            </h1>
            <div className="flex gap-1">
              {information.contact.map((contact) => (
                <ContactItem
                  key={contact.id}
                  className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                  {...contact}
                >
                  {contact.name}
                </ContactItem>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
