import SectionTitle from "../SectionTitle";
import AwardItem from "./AwardItem";

import { DataProps } from "@/types";

const Award = ({ award }: Pick<DataProps, "award">) => {
  return (
    <div>
      <SectionTitle>Award</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...award]
          .reverse()
          .map((aw) => (
            <AwardItem key={aw.id} {...aw} />
        ))}
      </div>
    </div>
  );
};

export default Award;
