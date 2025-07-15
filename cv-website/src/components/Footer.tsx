import { Container, Text, Group, Stack, Divider, ActionIcon, useMantineColorScheme, Box } from '@mantine/core'
import { IconBrandLinkedin, IconBrandGithub, IconMail, IconPhone } from '@tabler/icons-react'

export function Footer() {
  const { colorScheme } = useMantineColorScheme()
  
  return (
    <footer 
      style={{ 
        backgroundColor: colorScheme === 'dark' ? '#1a1b1e' : '#2c2e33',
        color: 'white',
        marginTop: 'auto'
      }}
    >
      <Container size="xl" py="xl" style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <Stack gap="lg">
          {/* Desktop Layout */}
          <Box visibleFrom="md">
            <Group justify="space-between" align="flex-start">
              <Stack gap="sm">
                <Text size="lg" fw={700} c="white">
                  Alex Stoinev
                </Text>
                <Text size="sm" c="gray.4">
                  Project Manager
                </Text>
                <Group gap="sm">
                  <ActionIcon 
                    variant="subtle" 
                    size="lg" 
                    component="a" 
                    href="#" 
                    target="_blank"
                    style={{ color: 'white' }}
                    styles={{
                      root: {
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }
                    }}
                  >
                    <IconBrandLinkedin size={20} />
                  </ActionIcon>
                  <ActionIcon 
                    variant="subtle" 
                    size="lg" 
                    component="a" 
                    href="#" 
                    target="_blank"
                    style={{ color: 'white' }}
                    styles={{
                      root: {
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }
                    }}
                  >
                    <IconBrandGithub size={20} />
                  </ActionIcon>
                  <ActionIcon 
                    variant="subtle" 
                    size="lg" 
                    component="a" 
                    href="mailto:stoinev.alex@gmail.com"
                    style={{ color: 'white' }}
                    styles={{
                      root: {
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }
                    }}
                  >
                    <IconMail size={20} />
                  </ActionIcon>
                  <ActionIcon 
                    variant="subtle" 
                    size="lg" 
                    component="a" 
                    href="tel:+359894652779"
                    style={{ color: 'white' }}
                    styles={{
                      root: {
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                      }
                    }}
                  >
                    <IconPhone size={20} />
                  </ActionIcon>
                </Group>
              </Stack>
              
              <Stack gap="sm" align="flex-end">
                <Text size="sm" c="gray.4">
                  Contact
                </Text>
                <Text size="sm" c="white">
                  stoinev.alex@gmail.com
                </Text>
                <Text size="sm" c="white">
                  +359 894 652 779
                </Text>
                <Text size="sm" c="white">
                  Sofia, Bulgaria
                </Text>
              </Stack>
            </Group>
          </Box>

          {/* Mobile Layout */}
          <Box hiddenFrom="md">
            <Stack gap="lg" align="center">
              <Stack gap="sm" align="center">
                <Text size="lg" fw={700} c="white" ta="center">
                  Alex Stoinev
                </Text>
                <Text size="sm" c="gray.4" ta="center">
                  Project Manager
                </Text>
              </Stack>
              
              <Stack gap="sm" align="center">
                <Text size="sm" c="gray.4" ta="center">
                  Contact
                </Text>
                <Text size="sm" c="white" ta="center">
                  stoinev.alex@gmail.com
                </Text>
                <Text size="sm" c="white" ta="center">
                  +359 894 652 779
                </Text>
                <Text size="sm" c="white" ta="center">
                  Sofia, Bulgaria
                </Text>
              </Stack>

              <Group gap="sm" justify="center">
                <ActionIcon 
                  variant="subtle" 
                  size="lg" 
                  component="a" 
                  href="https://linkedin.com/in/stefan-radev" 
                  target="_blank"
                  style={{ color: 'white' }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }}
                >
                  <IconBrandLinkedin size={20} />
                </ActionIcon>
                <ActionIcon 
                  variant="subtle" 
                  size="lg" 
                  component="a" 
                  href="https://github.com/StefanRadev91" 
                  target="_blank"
                  style={{ color: 'white' }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }}
                >
                  <IconBrandGithub size={20} />
                </ActionIcon>
                <ActionIcon 
                  variant="subtle" 
                  size="lg" 
                  component="a" 
                  href="mailto:stefan.radev91@gmail.com"
                  style={{ color: 'white' }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }}
                >
                  <IconMail size={20} />
                </ActionIcon>
                <ActionIcon 
                  variant="subtle" 
                  size="lg" 
                  component="a" 
                  href="tel:+359897269135"
                  style={{ color: 'white' }}
                  styles={{
                    root: {
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    }
                  }}
                >
                  <IconPhone size={20} />
                </ActionIcon>
              </Group>
            </Stack>
          </Box>
          
          <Divider color="gray.6" />
          
          {/* Copyright section - responsive */}
          <Group justify="space-between" align="center" visibleFrom="md">
            <Text size="sm" c="gray.4">
              © 2025 Alex Stoinev. All rights reserved.
            </Text>
            <Text size="sm" c="gray.4">
              Built with React & Mantine
            </Text>
          </Group>
          
          <Stack gap="xs" align="center" hiddenFrom="md">
            <Text size="sm" c="gray.4" ta="center">
              © 2025 Alex Stoinev. All rights reserved.
            </Text>
            <Text size="sm" c="gray.4" ta="center">
              Built with React & Mantine
            </Text>
          </Stack>
        </Stack>
      </Container>
    </footer>
  )
}