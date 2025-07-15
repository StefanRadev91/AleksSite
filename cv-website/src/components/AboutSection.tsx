import { Container, Title, Text, Grid, Card, ThemeIcon, Stack, List, Badge, Group } from '@mantine/core'
import { 
  IconRobot, 
  IconCode, 
  IconBrain, 
  IconTarget, 
  IconCertificate,
  IconTrendingUp
} from '@tabler/icons-react'
import { useEffect, useRef, useState } from 'react'

export function AboutSection() {
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
  const skills = [
    { name: 'Project Management', stars: 5 },
    { name: 'Azure DevOps', stars: 5 },
    { name: 'Agile & Scrum', stars: 4.5 },
    { name: 'Stakeholder Management', stars: 5 },
    { name: 'Business Analysis', stars: 4.5 },
    { name: 'Process Design', stars: 4 },
    { name: 'Team Leadership', stars: 4.5 },
    { name: 'English', stars: 5 },
    { name: 'WordPress', stars: 3.5 },
    { name: 'Jira', stars: 4 }
  ]

  const renderStars = (count: number) => {
    const fullStars = Math.floor(count)
    const hasHalfStar = count % 1 !== 0
    const emptyStars = 5 - Math.ceil(count)
    
    return (
      <Group gap={1}>
        {Array.from({ length: fullStars }, (_, i) => (
          <Text key={`full-${i}`} c="yellow.6" size="md">★</Text>
        ))}
        {hasHalfStar && (
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Text c="gray.4" size="md" style={{ margin: 0 }}>★</Text>
            <div 
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '50%',
                height: '100%',
                overflow: 'hidden'
              }}
            >
              <Text c="yellow.6" size="md" style={{ margin: 0 }}>★</Text>
            </div>
          </div>
        )}
        {Array.from({ length: emptyStars }, (_, i) => (
          <Text key={`empty-${i}`} c="gray.4" size="md">★</Text>
        ))}
      </Group>
    )
  }

  const certifications = [
    'Business Administration Bachelor',
    'Business Analytics for Optimal Solutions',
    'PHP and SQL Basics',
    'International Business School Graduate'
  ]

  return (
    <Container 
      ref={sectionRef}
      size="xl" 
      py="xl" 
      id="about" 
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
            About Me
          </Title>
        </div>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Group mb="md">
                <ThemeIcon size="lg" color="blue" variant="light">
                  <IconBrain size={24} />
                </ThemeIcon>
                <Title order={3}>My Mission</Title>
              </Group>
              <Text size="md" mb="lg">
                As a Project Manager at Denshi AD, I lead cross-functional teams and manage complex projects 
                from conception to delivery. I focus on stakeholder communication and process optimization.
              </Text>
              <Text size="md">
                My expertise is in Azure DevOps implementation, Agile methodologies, and delivering high-impact projects 
                within tight deadlines. I build operational infrastructure and ensure optimal execution.
              </Text>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Group mb="md">
                <ThemeIcon size="lg" color="green" variant="light">
                  <IconTarget size={24} />
                </ThemeIcon>
                <Title order={3}>Specializations</Title>
              </Group>
              <List
                spacing="sm"
                icon={
                  <ThemeIcon color="green" size={16} radius="xl">
                    <IconRobot size={12} />
                  </ThemeIcon>
                }
              >
                <List.Item>Project Management & Cross-functional team leadership</List.Item>
                <List.Item>Azure DevOps infrastructure and sprint workflows</List.Item>
                <List.Item>Agile & Scrum methodologies implementation</List.Item>
                <List.Item>Stakeholder management and communication</List.Item>
                <List.Item>Business requirements documentation (BRD)</List.Item>
                <List.Item>Payment systems integration and airline platforms</List.Item>
              </List>
            </Card>
          </Grid.Col>
        </Grid>


        <Card shadow="sm" padding="xl" radius="md" withBorder>
          <Group mb="lg">
            <ThemeIcon size="lg" color="violet" variant="light">
              <IconCode size={24} />
            </ThemeIcon>
            <Title order={3}>Technical Skills</Title>
          </Group>
          <Grid>
            {skills.map((skill) => (
              <Grid.Col span={{ base: 12, sm: 6 }} key={skill.name}>
                <Group justify="center" mb="sm" align="center" gap="sm">
                  <div style={{ flex: 1, textAlign: 'center' }}>
                    <Text size="sm" fw={500}>{skill.name}</Text>
                  </div>
                  <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                    {renderStars(skill.stars)}
                  </div>
                </Group>
              </Grid.Col>
            ))}
          </Grid>
        </Card>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Group mb="md">
                <ThemeIcon size="lg" color="orange" variant="light">
                  <IconCertificate size={24} />
                </ThemeIcon>
                <Title order={3}>Certifications</Title>
              </Group>
              <Stack gap="sm">
                {certifications.map((cert, index) => (
                  <Badge key={index} variant="light" size="md" fullWidth>
                    {cert}
                  </Badge>
                ))}
              </Stack>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card shadow="sm" padding="xl" radius="md" withBorder h="100%">
              <Group mb="md">
                <ThemeIcon size="lg" color="red" variant="light">
                  <IconTrendingUp size={24} />
                </ThemeIcon>
                <Title order={3}>Personal Interests</Title>
              </Group>
              <Text size="md" mb="md">
                Outside of work, I enjoy staying active and exploring new technologies. 
                I dedicate time to continuous learning and professional development.
              </Text>
              <Group gap="xs" mt="md">
                <Badge variant="outline">Business Development</Badge>
                <Badge variant="outline">Technology</Badge>
                <Badge variant="outline">Process Optimization</Badge>
                <Badge variant="outline">Team Building</Badge>
                <Badge variant="outline">Learning</Badge>
              </Group>
            </Card>
          </Grid.Col>
        </Grid>
      </Stack>
    </Container>
  )
}