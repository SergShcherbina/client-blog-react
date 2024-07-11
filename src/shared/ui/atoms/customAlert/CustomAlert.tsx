import { Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";

type Props = {
  open: boolean;
  severity: "success" | "info" | "warning" | "error";
  text?: string;
  onClose: () => void;
  duration?: number;
};

export const CustomAlert = ({
  open,
  severity,
  onClose,
  text = "some error",
  duration = 5000,
}: Props) => {
  return (
    <Snackbar open={open} autoHideDuration={duration} onClose={onClose}>
      <Alert variant="outlined" severity={severity}>
        {text}
      </Alert>
    </Snackbar>
  );
};
