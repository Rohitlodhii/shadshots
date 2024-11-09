import React from 'react';

type ComponentPreviewerProps = {
  component: React.ElementType;
};

const ComponentPreviewer: React.FC<ComponentPreviewerProps> = ({ component: Component }) => {
  return (
    <div className="flex justify-center items-center h-[50vh] bg-gray-100 dark:bg-neutral-950">
     
        <Component />
      
    </div>
  );
};

export default ComponentPreviewer;
