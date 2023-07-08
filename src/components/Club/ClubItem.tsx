const ClubItem = ({
  name,
  period,
  description,
  stack,
  view,
}: {
  name: string;
  period: string[];
  description: string[];
  stack: string[];
  view: string;
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <h3>{name}</h3>
        <div className="flex flex-col">
          <span>{`${period[0]}${period[1] ? " - " + period[1] : ""}`}</span>
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
          <div className="whitespace-pre-wrap">
          {description.map((desc, index) => (
            <li key={index}>
              {desc}
              {index !== description.length - 1 ? "\n" : ""}
            </li>
          ))}
        </div>
        <span className="whitespace-pre-wrap">
          <a href={view}>{`${view? "\nVIEW CLUB": ""}`}</a>
        </span>
        {/*{`${description[0]}${description[1] ? "\n" + description[1] : ""}`}*/}
      </div>
    </div>
  );
};

export default ClubItem;
