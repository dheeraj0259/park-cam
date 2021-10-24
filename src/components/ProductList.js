import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './ShopProductCard';

// ----------------------------------------------------------------------

ProductList.propTypes = {
    vehicles: PropTypes.array.isRequired
};

export default function ProductList({ vehicles, ...other }) {
  return (
    <Grid container spacing={3} {...other}>
      {vehicles.map((vehicle) => (
        <Grid key={vehicle.id} item xs={12} sm={6} md={3}>
          <ShopProductCard vehicle={vehicle} />
        </Grid>
      ))}
    </Grid>
  );
}
