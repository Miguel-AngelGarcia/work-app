import React from 'react';
import FormMenu from './FormMenu';
import ScheduleTable from './ScheduleTable';

const ProjectForm = () => {
  return (
    <div className="form-group flex flex-col">
      <div className="form-group-content flex flex-col">
        <div className="form-group-container flex flex-col p-6">
          <div>
            <h1 className="title">Project Name</h1>
          </div>
          <FormMenu />
          <div className="schedule-container">
            <ScheduleTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectForm;
