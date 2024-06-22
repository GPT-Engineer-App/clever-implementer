import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowDown } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Flex as="header" py={4} px={8} justify="space-between" align="center" bg="white" boxShadow="md">
        <HStack spacing={8}>
          <Image src="/logo.png" alt="Company Logo" boxSize="50px" />
          <HStack spacing={4}>
            <Button variant="link">Fastighetssystem</Button>
            <Button variant="link">Om oss</Button>
            <Button variant="link">Pris</Button>
            <Button variant="link">Support</Button>
          </HStack>
        </HStack>
        <HStack spacing={4}>
          <Button variant="outline">Logga in</Button>
          <Button colorScheme="blue">Kom igång</Button>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex as="section" direction={{ base: "column", md: "row" }} align="center" justify="space-between" bg="blue.900" color="white" py={20} px={8}>
        <VStack align="start" spacing={6} maxW="lg">
          <Heading as="h1" size="2xl">Ett modernt fastighetssystem</Heading>
          <Text fontSize="lg">TenFAST är ett komplett fastighetssystem som förenklar vardagen för hyresvärd och hyresgäst.</Text>
          <Text>kontakt@tenfast.se</Text>
          <Text>08-199 552</Text>
          <Button colorScheme="whiteAlpha" size="lg">Kom igång</Button>
        </VStack>
        <Image src="/hero-image.png" alt="Hero Image" boxSize="400px" />
      </Flex>

      {/* Satisfied Customers */}
      <Box as="section" py={20} px={8} textAlign="center">
        <Text fontSize="xl" mb={8}>Några nöjda kunder</Text>
        <HStack spacing={8} justify="center">
          <Image src="/customer1.png" alt="Customer 1" boxSize="100px" />
          <Image src="/customer2.png" alt="Customer 2" boxSize="100px" />
          <Image src="/customer3.png" alt="Customer 3" boxSize="100px" />
          <Image src="/customer4.png" alt="Customer 4" boxSize="100px" />
        </HStack>
      </Box>

      {/* Product Features */}
      <Box as="section" py={20} px={8} bg="gray.100">
        <Heading as="h2" size="xl" mb={8} textAlign="center">Fastighetssystemet för din verksamhet</Heading>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack align="start" spacing={4}>
            <Text fontSize="lg">Program för fastighetsägare, förvaltningsbolag och kommuner mm.</Text>
            <Text fontSize="lg">Webbaserat</Text>
            <Text>TenFAST är byggt för webben. Ingen installation krävs, obegränsat antal användare. Använd dator eller mobilen!</Text>
            <Text fontSize="lg">Enkel prissättning</Text>
            <Text>Priset är rörligt och baseras på antal hyresobjekt, utan startavgift. TenFAST är gratis för mindre hyresvärdar.</Text>
            <Text fontSize="lg">Automatisera din verksamhet</Text>
            <Text>Automatisk avisering via e-post eller traditionell post. Bankkoppling för inbetalningar, bokföring, mm.</Text>
            <Text fontSize="lg">Allt i ett</Text>
            <Text>Få allt relaterat till din verksamhet samlat i ett system och få stenkoll på aviseringar.</Text>
          </VStack>
          <Image src="/features-image.png" alt="Features Image" boxSize="400px" />
        </SimpleGrid>
      </Box>

      {/* Pricing Section */}
      <Box as="section" py={20} px={8} textAlign="center">
        <Heading as="h2" size="xl" mb={8}>Passar stora och små</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack p={8} borderWidth={1} borderRadius="md" spacing={4}>
            <Heading as="h3" size="lg">Free</Heading>
            <Text>0 kr</Text>
            <Text>För privatpersoner och små företag med upp till 5 hyresobjekt.</Text>
            <Button colorScheme="blue">Kom igång</Button>
          </VStack>
          <VStack p={8} borderWidth={1} borderRadius="md" spacing={4}>
            <Heading as="h3" size="lg">Pro</Heading>
            <Text>10 kr / hyresobjekt / månad</Text>
            <Text>För privata fastighetsägare upp till 100 hyresobjekt.</Text>
            <Button colorScheme="blue">Kom igång</Button>
          </VStack>
          <VStack p={8} borderWidth={1} borderRadius="md" spacing={4}>
            <Heading as="h3" size="lg">Enterprise</Heading>
            <Text>Kontakta oss</Text>
            <Text>För fastighetsbolag eller förvaltare från 101 till tusentals hyresobjekt.</Text>
            <Button colorScheme="blue">Kontakta oss</Button>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* FAQ Section */}
      <Box as="section" py={20} px={8} bg="gray.100">
        <Heading as="h2" size="xl" mb={8} textAlign="center">Vanliga frågor</Heading>
        <VStack spacing={4} align="start">
          <Text>Vad är TenFAST fastighetssystem?</Text>
          <Text>Är TenFAST webbaserat?</Text>
          <Text>Vad kostar systemet?</Text>
          <Text>Funkar fastighetssystemet på mobilen?</Text>
          <Text>Hur kan fastighetssystemet vara så billigt?</Text>
          <Text>Varför kan jag använda det gratis?</Text>
          <Text>Vad räknas som ett hyresobjekt?</Text>
          <Text>Vilka funktioner finns i fastighetsprogrammet?</Text>
          <Text>Kan jag skapa hyresavtal och signera digitalt?</Text>
          <Text>Kan hyresgästen använda det?</Text>
          <Text>Indexering av hyra</Text>
          <Text>Hur gör jag med mina befintliga hyresavtal?</Text>
          <Text>Kan jag få hjälp att komma i gång?</Text>
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" py={10} px={8} bg="gray.800" color="white" textAlign="center">
        <Text>Logga in</Text>
        <Text>kontakt@tenfast.se</Text>
        <Text>08-199 552</Text>
        <Text>Sankt Eriksgatan 114, 112 39 Stockholm</Text>
        <Text>© TenFAST AB 2024</Text>
      </Box>
    </Container>
  );
};

export default Index;