import { Box, Heading, Text } from "@chakra-ui/react";

function IntroductionPage() {
  return (
    <Box>
      <Heading as="h2" size="xl" mb="4">Welcome to My Website!</Heading>

      <Box mb="8">
        <Text fontSize="xl" fontWeight="bold" mb="4">As a web developer, I am excited about working on the PeopleWeave project because it offers an opportunity to use my skills to make a meaningful impact in the world. PeopleWeave's mission to empower underserved communities through technology aligns with my personal values and inspires me to create solutions that can make a positive difference in people's lives. I believe that contributing to this project will not only enhance my technical abilities but also give me a sense of purpose and fulfillment in my work.



</Text>
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
