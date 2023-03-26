import { Box, Heading, Text } from "@chakra-ui/react";

function IntroductionPage() {
  return (
    <Box>
      <Heading as="h2" size="xl" mb="4">Welcome to My Website!</Heading>

      <Box mb="8">
        <Text fontSize="xl" fontWeight="bold" mb="4">I am interested in PeopleWeave because I want to do research</Text>
      </Box>

      <Box mb="8">
        <Text fontSize="xl" fontWeight="bold" mb="4">Fun facts</Text>
        <Box as="ul" pl="4">
          <li>I have a twin sister</li>
          <li>I have traveled to Peru and hiked on the Inca Trail</li>
          <li>My favorite ice cream flavor is vanilla</li>
        </Box>
      </Box>
    </Box>
  );
}

export default IntroductionPage;
