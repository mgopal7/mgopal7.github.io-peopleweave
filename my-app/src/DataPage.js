import { useState, useEffect } from 'react';
import { Container, Heading, Table, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import Papa from 'papaparse';
import './DataPage.css';



function DataPage() {
  const [data, setData] = useState([]);

  async function fetchData() {
    const response = await fetch('/data.csv'); // assuming the file is in the public directory
    const csvData = await response.text(); // read the CSV file as text
    const parsedData = Papa.parse(csvData, { header: true }).data; // parse the CSV string into an array of objects
    setData(parsedData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxW="container.lg" pt={8}>
      <Heading as="h1" mb={4}>
        My Data
      </Heading>
      {data && data.length > 0 ? (
        <Table variant="simple" className='data-table'>
          <Tbody>
            <Tr>
              {Object.keys(data[0]).map((header) => (
                <Th key={header}>{header}</Th>
              ))}
            </Tr>
            {data.map((row, rowIndex) => (
              <Tr key={rowIndex}>
                {Object.values(row).map((cell, cellIndex) => (
                  <Td key={cellIndex}>{cell}</Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}

export default DataPage;
