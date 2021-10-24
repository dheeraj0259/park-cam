import { useState, useEffect } from 'react';
// material
import { Container, Stack, Typography, Box } from '@mui/material';
// components
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
//
import FuzzySearch from 'fuzzy-search';
import { getVehicles } from '../services/vehicle'

export default function Products() {
    const [vehicles, setVehicles] = useState(null);
    const [filteredVehicles, setFilteredVehicles] = useState(null);

    useEffect(() => {
        getVehicles().then(res => {
            setVehicles(res.data.sort((a,b) => {  
                let nameA = a.status.toUpperCase();
                let nameB = b.status.toUpperCase();
                if (nameB < nameA) {
                  return -1;
                }
                if (nameB > nameA) {
                  return 1;
                }
              
                // names must be equal
                return 0; }));
            setFilteredVehicles(res.data);
        })
    }, [])

    const searchVehicles = (value) => {
        const searcher = new FuzzySearch(vehicles, ['plateNo', 'owner', 'status']);

        const result = searcher.search(value);
        setFilteredVehicles(result);
    }

  return (
      <Container sx={{ mt: 12 }}>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="center"
          sx={{ mb: 5 }}
        >
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
            <Typography variant="h4">
            Registered Vehicle List
            </Typography>
            </Box>
        </Stack>
        <SearchBar filter={searchVehicles} />
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="flex-end"
          sx={{ mb: 5 }}
        >
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          </Stack>
        </Stack>

        {filteredVehicles && filteredVehicles.length ? <ProductList vehicles={filteredVehicles.sort((a, b) => { return a.status - b.status } )} /> : "" }
      </Container>
  );
}
