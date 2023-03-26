import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

function ContactPage() {
  return (
    <Box>
      <Heading as="h2" size="lg" mb="8">
        Contact Us
      </Heading>
      <form>
        <FormControl id="name" mb="4">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Your name" />
        </FormControl>
        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Your email" />
        </FormControl>
        <FormControl id="message" mb="4">
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your message" rows="6" />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ContactPage;
