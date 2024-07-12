import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

type Props = {
  open: boolean;
  severity: "success" | "info" | "warning" | "error";
  message: string | null;
  onClose: () => void;
  duration?: number;
};

export const CustomAlert = ({
  open,
  severity,
  onClose,
  message = "some error",
  duration = 5000,
}: Props) => {
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
      <Alert variant="outlined" severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};
