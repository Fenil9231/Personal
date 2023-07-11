import React, { useState, useEffect } from 'react';
import { Container, Title, Form, Label, Input, TextArea, Button, ProjectList, ProjectItem, ProjectDate, ProjectDetails, ProjectLink, ProjectStatus, DeleteButton, Select } from './AppStyles';

const App = () => {
  const [projects, setProjects] = useState(() => {
    const storedProjects = localStorage.getItem('projects');
    return storedProjects ? JSON.parse(storedProjects) : [];
  });
  const [newProject, setNewProject] = useState({
    date: '',
    details: '',
    reference: '',
    status: 'Pending'
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewProject({ ...newProject, [name]: value });
  };

  const handleAddProject = () => {
    if (editIndex !== null) {
    
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = newProject;
      setProjects(updatedProjects);
      setEditIndex(null);
    } else {
  
      if (newProject.date && newProject.details && newProject.reference) {
        setProjects([...projects, newProject]);
      }
    }
    setNewProject({ date: '', details: '', reference: '', status: 'Pending' });
  };

  const handleEditProject = (index) => {
    const projectToEdit = projects[index];
    setNewProject(projectToEdit);
    setEditIndex(index);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  const handleStatusChange = (index, status) => {
    const updatedProjects = [...projects];
    updatedProjects[index].status = status;
    setProjects(updatedProjects);
  };

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  return (
    <Container>
      <Title>Project Tracker</Title>

      <Form>
        <Label>Date:</Label>
        <Input
          type="date"
          name="date"
          value={newProject.date}
          onChange={handleInputChange}
        />

        <Label>Details:</Label>
        <TextArea
          name="details"
          value={newProject.details}
          onChange={handleInputChange}
        ></TextArea>

        <Label>Reference Link:</Label>
        <Input
          type="text"
          name="reference"
          value={newProject.reference}
          onChange={handleInputChange}
        />

        <Button type="button" onClick={handleAddProject}>
          {editIndex !== null ? 'Update Project' : 'Add Project'}
        </Button>
      </Form>

      <Title>Projects:</Title>

      {projects.length === 0 ? (
        <p>No projects added yet.</p>
      ) : (
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <ProjectDate>Date: {project.date}</ProjectDate>
              <ProjectDetails>Details: {project.details}</ProjectDetails>
              {project.reference && (
                <ProjectLink href={project.reference}>
                  Click Me For Reference 😎
                </ProjectLink>
              )}
              <ProjectStatus status={project.status}>
                Status: {project.status}
              </ProjectStatus>
              <Select
                value={project.status}
                onChange={(e) =>
                  handleStatusChange(index, e.target.value)
                }
              >
                <option value="Pending">Pending</option>
                <option value="Complete">Complete</option>
                <option value="Inreview">In Review Stage</option>
              </Select>
              <Button
                type="button"
                onClick={() => handleEditProject(index)}
              >
                Edit
              </Button>
              <DeleteButton
                type="button"
                onClick={() => handleDeleteProject(index)}
              >
                Delete
              </DeleteButton>
            </ProjectItem>
          ))}
        </ProjectList>
      )}

      {console.log(projects)}
    </Container>
  );
};

export default App;
