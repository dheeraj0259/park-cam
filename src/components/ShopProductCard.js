import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import TodayIcon from '@mui/icons-material/Today';
//
import Label from './Label';

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
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Box
            component="img"
            src="/static/license-plate.png"
            alt="graph"
            sx={{ height: 30 }}
            />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
            >
             {plateNo}
            </Typography>
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <PersonIcon style={{ fontSize: 20, color: "#7A0C2E" }} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
              }}
            >
              {owner}
            </Typography>
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
            <TodayIcon style={{ fontSize: 20, color: "#7A0C2E" }} />
          <Typography variant="subtitle1">
            <Typography
              component="span"
              variant="body1"
              sx={{
                color: 'text.disabled',
              }}
            >
              {new Date().toDateString()}
            </Typography>
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
