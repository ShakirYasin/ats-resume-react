import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
  Font,
} from '@react-pdf/renderer'

Font.register({
  family: 'TimesNewRoman',
  fonts: [
    {
      src: 'src/times-new-roman.ttf',
      fontWeight: 'normal',
    },
    {
      src: 'src/times-new-roman-bold.ttf',
      fontWeight: 'bold',
    },
  ],
})

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E4E4E4',
    paddingVertical: '10px',
    paddingHorizontal: '24px',
    fontFamily: 'TimesNewRoman',
  },
  introSection: {
    flexDirection: 'column',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '10px',
  },
})

export const CERTIFICATIONS: { text: string; link: string }[] = [
  {
    text: 'Angular',
    link: 'https://dub.sh/angular-fe-cert',
  },
  {
    text: 'NodeJS, Express & MongoDB',
    link: 'https://dub.sh/node-be-cert',
  },
  {
    text: 'Microsoft Certified: Azure Fundamentals',
    link: 'https://dub.sh/cred-azure-cert',
  },
  {
    text: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    link: 'https://dub.sh/cred-aws-cert',
  },
]

export const PROJECTS: { text: string; link: string }[] = [
  {
    text: 'Hoy Hoy Ibiza',
    link: 'https://hoyhoyibiza.com',
  },
  {
    text: 'Whalecard',
    link: 'https://whalecard.co/',
  },
]

export const Section: React.FC<{
  children: React.ReactNode
  heading: string
}> = ({ children, heading }) => {
  return (
    <View style={{ alignItems: 'flex-start', marginTop: '8px', width: '100%' }}>
      <View
        style={{
          borderBottom: '1px solid black',
          width: '100%',
          marginBottom: '2px',
          paddingBottom: '2px',
        }}
      >
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: '11px',
            fontWeight: 'bold',
          }}
        >
          {heading}
        </Text>
      </View>
      <View style={{ width: '100%' }}>{children}</View>
    </View>
  )
}

export const Experience = ({
  role,
  company,
  from,
  to,
  achievements,
  location,
}: {
  role: string
  company: string
  from: string
  to: string
  location: string
  achievements: string[]
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: '3px',
      }}
    >
      <View style={{ width: '75%' }}>
        <Text style={{ ...styles.text, fontWeight: 'bold' }}>{role}</Text>
        <Text style={styles.text}>{company}</Text>
        <View style={{ paddingLeft: '5px', marginTop: '1px', gap: '1px' }}>
          {achievements.map((achievement) => {
            return (
              <Text style={{ ...styles.text }} key={achievement}>
                &bull; {achievement}
              </Text>
            )
          })}
        </View>
      </View>
      <View style={{ width: '25%', alignItems: 'flex-end' }}>
        <Text style={styles.text}>
          {from} - {to}
        </Text>
        <Text style={styles.text}>{location}</Text>
      </View>
    </View>
  )
}

export const BulletLinks = ({ link, text }: { text: string; link: string }) => {
  return (
    <View
      style={{
        paddingLeft: '5px',
      }}
    >
      <Text style={{ ...styles.text }}>&bull; {text}</Text>
      <Text style={styles.text}>
        <Link href={link}>{link}</Link>
      </Text>
    </View>
  )
}

