// pages/projects.tsx
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react'

import React from 'react'

// import { Footer } from '../../../components/layout/footer'
// import { Header } from '../../../components/layout/header'

// import Layout from '../../layout'
// import { Provider } from '../../provider'

const projectsData = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    link: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    link: 'https://example.com/project-two',
  },
  {
    title: 'Project Three',
    description: 'Description of project three.',
    link: 'https://example.com/project-three',
  },
]

const ProjectsPage: React.FC = () => {
  return (
    <div>
      <Box maxW="800px" mx="auto" p={4}>
        <Heading as="h1" mb={6}>
          My Projects
        </Heading>
        <Stack spacing={4}>
          {projectsData.map((project, index) => (
            <Box key={index} borderWidth="1px" borderRadius="md" p={4}>
              <Heading as="h2" size="lg">
                {project.title}
              </Heading>
              <Text mt={2}>{project.description}</Text>
              <Link href={project.link} color="teal.500" isExternal mt={2}>
                View Project
              </Link>
            </Box>
          ))}
        </Stack>
      </Box>
    </div>
  )
}

export default ProjectsPage
