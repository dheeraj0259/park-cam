// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import ProductList from '../components/ProductList';
//
import PRODUCTS from './mockdata';

// ----------------------------------------------------------------------

export default function Products() {

  return (
      <Container sx={{ mt: 12 }}>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Products
        </Typography>

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

        <ProductList products={PRODUCTS} />
      </Container>
  );
}
