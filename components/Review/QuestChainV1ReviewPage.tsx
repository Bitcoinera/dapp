import { ArrowBackIcon, SmallCloseIcon } from '@chakra-ui/icons';
import {
  Accordion,
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  IconButton,
  Link as ChakraLink,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { contracts, graphql } from '@quest-chains/sdk';
import NextLink from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-hot-toast';

import { MarkdownEditor } from '@/components/MarkdownEditor';
import { NetworkDisplay } from '@/components/NetworkDisplay';
import { PopoverButton } from '@/components/Review/PopoverButton';
import {
  SubmissionTile,
  SubmissionType,
} from '@/components/Review/SubmissionTile';
import { SubmitButton } from '@/components/SubmitButton';
import { waitUntilBlock } from '@/utils/graphHelpers';
import { handleError, handleTxLoading } from '@/utils/helpers';
import { Metadata, uploadFiles, uploadMetadata } from '@/utils/metadata';
import { formatAddress, useWallet } from '@/web3';
import { getQuestChainContract } from '@/web3/contract';

type Props = {
  questChain: graphql.QuestChainInfoFragment;
  questStatuses: graphql.QuestStatusInfoFragment[];
  fetching: boolean;
  refresh: () => void;
};

export const QuestChainV1ReviewPage: React.FC<Props> = ({
  questStatuses,
  questChain,
  fetching,
  refresh,
}) => {
  const { isOpen, onClose } = useDisclosure();
  const [quest, setQuest] = useState<SubmissionType | null>(null);
  const [awaitingReview, setAwaitingReview] = useState<SubmissionType[]>([]);
  const [reviewed, setReviewed] = useState<SubmissionType[] | null>([]);

  const [rejecting, setRejecting] = useState(false);
  const [accepting, setAccepting] = useState(false);

  const [checkedAwaitingReview, setCheckedAwaitingReview] = useState<boolean[]>(
    [],
  );

  const setCheckedItem = (index: number) => {
    checkedAwaitingReview[index] = !checkedAwaitingReview[index];
    setCheckedAwaitingReview([...checkedAwaitingReview]);
  };

  const { provider, address, chainId } = useWallet();

  const isDisabled = chainId !== questChain?.chainId;

  useEffect(() => {
    if (questStatuses) {
      setAwaitingReview(
        questStatuses
          .filter(q => q.status === 'review')
          .filter(q =>
            reviewed ? reviewed?.every(review => review.id !== q.id) : true,
          )
          .map(q => ({
            id: q.id,
            userId: q.user.id,
            questId: q.quest.questId,
            name: q.quest.name,
            description: q.quest.description,
            submissionDescription: String(
              q.submissions[q.submissions.length - 1].description,
            ),
            submissionUrl:
              q.submissions[q.submissions.length - 1]?.externalUrl || undefined,
            submissionTimestamp: Number(
              q.submissions[q.submissions.length - 1].timestamp,
            ),
          })),
      );
    } else setAwaitingReview([]);
  }, [questStatuses, reviewed]);

  const allAwaitingReviewChecked =
    checkedAwaitingReview.length !== 0 &&
    checkedAwaitingReview.length === awaitingReview.length &&
    checkedAwaitingReview.every(item => item);

  const isAwaitingReviewIndeterminate =
    checkedAwaitingReview.some(Boolean) && !allAwaitingReviewChecked;

  const [reviewDescription, setReviewDescription] = useState('');
  const [myFiles, setMyFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setMyFiles([...myFiles, ...acceptedFiles]);
    },
    [myFiles],
  );

  const { getRootProps, getInputProps, open } = useDropzone({
    // Disable click and keydown behavior
    noClick: true,
    noKeyboard: true,
    onDrop,
  });

  const removeFile = (file: File) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  const onModalClose = useCallback(() => {
    setReviewDescription('');
    setMyFiles([]);
    setQuest(null);
    onClose();
  }, [onClose]);

  const onReview = useCallback(
    (selected: SubmissionType) => {
      setReviewed((reviewed || []).concat(selected));
    },
    [reviewed],
  );

  const onReviewMultiple = useCallback(
    (selected: SubmissionType[]) => {
      setReviewed((reviewed || []).concat(selected));
    },
    [reviewed],
  );

  const {
    onOpen: onOpenAccept,
    onClose: onCloseAccept,
    isOpen: isOpenAccept,
  } = useDisclosure();
  const {
    onOpen: onOpenReject,
    onClose: onCloseReject,
    isOpen: isOpenReject,
  } = useDisclosure();

  const onSubmit = useCallback(
    async (success: boolean) => {
      if (
        !chainId ||
        !questChain ||
        !provider ||
        chainId !== questChain.chainId
      )
        return;
      if (quest && reviewDescription) {
        setRejecting(!success);
        setAccepting(success);

        let tid = toast.loading('Uploading metadata to IPFS via web3.storage');
        try {
          const metadata: Metadata = {
            name: `Review - Quest - ${quest.name} - User - ${quest.userId} - Reviewer - ${address}`,
            description: reviewDescription,
          };
          if (myFiles.length > 0) {
            const filesHash = await uploadFiles(myFiles);
            metadata.external_url = `ipfs://${filesHash}`;
          }

          const hash = await uploadMetadata(metadata);
          const details = `ipfs://${hash}`;
          toast.dismiss(tid);
          tid = toast.loading(
            'Waiting for Confirmation - Confirm the transaction in your Wallet',
          );

          const contract = getQuestChainContract(
            questChain.address,
            questChain.version,
            provider.getSigner(),
          );
          const tx = await (questChain.version === '1'
            ? (contract as contracts.V1.QuestChain).reviewProofs(
                [quest.userId],
                [quest.questId],
                [success],
                [details],
              )
            : (contract as contracts.V0.QuestChain).reviewProof(
                quest.userId,
                quest.questId,
                success,
                details,
              ));
          toast.dismiss(tid);
          tid = handleTxLoading(tx.hash, chainId);
          const receipt = await tx.wait(1);
          toast.dismiss(tid);
          tid = toast.loading(
            'Transaction confirmed. Waiting for The Graph to index the transaction data.',
          );
          await waitUntilBlock(chainId, receipt.blockNumber);
          toast.dismiss(tid);
          toast.success(
            `Successfully ${success ? 'Accepted' : 'Rejected'} the Submission!`,
          );
          refresh();
          onModalClose();
        } catch (error) {
          toast.dismiss(tid);
          handleError(error);
        }

        setRejecting(false);
        setAccepting(false);
      }
    },
    [
      refresh,
      quest,
      reviewDescription,
      myFiles,
      onModalClose,
      address,
      chainId,
      questChain,
      provider,
    ],
  );

  return (
    <VStack w="100%" px={{ base: 0, md: 12, lg: 40 }} spacing={8}>
      <Flex w="full">
        <NextLink
          as={`/chain/${questChain.chainId}/${questChain.address}`}
          href="/chain/[chainId]/[address]"
          passHref
        >
          <ChakraLink display="block" _hover={{}} w="full">
            <Flex alignItems="center" _hover={{ textDecor: 'underline' }}>
              <ArrowBackIcon mr={2} />
              <Text fontSize={14}>Back to quest chain details</Text>
            </Flex>
          </ChakraLink>
        </NextLink>
      </Flex>
      <Flex w="100%" justifyContent="space-between">
        <Flex flexDirection="column" mb={8}>
          <Text
            fontSize="5xl"
            fontWeight="bold"
            lineHeight="3.5rem"
            fontFamily="heading"
            mb={3}
          >
            {questChain.name}
          </Text>
          <Box>
            <NetworkDisplay chainId={questChain.chainId} />
          </Box>
        </Flex>
        {reviewed?.length ? (
          <Flex
            bgColor="whiteAlpha.100"
            borderRadius="full"
            borderColor="transparent"
            height={16}
            alignItems="center"
            pr={2}
            pl={16}
          >
            <Text mr={6}>
              {reviewed.length} Review{reviewed.length > 1 ? 's' : ''} ready
            </Text>
            <SubmitButton>Submit</SubmitButton>
          </Flex>
        ) : (
          <></>
        )}
      </Flex>
      <VStack w="100%" spacing={6}>
        {fetching ? (
          <Spinner color="main" />
        ) : (
          <Tabs w="full" p={0}>
            <TabList>
              <Tab
                color="gray.500"
                _selected={{
                  color: 'blue.50',
                  borderBottom: 'solid 2px white',
                }}
              >
                Awaiting review{' '}
                <Text
                  bgColor="whiteAlpha.300"
                  borderRadius={10}
                  py="2px"
                  px={1.5}
                  ml={2}
                  fontSize={11}
                >
                  {awaitingReview.length}
                </Text>
              </Tab>
              <Tab
                color="gray.500"
                _selected={{
                  color: 'blue.50',
                  borderBottom: 'solid 2px white',
                }}
              >
                Reviewed
                <Text
                  bgColor="whiteAlpha.300"
                  borderRadius={10}
                  py="2px"
                  px={1.5}
                  ml={2}
                  fontSize={11}
                >
                  {reviewed?.length || 0}
                </Text>
              </Tab>
              <Tab
                color="gray.500"
                _selected={{
                  color: 'blue.50',
                  borderBottom: 'solid 2px white',
                }}
              >
                Submitted
                <Text
                  bgColor="whiteAlpha.300"
                  borderRadius={10}
                  py="2px"
                  px={1.5}
                  ml={2}
                  fontSize={11}
                >
                  {0}
                </Text>
              </Tab>
              <Tab
                color="gray.500"
                _selected={{
                  color: 'blue.50',
                  borderBottom: 'solid 2px white',
                }}
              >
                All
                <Text
                  bgColor="whiteAlpha.300"
                  borderRadius={10}
                  py="2px"
                  px={1.5}
                  ml={2}
                  fontSize={11}
                >
                  {0}
                </Text>
              </Tab>
            </TabList>

            <Flex py={4} w="full" justifyContent="space-between">
              <Flex gap={4}>
                <Box
                  borderRadius={24}
                  bgColor="rgba(255, 255, 255, 0.06)"
                  px={8}
                >
                  <Checkbox
                    py={3}
                    isChecked={allAwaitingReviewChecked}
                    isIndeterminate={isAwaitingReviewIndeterminate}
                    onChange={e =>
                      setCheckedAwaitingReview(
                        awaitingReview.map(() => e.target.checked),
                      )
                    }
                  ></Checkbox>
                </Box>

                {checkedAwaitingReview.some(item => item) && (
                  <>
                    <PopoverButton
                      review={awaitingReview.filter(
                        (_, i) => checkedAwaitingReview[i],
                      )}
                      onReview={onReviewMultiple}
                      isDisabled={isDisabled}
                      onOpen={onOpenReject}
                      onClose={onCloseReject}
                      isOpen={isOpenReject}
                      onCloseOther={onCloseAccept}
                      success={false}
                    />
                    <PopoverButton
                      review={awaitingReview.filter(
                        (_, i) => checkedAwaitingReview[i],
                      )}
                      onReview={onReviewMultiple}
                      isDisabled={isDisabled}
                      onOpen={onOpenAccept}
                      onClose={onCloseAccept}
                      isOpen={isOpenAccept}
                      onCloseOther={onCloseReject}
                      success={true}
                    />
                  </>
                )}
              </Flex>
              <Flex gap={4}>
                <Select
                  placeholder="Sort"
                  fontSize={14}
                  fontWeight="bold"
                  bgColor="whiteAlpha.100"
                  borderRadius={24}
                  borderColor="transparent"
                >
                  <option value="date-asc">Date Asc</option>
                  <option value="date-desc">Date Desc</option>
                </Select>
                <Select
                  placeholder="Filter"
                  fontSize={14}
                  fontWeight="bold"
                  bgColor="whiteAlpha.100"
                  borderRadius={24}
                  borderColor="transparent"
                >
                  {questChain.quests.map(({ questId }) => (
                    <option key={questId} value={questId}>
                      Quest {Number(questId) + 1}
                    </option>
                  ))}
                </Select>
                <Button
                  px={12}
                  color="gray.200"
                  fontSize={14}
                  fontWeight="bold"
                  bgColor="whiteAlpha.100"
                  borderRadius={24}
                >
                  Expand all
                </Button>
              </Flex>
            </Flex>

            <TabPanels>
              <TabPanel p={0}>
                <Accordion allowMultiple defaultIndex={[]}>
                  {awaitingReview.map((review, index) => (
                    <SubmissionTile
                      review={review}
                      onReview={onReview}
                      key={review.id}
                      isDisabled={isDisabled}
                      checked={checkedAwaitingReview[index]}
                      onCheck={() => setCheckedItem(index)}
                    />
                  ))}
                </Accordion>
              </TabPanel>
              <TabPanel>
                <Accordion allowMultiple defaultIndex={[]}>
                  {reviewed &&
                    reviewed.map(review => (
                      <SubmissionTile
                        review={review}
                        onReview={onReview}
                        key={review.id}
                        isDisabled={isDisabled}
                      />
                    ))}
                </Accordion>
              </TabPanel>
              <TabPanel>Submitted</TabPanel>
              <TabPanel>All</TabPanel>
            </TabPanels>
          </Tabs>
        )}
      </VStack>
      <Modal isOpen={!!quest && isOpen} onClose={onModalClose} size="xl">
        <ModalOverlay />
        <ModalContent maxW="40rem">
          <ModalHeader>
            Review Proof - {quest?.name} -{' '}
            {formatAddress(quest?.userId).toUpperCase()}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel color="main" htmlFor="reviewDescription">
                Description
              </FormLabel>
              <Flex pb={4} w="100%">
                <MarkdownEditor
                  value={reviewDescription}
                  onChange={v => setReviewDescription(v)}
                />
              </Flex>
            </FormControl>
            <FormControl>
              <FormLabel color="main" htmlFor="file">
                Upload file
              </FormLabel>
              <Flex
                {...getRootProps({ className: 'dropzone' })}
                flexDir="column"
                borderWidth={1}
                borderStyle="dashed"
                borderRadius={20}
                p={10}
                mb={4}
                onClick={open}
              >
                <input {...getInputProps()} color="white" />
                <Box alignSelf="center">{`Drag 'n' drop some files here`}</Box>
              </Flex>
            </FormControl>
            <Text mb={1}>Files:</Text>
            {myFiles.map((file: File) => (
              <Flex key={file.name} w="100%" mb={1}>
                <IconButton
                  size="xs"
                  borderRadius="full"
                  onClick={removeFile(file)}
                  icon={<SmallCloseIcon boxSize="1rem" />}
                  aria-label={''}
                />
                <Text ml={1} alignSelf="center">
                  {file.name} - {file.size} bytes
                </Text>
              </Flex>
            ))}
          </ModalBody>

          <ModalFooter alignItems="baseline">
            <HStack justify="space-between" spacing={4}>
              <Button
                variant="ghost"
                mr={3}
                onClick={onModalClose}
                borderRadius="full"
              >
                Close
              </Button>
              <SubmitButton
                borderColor="rejected"
                // color="rejected"
                isLoading={rejecting}
                isDisabled={!reviewDescription}
                onClick={() => onSubmit(false)}
              >
                Reject
              </SubmitButton>
              <SubmitButton
                borderColor="main"
                // color="main"
                isLoading={accepting}
                isDisabled={!reviewDescription}
                onClick={() => onSubmit(true)}
              >
                Accept
              </SubmitButton>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
