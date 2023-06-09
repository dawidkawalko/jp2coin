import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useForm from "../../../hooks/useForm";

interface FormTextFieldProps {
  name: string;
  errors: Record<string, string>;
  [key: string]: {};
}

const FormTextField = ({ name, errors, ...props }: FormTextFieldProps) => {
  return (
    <TextField
      variant="standard"
      color="secondary"
      fullWidth
      sx={{ mb: 3 }}
      name={name}
      error={!!errors[name]}
      helperText={errors[name]}
      {...props}
    />
  );
};

const ContactSection = () => {
  const formRef = useRef<any>();
  const [sending, setSending] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [failSnackbarOpen, setFailSnackbarOpen] = useState(false);

  const handleSuccessSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSuccessSnackbarOpen(false);
  };

  const handleFailSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setFailSnackbarOpen(false);
  };

  const onSubmit = (trimmedData: Record<string, string>) => {
    setSending(true);

    emailjs
      .send(
        "service_z41ltns",
        "template_4n8qybq",
        trimmedData,
        "J5vUGf1itExGQcZeQ"
      )
      .then(
        () => {
          setSuccessSnackbarOpen(true);
          reset();
        },
        () => {
          setFailSnackbarOpen(true);
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  const { data, errors, handleChange, handleSubmit, reset } = useForm({
    initialData: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: onSubmit,
  });

  return (
    <>
      <Box className="anchor" id="contact"></Box>
      <Grid item container justifyContent="center" mt={5}>
        <Grid item xs={10}>
          <Typography
            fontSize={{ xs: 30, md: 40 }}
            textAlign="center"
            fontWeight={700}
          >
            Contact us
          </Typography>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" mt={2} mb={5}>
        <Grid item xs={10} md={6}>
          <Box
            component="form"
            ref={formRef}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormTextField
              name="name"
              label="Your name"
              errors={errors}
              value={data.name}
              onChange={handleChange}
              disabled={sending}
            />
            <FormTextField
              name="email"
              label="Your email address"
              errors={errors}
              value={data.email}
              onChange={handleChange}
              disabled={sending}
            />
            <FormTextField
              name="message"
              label="Your message"
              errors={errors}
              value={data.message}
              onChange={handleChange}
              disabled={sending}
              multiline
              minRows={5}
            />
            <Box display="flex">
              <Box sx={{ flexGrow: 1 }}></Box>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                sx={{ flexGrow: 1 }}
                disabled={sending}
              >
                {sending ? (
                  <CircularProgress color="secondary" size={25} />
                ) : (
                  "Send"
                )}
              </Button>
              <Box sx={{ flexGrow: 1 }}></Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Grid item container justifyContent="center" mb={5}>
        <Grid item xs={12} md={10}>
          <Typography
            fontSize={{ xs: 20, md: 25 }}
            textAlign="center"
            fontWeight={500}
          >
            Business inquiries and cooperation:
          </Typography>
          <Typography
            fontSize={{ xs: 18, md: 22 }}
            textAlign="center"
            fontWeight={300}
          >
            business@jp2coin.com
          </Typography>
        </Grid>
      </Grid>
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleSuccessSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSuccessSnackbarClose}
          severity="info"
          sx={{ backgroundColor: "gold", color: "black" }}
        >
          Your message has been sent!
        </Alert>
      </Snackbar>
      <Snackbar
        open={failSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleFailSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleFailSnackbarClose} severity="error">
          Could not sent your message.
        </Alert>
      </Snackbar>
    </>
  );
};

export default ContactSection;
