type ChallengeProps = {
  title: string;
  description: string | string[];
  children: React.ReactNode;
};

const Challenge = ({ title, description, children }: ChallengeProps) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      {Array.isArray(description) ? (
        <ul className="mb-4 list-disc">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="mb-4">{description}</p>
      )}
      {children}
    </div>
  );
};

export default Challenge;
