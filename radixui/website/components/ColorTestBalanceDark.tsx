import {
  Box,
  Text,
  Section,
  Container,
  Grid,
  Code,
  Heading,
  Flex,
  Paragraph,
} from '@modulz/design-system';

export function ColorTestBalanceDark() {
  return (
    <Box css={{ my: '$5' }}>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(7, minmax(0, 1fr))',
          ai: 'center',
          filter: 'grayscale(1)',
        }}
      >
        <Box></Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>7</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>8</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>9</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>10</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>11</Text>
        </Box>
        <Box css={{ ta: 'center', pb: '$2' }}>
          <Text css={{ fontSize: '$2', color: '$slate11' }}>12</Text>
        </Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gray</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gray7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gray12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mauve</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mauve7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mauve12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Slate</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$slate7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$slate12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sage</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sage7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sage12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Olive</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$olive7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$olive12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sand</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sand7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sand12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Tomato</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$tomato7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$tomato12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Red</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$red7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$red12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Crimson</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$crimson7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$crimson12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Pink</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$pink7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$pink12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Plum</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$plum7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$plum12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Purple</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$purple7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$purple12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Violet</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$violet7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$violet12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Indigo</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$indigo7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$indigo12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Blue</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$blue7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$blue12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Cyan</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$cyan7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$cyan12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Teal</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$teal7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$teal12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Green</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$green7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$green12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Grass</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$grass7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$grass12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Orange</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$orange7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$orange12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Brown</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$brown7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$brown12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Bronze</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$bronze7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$bronze12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Gold</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$gold7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$gold12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Sky</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$sky7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$sky12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Mint</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$mint7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$mint12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Lime</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$lime7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$lime12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Yellow</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$yellow7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$yellow12' }}></Box>

        <Box>
          <Text css={{ fontSize: '$2' }}>Amber</Text>
        </Box>
        <Box css={{ height: 35, backgroundColor: '$amber7' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber8' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber9' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber10' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber11' }}></Box>
        <Box css={{ height: 35, backgroundColor: '$amber12' }}></Box>
      </Grid>
    </Box>
  );
}
