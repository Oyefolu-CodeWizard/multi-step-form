type ChildrenProps = {
  type: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

function Button({ type, onClick, children }: ChildrenProps) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
