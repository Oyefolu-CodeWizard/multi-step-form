type StepProps = {
  btnNumber: number;
  stepNumber: string;
  stepTitle: string;
};

function Step({ btnNumber, stepNumber, stepTitle }: StepProps) {
  return (
    <div className="step">
      <button className="step-btn">{btnNumber}</button>
      <div>
        <p className="step-num">{stepNumber}</p>
        <h4 className="step-title">{stepTitle}</h4>
      </div>
    </div>
  );
}

export default Step;
