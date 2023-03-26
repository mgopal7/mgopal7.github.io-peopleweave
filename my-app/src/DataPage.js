import { Box, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

function DataPage() {
  return (
    <Box>
      <Table variant="simple" mb="8">
        <Thead>
          <Tr>
            <Th>Term</Th>
            <Th>Number of Students</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Spring 2016</Td>
            <Td>1,452</Td>
          </Tr>
          <Tr>
            <Td>Summer 2016</Td>
            <Td>166</Td>
          </Tr>
          <Tr>
            <Td>Fall 2016</Td>
            <Td>1,504</Td>
          </Tr>
          <Tr fontWeight="bold">
            <Td>Total</Td>
            <Td>3,122</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
}

export default DataPage;
