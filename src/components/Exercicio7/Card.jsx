import styled from "styled-components";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const CardContainer = styled.div`
  width: 300px;
  margin: 2rem auto;
  border: 1px solid #ccc;
  border-radius: 12px;
  overflow: hidden;
  font-family: Arial, sans-serif;
  background: white;
`;

const Header = styled.div`
  padding: 1rem;
  text-align: center;
  height: 220px;
  background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGO0QYe6lmqL3IF-8oRssPf1scvwenpqcWwUWnnYm7kswsT4TuAe1CvpmzejZYWui153TeQa7YxSZXK01Dv0ISLqgB636jT6x4jQr_EG4&s=10")
    no-repeat center center;
  background-size: cover;
`;

const Name = styled.h2`
  text-align: center;
  margin: 12px 0;
`;

const Info = styled.p`
  text-align: center;
  margin: 4px 0;
  font-size: 14px;
  color: #555;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  border: 1px solid #ccc;
  padding: 8px;
  background: #f5f5f5;
`;

const Td = styled.td`
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
`;

export default function Card({ tarefas }) {
  return (
    <CardContainer>
      <Header></Header>
      <Name>Linus Torvalds</Name>
      <Info>12 de outubro de 1969</Info>
      <Info>Tecnologia</Info>
      <Info>Engenheiro de software</Info>

      <Icons>
        <FaPhone />
        <FaEnvelope />
        <FaMapMarkerAlt />
      </Icons>

      <Table>
        <thead>
          <tr>
            <Th>Estado</Th>
            <Th>Tarefas</Th>
          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefas) => (
            <tr key={tarefas.id}>
              <Td>
                <input type="radio" />
              </Td>
              <Td>{tarefas.name}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContainer>
  );
}
