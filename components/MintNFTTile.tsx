import {
  Button,
  Flex,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { contracts, graphql } from '@quest-chains/sdk';
import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { TwitterShareButton } from 'react-share';

import VictoryCupImage from '@/assets/victory-cup.svg';
import { waitUntilBlock } from '@/utils/graphHelpers';
import { handleError, handleTxLoading } from '@/utils/helpers';
import { useWallet } from '@/web3';
import { getQuestChainContract } from '@/web3/contract';

import { MastodonShareButton } from './MastodonShareButton';

type QuestChainTileProps = {
  questChain: graphql.QuestChainInfoFragment;
  completed: number;
  onSuccess?: () => void;
  QCURL: string;
};

export const MintNFTTile: React.FC<QuestChainTileProps> = ({
  questChain,
  completed,
  onSuccess,
  QCURL,
}) => {
  const { provider, chainId, address } = useWallet();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isMinting, setMinting] = useState(false);
  const onMint = useCallback(async () => {
    if (!chainId || questChain.chainId !== chainId || !address || !provider)
      return;
    setMinting(true);
    let tid = toast.loading(
      'Waiting for Confirmation - Confirm the transaction in your Wallet',
    );
    try {
      const contract = getQuestChainContract(
        questChain.address,
        questChain.version,
        provider.getSigner(),
      );

      const tx = await (questChain.version === '1'
        ? (contract as contracts.V1.QuestChain).mintToken()
        : (contract as contracts.V0.QuestChain).mintToken(address));
      toast.dismiss(tid);
      tid = handleTxLoading(tx.hash, questChain.chainId);
      const receipt = await tx.wait(1);
      toast.dismiss(tid);
      tid = toast.loading(
        'Transaction confirmed. Waiting for The Graph to index the transaction data.',
      );
      await waitUntilBlock(questChain.chainId, receipt.blockNumber);
      toast.dismiss(tid);
      toast.success(`Successfully minted your NFT`);
      onOpen();
    } catch (error) {
      toast.dismiss(tid);
      handleError(error);
    } finally {
      setMinting(false);
    }
  }, [questChain, address, chainId, onOpen, provider]);

  const QCmessage =
    'I just acquired a soulbound NFT for completing this quest chain.';

  return (
    <VStack
      w="100%"
      p={8}
      borderRadius={8}
      bg="rgba(255,255,255, 0.1)"
      color="white"
      textAlign="center"
      spacing={4}
    >
      <Image src={VictoryCupImage.src} alt="Success" />
      <Text>
        {`You have successfully finished ${
          completed > 1 ? `all ${completed} quests` : 'all quests'
        } from ${questChain.name ?? 'this quest chain'}.`}
      </Text>
      <Button
        w="100%"
        isLoading={isMinting}
        onClick={onMint}
        borderRadius="full"
        _hover={{
          bg: 'main.100',
        }}
        bg="main"
        color="black"
      >
        MINT YOUR NFT
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onSuccess?.();
          onClose();
        }}
        scrollBehavior="inside"
        isCentered
      >
        <ModalOverlay />
        <ModalContent maxW="34rem">
          <ModalCloseButton />
          <ModalBody textAlign="center" py={12}>
            <Text fontSize={20} mb={2}>
              👏 Congratulations, you have successfully minted your NFT!
            </Text>
            {/* <Image
              src={ipfsUriToHttp(questChain.token.imageUrl)}
              alt="Quest Chain NFT badge"
            /> */}
            <Text>Now is the perfect time to let everybody know!</Text>
            <Text mb={6}>
              Use the buttons below to share it on Twitter and Mastodon.
            </Text>
            <Flex gap={3} justifyContent="center">
              <TwitterShareButton
                url={QCURL}
                title={QCmessage}
                via="questchainz"
              >
                <Button bgColor="#4A99E9" p={4} h={7}>
                  <Image src="/twitter.svg" alt="twitter" height={4} mr={1} />
                  Tweet
                </Button>
              </TwitterShareButton>
              <MastodonShareButton message={QCmessage + ' ' + QCURL} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </VStack>
  );
};
