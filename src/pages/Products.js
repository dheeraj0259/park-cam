import { useState, useEffect } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
//
import FuzzySearch from 'fuzzy-search';
import { getVehicles } from '../services/vehicle'

// ----------------------------------------------------------------------

export default function Products() {
    const [vehicles, setVehicles] = useState(null);
    const [filteredVehicles, setFilteredVehicles] = useState(null);

    useEffect(() => {
        getVehicles().then(res => {
            setVehicles(res.data);
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
        <Typography variant="h4" sx={{ mb: 5 }}>
          Registered Vehicle List
        </Typography>
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

        {filteredVehicles && filteredVehicles.length ? <ProductList vehicles={filteredVehicles} /> : "" }
      </Container>
  );
}
