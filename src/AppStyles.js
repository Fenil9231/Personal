import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem auto;
  max-width: 1000px;
  padding: 1rem;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
`;

export const ProjectLink = styled.a`
  display: block;
  margin-top: 0.5rem;
  color: #007bff;
  text-decoration: none;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const TextArea = styled.textarea`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ProjectList = styled.ul`
  list-style: none;
  padding: 0;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export const ProjectItem = styled.li`
  margin-bottom: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
`;

export const ProjectDate = styled.p`
  font-weight: bold;
`;

export const ProjectDetails = styled.p`
  font-weight: bold;
`;

export const ProjectStatus = styled.p`
  color: ${({ status }) => (status === 'Pending' ? 'red' : 'green')};
  font-weight: bold;
`;

export const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Select = styled.select`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;
