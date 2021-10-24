import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
//
import Label from './Label';
import ColorPreview from './ColorPreview';

// ----------------------------------------------------------------------

const ProductImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute'
});

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
    vehicle: PropTypes.object
};

export default function ShopProductCard({ vehicle }) {
  const { plateNo, imgPath, owner, status } = vehicle;

  return (
    <Card sx={{ mb: 5 }}>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={ status === "verified" ? "info" : "error" }
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase'
            }}
          >
            {status}
          </Label>
        )}
        <ProductImgStyle alt={plateNo} src={imgPath} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            LICENCE PLATE NO: {plateNo}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
              }}
            >
              OWNER: {owner}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
