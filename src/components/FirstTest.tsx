interface Props {
  title?: string;
  name: string;
}

const FirstTest = (props: Props) => {
  const { title, name } = props;

  return (
    <div>
      <h1>
        Hello {title} {name}
      </h1>
    </div>
  );
};

export default FirstTest;
