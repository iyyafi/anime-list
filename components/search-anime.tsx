'use client'

import { useState } from 'react'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import {
    Box,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import { CloseIcon, ArrowBackIcon } from '@chakra-ui/icons'

export default function SearchAnime() {
    const router = useRouter()
    const params = useParams()
    const searchParams = useSearchParams()
    const search = searchParams.get('q') // for default value
    const [searchQuery, setSearchQuery] = useState(search || '')

    const handleClear = () => setSearchQuery('')

    function updateSearchQuery(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') {
            const query = searchQuery ? `?q=${searchQuery}` : ''
            router.push(`/${query}`)
        }
    }

    return (
        <Box
            position={'sticky'}
            top={0}
            bg={'white'}
            zIndex={1}
            pb={1}
            w={'100%'}
        >
            <FormControl as="fieldset">
                <FormLabel
                    as="legend"
                    textAlign={'center'}
                    fontWeight={'semibold'}
                    fontSize={'lg'}
                >
                    Find your favorite anime
                </FormLabel>
                <HStack width={'100%'}>
                    {params && params.id ? (
                        <IconButton
                            aria-label="Back"
                            icon={<ArrowBackIcon />}
                            onClick={router.back}
                        />
                    ) : null}
                    <InputGroup size="md">
                        <Input
                            autoFocus={true}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            onKeyDown={(e) => updateSearchQuery(e)}
                            placeholder="Type your favorite anime title"
                        />
                        {searchQuery ? (
                            <InputRightElement top={'50%'} mt={'-20px'} pr={2}>
                                <IconButton
                                    variant={'ghost'}
                                    aria-label="Prev Data"
                                    icon={<CloseIcon boxSize={3} />}
                                    onClick={handleClear}
                                />
                            </InputRightElement>
                        ) : null}
                    </InputGroup>
                </HStack>
                <FormHelperText
                    textAlign={'right'}
                    fontStyle={'italic'}
                    fontSize={'xs'}
                >
                    Hit Enter to search.
                </FormHelperText>
            </FormControl>
        </Box>
    )
}
