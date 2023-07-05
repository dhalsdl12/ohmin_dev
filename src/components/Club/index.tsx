import SectionTitle from "../SectionTitle";
import ClubItem from "./ClubItem";

import { DataProps } from "@/types";

const Club = ({ club }: Pick<DataProps, "club">) => {
  return (
    <div>
      <SectionTitle>University Club</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...club].reverse().map((club) => (
          <ClubItem key={club.id} {...club} />
        ))}
      </div>
    </div>
  );
};

export default Club;