export const Skills = ({
  heading,
  skills,
}: {
  heading: string
  skills: string[]
}) => {
  return (
    <View style={{ flexDirection: 'row', gap: '8px', marginVertical: '2px' }}>
      <View style={{ width: '80px' }}>
        <Text style={{ ...styles.text, fontWeight: 'bold' }}>{heading}</Text>
      </View>
      <View style={{ width: '450px' }}>
        <Text style={{ ...styles.text }}>{skills.join(', ')}</Text>
      </View>
    </View>
  )
}

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.introSection}>
        <Text style={styles.heading}>M. Shakir Yasin</Text>
        <View style={{ flexDirection: 'row', gap: '4px', marginTop: '4px' }}>
          <Text style={styles.text}>+92-335-3443716</Text>
          <Text style={styles.text}>|</Text>
          <Text style={styles.text}>Karachi, Pakistan</Text>
        </View>
        <View style={{ flexDirection: 'row', gap: '4px', marginTop: '4px' }}>
          <Text style={styles.text}>
            <Link href='mailto:shakir.yasin18@gmail.com'>
              shakir.yasin18@gmail.com
            </Link>
          </Text>
          <Text style={styles.text}>|</Text>
          <Text style={styles.text}>
            <Link href='https://www.linkedin.com/in/shakir-yasin/'>
              linkedin.com/in/shakir-yasin/
            </Link>
          </Text>
          <Text style={styles.text}>|</Text>
          <Text style={styles.text}>
            <Link href='https://github.com/ShakirYasin'>
              github.com/ShakirYasin
            </Link>
          </Text>
        </View>
      </View>

      <Section heading='Profile'>
        <Text style={styles.text}>
          Results-driven Senior Software Engineer with 4 years of expertise in
          full-stack development, specializing in high-performance, scalable web
          applications. Demonstrated success in architecting microservices,
          optimizing frontend performance, and implementing robust CI/CD
          pipelines, resulting in significant improvements in application
          efficiency and user experience. Proficient in Node.js, React, and
          cloud technologies, with a proven ability to lead teams, mentor junior
          developers, and deliver innovative solutions in Agile environments.
          Committed to continuous learning and applying cutting-edge
          technologies to solve complex business challenges across diverse
          industries.
        </Text>
      </Section>

      <Section heading='Skills'>
        <Skills heading='Programming' skills={['JavaScript', 'TypeScript']} />
        <Skills
          heading='Backend'
          skills={['Node.js', 'Express.js', 'Nest.js', 'GraphQL', 'REST APIs']}
        />
        <Skills
          heading='Frontend'
          skills={['React.js', 'Next.js', 'Angular']}
        />
        <Skills
          heading='Databases'
          skills={['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase']}
        />
        <Skills heading='Cloud & DevOps' skills={['AWS', 'Docker', 'GitHub']} />
        <Skills heading='Other' skills={['Redis', 'Bull MQ', 'Git']} />
        <Skills
          heading='Soft Skills'
          skills={[
            'Continuous Learning',
            'Communication',
            'Problem Solving',
            'Listening',
            'Attention to Detail',
          ]}
        />
      </Section>

      <Section heading='Experience'>
        <Experience
          role='Senior Software Engineer'
          company='Hashone Digital'
          location='Karachi, Pakistan'
          from='Apr 2022'
          to='Present'
          achievements={[
            'Architected and implemented a scalable microservices-based backend system using Node.js and NestJS, resulting in a 30% improvement in application performance.',
            'Led the migration of a legacy monolithic application to a modern React-based frontend, improving user experience and reducing load times by 40%.',
            'Implemented robust CI/CD pipelines using GitHub Actions and Docker, reducing deployment time from hours to under 30 minutes.',
            'Mentored junior developers through code reviews and pair programming sessions, fostering a culture of knowledge sharing and continuous improvement.',
            'Optimized database queries and implemented caching strategies, resulting in a 25% reduction in API response times for high-traffic endpoints.',
          ]}
        />

        <Experience
          role='Software Engineer'
          company='Logikware LTD'
          location='Karachi, Pakistan'
          from='Jun 2020'
          to='Mar 2022'
          achievements={[
            'Developed and maintained RESTful APIs using Node.js and Express, serving over 100,000 daily active users.',
            'Implemented real-time features using WebSockets and Socket.io, enhancing user engagement in a collaborative project management tool.',
            'Optimized front-end performance by implementing lazy loading and code splitting in React applications, improving initial load time by 35%.',
            'Integrated third-party APIs and services, including payment gateways and social media platforms, to expand application functionality and improve user experience.',
            'Conducted regular security audits and implemented best practices, contributing to a significant reduction in identified vulnerabilities and enhancing overall system security.',
          ]}
        />
      </Section>

      <Section heading='Education'>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '4px',
          }}
        >
          <View style={{ width: '80%' }}>
            <Text style={{ ...styles.text, fontWeight: 'bold' }}>
              Bachelor of Science in Computer Sciences
            </Text>
            <Text style={styles.text}>SZABIST</Text>
          </View>
          <View style={{ width: '20%', alignItems: 'flex-end' }}>
            <Text style={styles.text}>2018 - 2022</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '8px',
          }}
        >
          <View style={{ width: '80%' }}>
            <Text style={{ ...styles.text, fontWeight: 'bold' }}>
              Higher Secondary School Certificate (HSSC / Intermediate)
            </Text>
            <Text style={styles.text}>Habib Public High School</Text>
          </View>
          <View style={{ width: '20%', alignItems: 'flex-end' }}>
            <Text style={styles.text}>2016 - 2018</Text>
          </View>
        </View>
      </Section>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ width: '48%' }}>
          <Section heading='Certifications'>
            <View style={{ gap: '2px', flexDirection: 'column' }}>
              {CERTIFICATIONS.map((certificate) => (
                <View key={certificate.text}>
                  <Text style={styles.text}>&bull; {certificate.text}</Text>
                  <Link
                    src={certificate.link}
                    style={{ ...styles.text, color: 'blue' }}
                  >
                    {certificate.link}
                  </Link>
                </View>
              ))}
            </View>
          </Section>
        </View>
        <View style={{ width: '48%' }}>
          <Section heading='Projects'>
            <View style={{ gap: '2px', flexDirection: 'column' }}>
              {PROJECTS.map((project) => (
                <View key={project.text}>
                  <Text style={styles.text}>&bull; {project.text}</Text>
                  <Link
                    src={project.link}
                    style={{ ...styles.text, color: 'blue' }}
                  >
                    {project.link}
                  </Link>
                </View>
              ))}
            </View>
          </Section>
        </View>
      </View>
    </Page>
  </Document>
)
