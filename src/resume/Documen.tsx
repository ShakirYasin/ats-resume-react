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
    fontSize: '12px',
  },
})

// export const ACHIEVEMENTS = [
//   "Specialized in JavaScript/TypeScript and related technologies, I have become the go-to expert for any related problems in the workspace. (Don't get me wrong, I'm still learning)",
//   'Conducted code reviews on enterprise-level projects to ensure code quality and standards.',
//   'Engaged directly with clients to resolve requirements issues and communication gaps.',
//   'Conducted nearly 50+ interviews for various roles (Full-stack, Front-end, Back-end, DevOps, Mobile-app).',
// ]

// export const EXTRA_CURRICULAR_ACTIVITIES = [
//   `I frequently write blogs on dev.to and posts on LinkedIn about Software Engineering, JavaScript/TypeScript, Node.js, and related topics that can benefit others. I have gained 7k+ followers on LinkedIn and achieved close to 50k impressions on dev.to.`,
//   `I stay involved in continuous learning and community conferences to remain on the cutting edge of technology.`,
//   `I consistently work on side projects to explore new technologies and ideas.`,
// ]

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
    <View
      style={{ alignItems: 'flex-start', marginTop: '12px', width: '100%' }}
    >
      <View
        style={{
          borderBottom: '1px solid black',
          width: '100%',
          marginBottom: '3px',
          paddingBottom: '3px',
        }}
      >
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: '12px',
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
        marginVertical: '4px',
      }}
    >
      <View>
        <Text style={{ ...styles.text, fontWeight: 'bold' }}>{role}</Text>
        <Text style={styles.text}>{company}</Text>
        <View style={{ paddingLeft: '5px', marginTop: '2px', gap: '2px' }}>
          {achievements.map((achievement) => {
            return (
              <Text style={{ ...styles.text }} key={achievement}>
                &bull; {achievement}
              </Text>
            )
          })}
        </View>
      </View>
      <View>
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
    <View style={{ flexDirection: 'row', gap: '16px', marginVertical: '4px' }}>
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
          Senior Software Engineer with 4 years of experience, specializing in
          both backend and frontend development. Known for providing high-impact
          web solutions for diverse industries, exceptional collaboration and
          communication skills, and consistently delivering successful projects.
        </Text>
      </Section>

      <Section heading='Education'>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.text}>
              Bachelor of Science in Computer Sciences - SZABIST
            </Text>
          </View>
          <View>
            <Text style={styles.text}>2018 - 2022</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={styles.text}>
              Higher Secondary School Certificate (HSSC / Intermediate) - Habib
              Public High School
            </Text>
          </View>
          <View>
            <Text style={styles.text}>2016 - 2018</Text>
          </View>
        </View>
      </Section>
      <Section heading='Skills'>
        <Skills
          heading='Technical Skiils'
          skills={[
            'JavaScript',
            'TypeScript',
            'Node.js',
            'PostgreSQL',
            'MySQL',
            'MongoDB',
            'Firebase',
            'Bull MQ',
            'Redis',
            'GraphQL',
            'Rest APIs',
            'React.js',
            'Next.js',
            'Nest.js',
            'Angular',
            'Docker',
            'Github',
            'AWS',
          ]}
        />
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
            'Effectively leveraged deep expertise and communication skills to secure complex, high-value projects for the company.',
            'Adopted latest Front-end and back-end technologies as well as best practices to improve development efficiency.',
            'Guided and supported team members, helping to enhance their technical skills and improve their contributions',
            'Collaborated with DevOps engineers to establish efficient deployment pipelines and automate the deployment process.',
            'Actively participated in Agile methodologies, contributing to sprint planning, daily stand-ups, and retrospectives for smooth project execution and continuous improvement.',
            'Serving as a core team member.',
          ]}
        />

        <Experience
          role='Software Engineer'
          company='Logikware LTD'
          location='Karachi, Pakistan'
          from='Jun 2020'
          to='Mar 2022'
          achievements={[
            'Converting Figma or Adobe XD design into fully-functional web apps.',
            'Building REST and GraphQL APIs.',
            'Deploying web applications to AWS, Digital Ocean etc.',
          ]}
        />
      </Section>
      <Section heading='Certifications'>
        <View style={{ gap: '4px', flexDirection: 'column' }}>
          {CERTIFICATIONS.map((certificate) => {
            return (
              <BulletLinks text={certificate.text} link={certificate.link} />
            )
          })}
        </View>
      </Section>
      <Section heading='Projects'>
        <View style={{ gap: '4px', flexDirection: 'row' }}>
          {PROJECTS.map((project) => {
            return <BulletLinks text={project.text} link={project.link} />
          })}
        </View>
      </Section>
    </Page>
  </Document>
)
