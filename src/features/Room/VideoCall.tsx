import React, { useState } from "react";
import { Avatar, Button, Box, Flex, Center } from "@chakra-ui/react";
import { Users, MessageSquare, Mic, MicOff, Video, VideoOff, Phone, Monitor, MoreVertical } from "react-feather";

export default function VideoCall() {
  const [isVideoOn, setIsVideoOn] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);

  return (
    <Box h="100vh" bg="black" display="flex" flexDirection="column">
      {/* Main video area */}
      <Box flex={1} position="relative" w="full">
        {isVideoOn ? (
          <Box position="absolute" inset={0} bg="zinc.900">
            {/* Placeholder for video stream */}
            <Center h="full" color="zinc.500">
              Waiting for video...
            </Center>
          </Box>
        ) : (
          <Box position="absolute" inset={0} display="flex" alignItems="center" justifyContent="center" bg="zinc.900">
            <Avatar size="2xl" src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-irePPzq9HeGqkC5C3JRkzDzRfBrhum.png" name="Participant" />
          </Box>
        )}

        {/* Self view */}
        <Box position="absolute" bottom={4} right={4} w="48" h="36" bg="zinc.800" borderRadius="lg" overflow="hidden" borderWidth="1px" borderColor="zinc.700">
          <Center h="full">
            <Avatar size="xl" src="/placeholder.svg" name="You" />
          </Center>
        </Box>
      </Box>

      {/* Call controls */}
      <Box px={4} py={6} bg="zinc.900">
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap={2}>
            <Button variant="ghost" size="sm" borderRadius="full" _hover={{ bg: "zinc.800" }}>
              <Users size={20} />
            </Button>
            <Button variant="ghost" size="sm" borderRadius="full" _hover={{ bg: "zinc.800" }}>
              <MessageSquare size={20} />
            </Button>
          </Flex>

          <Flex alignItems="center" gap={4}>
            <Button
              variant="ghost"
              size="sm"
              borderRadius="full"
              bg={!isAudioOn ? "red.500/10" : undefined}
              color={!isAudioOn ? "red.500" : undefined}
              _hover={{ bg: !isAudioOn ? "red.500/20" : "zinc.800" }}
              onClick={() => setIsAudioOn(!isAudioOn)}
            >
              {isAudioOn ? <Mic size={24} /> : <MicOff size={24} />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              borderRadius="full"
              bg={!isVideoOn ? "red.500/10" : undefined}
              color={!isVideoOn ? "red.500" : undefined}
              _hover={{ bg: !isVideoOn ? "red.500/20" : "zinc.800" }}
              onClick={() => setIsVideoOn(!isVideoOn)}
            >
              {isVideoOn ? <Video size={24} /> : <VideoOff size={24} />}
            </Button>
            <Button variant="solid" size="sm" borderRadius="full" bg="red.500" _hover={{ bg: "red.600" }}>
              <Phone size={24} style={{ transform: "rotate(135deg)" }} />
            </Button>
          </Flex>

          <Flex alignItems="center" gap={2}>
            <Button variant="ghost" size="sm" borderRadius="full" _hover={{ bg: "zinc.800" }}>
              <Monitor size={20} />
            </Button>
            <Button variant="ghost" size="sm" borderRadius="full" _hover={{ bg: "zinc.800" }}>
              <MoreVertical size={20} />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}