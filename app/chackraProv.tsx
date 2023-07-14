'use client'

import { ChakraProvider, Flex, VStack } from '@chakra-ui/react'

export default function ChackraProv({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <ChakraProvider>
            <Flex
                bg={'gray.300'}
                minH={'100vh'}
                justify={'center'}
                py={20}
                px={10}
            >
                <VStack
                    w={'100%'}
                    maxW={'container.md'}
                    bg={'white'}
                    boxShadow={'lg'}
                    rounded={'lg'}
                    p={5}
                    spacing={5}
                >
                    {children}
                </VStack>
            </Flex>
        </ChakraProvider>
    )
}
