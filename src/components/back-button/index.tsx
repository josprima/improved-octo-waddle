import Button from '@components/button';
import { COLOR } from '@constants/themes';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({
  text,
  onClick,
}: {
  text: string | undefined;
  onClick?: () => void;
}) => {
  return (
    <Button
      style={{
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
      }}
      variant="secondary"
      onClick={onClick}
    >
      <ArrowBackIcon sx={{ color: COLOR.textPrimary, fontSize: 18 }} />
      <span>{text}</span>
    </Button>
  );
};

export default BackButton;
