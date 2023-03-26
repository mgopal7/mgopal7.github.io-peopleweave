import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    // Perform form submission using formData
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb="8">
        Contact Us
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="name" mb="4">
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" placeholder="Your name" />
        </FormControl>
        <FormControl id="email" mb="4">
          <FormLabel>Email address</FormLabel>
          <Input type="email" name="email" placeholder="Your email" />
        </FormControl>
        <FormControl id="message" mb="4">
          <FormLabel>Message</FormLabel>
          <Textarea name="message" placeholder="Your message" rows="6" />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default ContactPage;
