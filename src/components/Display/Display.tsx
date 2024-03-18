import "./style.scss";

export interface DisplayProps {
  label: string;
}

const Display = ({ label }: DisplayProps) => {
  return (
    <div id="display">
      <div className="display">
        <div className="label">
          {label.length > 8 ? label.slice(0, 8) : label}
        </div>
      </div>
    </div>
  );
};

export default Display;
