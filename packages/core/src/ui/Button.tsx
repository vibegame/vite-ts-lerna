type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-slate-600 rounded-lg px-2 py-2 text-sm hover:bg-slate-700 transition-colors"
    >
      {children}
    </button>
  );
}
