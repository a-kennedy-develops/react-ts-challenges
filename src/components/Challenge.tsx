type ChallengeProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

const Challenge = ({ title, description, children }: ChallengeProps) => {
  return (
    <div className="flex flex-col items-center mb-7">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <p className="mb-4">{description}</p>
      {children}
    </div>
  );
};

export default Challenge;
