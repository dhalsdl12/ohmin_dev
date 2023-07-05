const ActivityItem = ({
  name,
  period,
  description,
  stack,
}: {
  name: string;
  period: string[];
  description: string;
  stack: string[];
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-0">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h3>{name}</h3>
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
        <span className="whitespace-pre-wrap">{`${description}`}</span>
      </div>
    </div>
  );
};

export default ActivityItem;
