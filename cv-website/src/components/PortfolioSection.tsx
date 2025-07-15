import { 
  Container, 
  Title, 
  Text, 
  Card, 
  Grid, 
  Badge, 
  Group, 
  Stack,
  Image,
  ThemeIcon,
  List
} from '@mantine/core'
import { 
  IconCheck
} from '@tabler/icons-react'
import dacaImage from '../assets/DACA.png'
import armeecImage from '../assets/logos_EN_Armeec .png'
import bulgariaAirImage from '../assets/Bulgaria_Air_logo.png'
import azureDevOpsImage from '../assets/Azure-DevOps-Logo.png'
import unknownImage from '../assets/Unknown.jpeg'
import avisBudgetSafetyImage from '../assets/avis_budget_safety.png'
import { useEffect, useRef, useState } from 'react'

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])
  const projects = [
    {
      title: 'Azure DevOps Infrastructure Implementation',
      description: 'Company-wide Azure DevOps setup with sprint workflows and delivery pipelines at Denshi AD',
      image: azureDevOpsImage,
      technologies: ['Azure DevOps', 'Agile', 'Sprint Planning', 'Backlog Management', 'CI/CD'],
      features: [
        'Sprint workflow standardization',
        'Backlog refinement processes',
        'Delivery pipeline optimization',
        'Team collaboration enhancement',
        'Project tracking automation'
      ],
      results: {
        coverage: '100%',
        timeReduction: '60%',
        bugDetection: 'C-level praised'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Payment System Integration (Borica)',
      description: 'Secure payment gateway integration for insurance platforms with full transaction flow',
      image: bulgariaAirImage,
      technologies: ['Payment Integration', 'Borica', 'Security', 'API Management', 'Testing'],
      features: [
        'Secure payment processing',
        'Transaction flow optimization',
        'API endpoint management',
        'Security compliance verification',
        'End-to-end testing coordination'
      ],
      results: {
        coverage: '100%',
        timeReduction: '50%',
        apiEndpoints: 'Secure transactions'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Airline Booking Platform',
      description: 'Complete airline booking system with check-in flows and ticketing engine development',
      image: bulgariaAirImage,
      technologies: ['UX Design', 'Booking Systems', 'Ticketing', 'User Flow', 'Integration'],
      features: [
        'User experience flow design',
        'Booking system integration',
        'Check-in process optimization',
        'Ticketing engine development',
        'Cross-platform compatibility'
      ],
      results: {
        coverage: '95%',
        timeReduction: '70%',
        dataMigration: 'Successful launch'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Insurance Platform Development',
      description: 'Full-stack insurance platform with quoting, policy creation, and payment capabilities',
      image: armeecImage,
      technologies: ['Full-stack', 'Insurance', 'Policy Management', 'Payment Processing', 'Backend'],
      features: [
        'Insurance quoting system',
        'Policy creation workflows',
        'Payment processing integration',
        'Backend system development',
        'User portal management'
      ],
      results: {
        coverage: '100%',
        timeReduction: '80%',
        executionSpeed: 'Company success'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Avis/Budget Car Rental Platform',
      description: 'Enterprise car rental management system with booking, fleet management, and customer service capabilities',
      image: avisBudgetSafetyImage,
      technologies: ['Car Rental', 'Fleet Management', 'Booking System', 'Customer Service', 'Enterprise'],
      features: [
        'Fleet management optimization',
        'Booking system integration',
        'Customer service workflows',
        'Enterprise-level scalability',
        'Multi-location support'
      ],
      results: {
        coverage: '100%',
        timeReduction: '65%',
        bugDetection: 'Operational success'
      },
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Senshi, Falkonwings, Frontex',
      description: 'Three distinct projects: Senshi (martial arts events website), Falkonwings (film studio website), and Frontex (financial sector platform)',
      image: unknownImage,
      technologies: ['Web Development', 'Multi-domain', 'Events Platform', 'Media Production', 'Financial Services'],
      features: [
        'Senshi: Martial arts events management',
        'Falkonwings: Film studio portfolio',
        'Frontex: Financial services platform',
        'Multi-project coordination',
        'Cross-industry expertise'
      ],
      results: {
        coverage: '95%',
        timeReduction: '60%',
        bugDetection: 'Multi-sector success'
      },
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <Container 
      ref={sectionRef}
      size="xl" 
      py="xl" 
      id="portfolio" 
      style={{ 
        maxWidth: '1400px', 
        margin: '0 auto',
        transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
        opacity: isVisible ? 1 : 0,
        transition: 'all 0.8s ease-out'
      }}
    >
      <Stack gap="xl">
        <div style={{ textAlign: 'center' }}>
          <Title order={2} size="2.5rem" mb="md">
            Portfolio
          </Title>
          <Text size="lg" c="dimmed" maw={800} mx="auto">
            Showcase of project management initiatives and delivery successes
          </Text>
        </div>

        <Grid gutter="xl">
          {projects.map((project, index) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
              <Card shadow="md" padding="xl" radius="md" withBorder h="100%">
                <Card.Section>
                  <Image
                    src={project.image}
                    height={200}
                    alt={project.title}
                    fallbackSrc="https://via.placeholder.com/400x200?text=Project+Image"
                    fit="contain"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: project.image === avisBudgetSafetyImage ? '#ffffff' : '#f8f9fa'
                    }}
                  />
                </Card.Section>

                <Stack gap="md" mt="md">
                  <div>
                    <Title order={3} size="1.3rem" mb="xs">
                      {project.title}
                    </Title>
                    <Text size="sm" c="dimmed">
                      {project.description}
                    </Text>
                  </div>

                  <Group gap="xs">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="light" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </Group>

                  <div>
                    <Text size="sm" fw={500} mb="xs">Key Features:</Text>
                    <List
                      spacing="xs"
                      size="xs"
                      icon={
                        <ThemeIcon color="green" size={14} radius="xl">
                          <IconCheck size={10} />
                        </ThemeIcon>
                      }
                    >
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <List.Item key={featureIndex}>{feature}</List.Item>
                      ))}
                    </List>
                  </div>

                  <Card p="md" radius="md" bg="blue.0" style={{ border: '1px solid var(--mantine-color-blue-2)' }}>
                    <Text size="sm" fw={500} mb="xs" c="blue">Results:</Text>
                    <Group gap="lg">
                      <div>
                        <Text size="lg" fw={700} c="blue">
                          {project.results.coverage}
                        </Text>
                        <Text size="xs" c="dimmed">Coverage</Text>
                      </div>
                      <div>
                        <Text size="lg" fw={700} c="green">
                          {project.results.timeReduction}
                        </Text>
                        <Text size="xs" c="dimmed">Time saved</Text>
                      </div>
                    </Group>
                  </Card>

                </Stack>
              </Card>
            </Grid.Col>
          ))}
        </Grid>

      </Stack>
    </Container>
  )
}