import { AddIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';

import { MarkdownViewer } from '@/components/MarkdownViewer';

import { SubmitButton } from '../SubmitButton';
import { AddQuestBlock } from './AddQuestBlock';

export const CreateQuests: React.FC<{
  onPublishQuestChain: (
    quests: { name: string; description: string }[],
  ) => void | Promise<void>;
}> = ({ onPublishQuestChain }) => {
  const [isAddingQuest, setIsAddingQuest] = useState(false);
  const [quests, setQuests] = useState<{ name: string; description: string }[]>(
    [],
  );

  const onAddQuest = (name: string, description: string) =>
    setQuests([...quests, { name, description }]);

  const onRemoveQuest = (index: number) => {
    setQuests(quests.filter((_, i) => i !== index));
  };

  return (
    <>
      <VStack
        w="full"
        align="stretch"
        spacing={10}
        boxShadow="inset 0px 0px 0px 1px white"
        borderRadius={10}
        px={{ base: 4, md: 12 }}
        py={8}
      >
        <HStack w="full">
          <Box
            py={1}
            px={3}
            borderWidth={1}
            borderColor="gray.500"
            color="gray.500"
            borderRadius={4}
            mr={4}
          >
            STEP 4
          </Box>
          <Text fontWeight="bold" fontSize={16}>
            Quests
          </Text>
        </HStack>
        <Flex
          w="full"
          gap={8}
          mb={14}
          justifyContent="center"
          alignItems="center"
          flexDir="column"
        >
          {!isAddingQuest && (
            <>
              {!quests.length && (
                <>
                  <Image
                    src="/CreateChain/bullseye.svg"
                    alt="circles3"
                    w={20}
                  />
                  <Text fontSize={20} fontWeight="bold">
                    Finally, let’s add some quests.
                  </Text>
                </>
              )}
              <Button
                borderWidth={1}
                borderColor="white"
                borderRadius="full"
                py={2}
                px={40}
                onClick={() => setIsAddingQuest(true)}
              >
                <AddIcon fontSize="sm" mr={2} />
                Add a Quest
              </Button>
            </>
          )}
          {isAddingQuest && (
            <AddQuestBlock
              onClose={() => setIsAddingQuest(false)}
              onAdd={onAddQuest}
            />
          )}
          <Accordion allowMultiple w="full">
            {quests &&
              quests.map(({ name, description }, index) => (
                <Quest
                  key={name + description}
                  name={`${index + 1}. ${name}`}
                  description={description}
                  onRemoveQuest={() => onRemoveQuest(index)}
                />
              ))}
          </Accordion>
          <Text>
            It is perfectly fine to add quests after the quest chain has been
            published.
          </Text>
        </Flex>
      </VStack>

      <SubmitButton
        onClick={() => onPublishQuestChain(quests)}
        type="submit"
        w="full"
      >
        PUBLISH QUEST CHAIN
      </SubmitButton>
    </>
  );
};

const Quest: React.FC<{
  name: string;
  description: string;
  onRemoveQuest: () => void;
}> = ({ name, description, onRemoveQuest }) => {
  return (
    <AccordionItem>
      <Flex>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight="bold">
            {name}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <IconButton
          icon={<SmallCloseIcon />}
          onClick={onRemoveQuest}
          aria-label=""
        />
      </Flex>
      <AccordionPanel pb={4}>
        <MarkdownViewer markdown={description} />
      </AccordionPanel>
    </AccordionItem>
  );
};
