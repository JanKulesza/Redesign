interface Props {
  color: string;
  percentage: number;
}

const ProgressBar = ({ color, percentage }: Props) => {
  return (
    <div className="rounded w-full bg-secondary h-2 ">
      <div
        className={` h-full rounded`}
        style={{
          width: `${percentage}%`,
          backgroundColor: color,
        }}
      />
    </div>
  );
};

export default ProgressBar;
