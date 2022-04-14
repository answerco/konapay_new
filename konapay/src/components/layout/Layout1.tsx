import './Layout1.css';

interface ContainerProps {
  name: string;
}

const Layout1: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <strong>{name}</strong>
        
    </div>
  );
};

export default Layout1;
